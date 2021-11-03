import React, { useState } from 'react';
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");
  
  // if student saves appointment with no input, setError, otherwise, invoke onSave
  const validate = () => {
    if (student === "") {
      setError("Student name cannot be blank");
      return;
    }
    setError("");
    props.onSave(student, interviewer);
  };

  const reset = () => {
    setStudent("");
    setInterviewer("");
  };
  
  const cancel = () => {
    reset();
    setError("");
    props.onCancel();
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form onSubmit={event => event.preventDefault()} autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            data-testid="student-name-input"
            placeholder="Enter Student Name"
            value={student}
            onChange={(event) => setStudent(event.target.value)}
          />
          <section className="appointment__validation">
            {error}
          </section>
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          onChange={setInterviewer}
          value={interviewer}
        />
      </section>
      <section className="appointment__card-right">       
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={() => validate()}>Save</Button>
        </section>
      </section>
    </main>
  );
}

// () => cancel()
// use annonymous functions when you need to pass an argument
// otherwise PASS the function by reference to be used..
// reason why we have to call the function props.oncancel is
// because we need to invoke the function ourselves when onclick
// happens

// under Button component
// onClick={() => {
  //   reset();
  //   return props.onCancel;
  // };}