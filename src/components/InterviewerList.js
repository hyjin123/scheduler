import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";
import PropTypes from 'prop-types';

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};

export default function InterviewerList(props) {
  const { interviewers, onChange, value } = props;
  const interviewerArray = interviewers.map((eachInterviewer) => {
    return <InterviewerListItem
    key={eachInterviewer.id}
    name={eachInterviewer.name}
    avatar={eachInterviewer.avatar}
    selected={value === eachInterviewer.id}
    setInterviewer={() => onChange(eachInterviewer.id)}
    />
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewerArray}
      </ul>
    </section>
  );
}