import React from 'react'
import "./styles.scss"
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';
import useVisualMode from 'hooks/useVisualMode';

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVE = "SAVE";
  const DELETE = "DELETE";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  // to save appointment
  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVE);
    props.bookInterview(props.id, interview)
      .then(() => transition(SHOW))
  };

  // to delete appointment
  const onDelete = (id) => {
    // show "deleting" transition before cancelling is resolved
    transition(DELETE);
    props.cancelInterview(id)
      .then(() => transition(EMPTY))
  };

  return (
    <article className="appointment">
      <Header time={props.time}/>
      {mode === SHOW && <Show student={props.interview.student} interviewer={props.interview.interviewer} onEdit={() => transition(EDIT)} onDelete={() => transition(CONFIRM)} />}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === CREATE && <Form interviewers={props.interviewers} onCancel={() => back(EMPTY)} onSave={save} />}
      {mode === SAVE && <Status message="Saving" />}
      {mode === DELETE && <Status message="Deleting" />}
      {mode === CONFIRM && <Confirm message="Are you sure you want to delete?" onCancel={() => back(SHOW)} onConfirm={() => onDelete(props.id)} />}
      {mode === EDIT && <Form student={props.interview.student} interviewer={props.interview.interviewer.id} interviewers={props.interviewers} onCancel={() => back(EMPTY)} onSave={save} />}

    </article>
  );
}