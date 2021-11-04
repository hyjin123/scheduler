import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData(initial) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  // useEffect to get days, appointments and interviewers from API and set state
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  // function update the remaining spots
  const updateSpots = (state, appointments, id) => {
    // find the appointments for the day and set it to variable
    let appointments1 = [];
    let index = 0;
    for (const day of state.days) {
      if (day.appointments.includes(id)) {
        appointments1 = [...day.appointments];
        index = day.id - 1;
      }
    }
    let counter = 0;
    for (const appointment of appointments1) {
      if (appointments[appointment].interview === null) {
        counter++;
      }
    }
    const day = {
      ...state.days[index],
      spots: counter
    }
    const daysArray = [
      ...state.days
    ]
    daysArray[index] = day
    return daysArray;

    // ALTERNATIVE WAY TO MAKE A DEEP COPY
    // this creates a DEEP copy and not just shallow copy...[...state.days] makes a shallow copy
    // let newDaysArray = state.days.map(a => {return {...a}})
    // this creates a shallow copy
    // let newDaysArray = [...state.days]
    // newDaysArray[index].spots = counter;
    // return newDaysArray;
  };

  // updates the day state with the new day
  const setDay = (day) => {
    setState({ ...state, day });
  };

  // function to create appointment
  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    // PUT request to update the database with the interview data
    return axios
      .put(`http://localhost:8001/api/appointments/${id}`, {
        interview,
      })
      .then((res) => {
        const days = updateSpots(state, appointments, id)
        setState((prev) => ({
          ...prev,
          appointments,
          days
        }));
      });
  };

  // function to delete appointment
  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    //DELETE request to update the database with the interview data
    return axios
      .delete(`http://localhost:8001/api/appointments/${id}`)
      .then((res) => {
        const days = updateSpots(state, appointments, id)
        setState((prev) => ({
          ...prev,
          appointments,
          days
        }));
      });
  };

  return { state, setDay, bookInterview, cancelInterview };
}
