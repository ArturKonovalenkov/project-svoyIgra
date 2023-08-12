import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, ProgressBar, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ADD_GAME } from "../../redux/type.redux";
import ModalQuest from "../ModalQuest/ModalQuest";
import "./Question.css";

export default function Question({ question, setRight, setWrong }) {
  // const answerInitState = {
  //   id: question.id,
  //   question: question.quest_body,
  //   points: question.points,
  //   answer: "",
  // };

  const [show, setShow] = useState(false);
  const [turnTimer, setTurnTimer] = useState("off");
  // const [time, setTime] = useState(0);
  // const [input, setInput] = useState(answerInitState);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTime(time + 1);
  //   }, 50);

  //   if (time === 100) {
  //     return () => clearInterval(timer);
  //   }
  // }, [time]);

  const handleClose = () => {
    setShow(false);
    setTurnTimer("off");
    // setTime(100);
  };

  const showHandler = () => {
    setShow(true);
    setTurnTimer("on");
    // const timer = setInterval(
    //   () => setTime((time) => (time < 100 ? time + 1 : clearInterval(timer))),
    //   50
    // );

    // if (time === 100) {
    //   console.log(time);
    //   clearInterval(timer);
    // }
  };

  // if (time === undefined) {
  //   console.log("time");

  //   handleClose();
  // }

  // console.log(time);

  // const questInputHandler = (e) => {
  //   setInput((pre) => ({ ...pre, answer: e.target.value }));
  // };

  // const questSubmitHandler = (e) => {
  //   e.preventDefault();
  //   console.log("submit");

  //   if (
  //     input.answer.toLowerCase().trim() === question.right_answer.toLowerCase()
  //   ) {
  //     dispatch({
  //       type: ADD_GAME,
  //       payload: { questId: input.id, points: input.points, time },
  //     });
  //     alert("Правильно!");
  //     handleClose();
  //   } else {
  //     dispatch({
  //       type: ADD_GAME,
  //       payload: { questId: input.id, points: -input.points, time },
  //     });
  //     alert(`Неверно. Правильный ответ ${question.right_answer}`);
  //     handleClose();
  //   }
  // };

  //   console.log(input);

  //   console.log(time);

  return (
    <>
      <td
        key={`quest ${question.id}`}
        className="border-start quest text-center"
        data-qid={question.id}
        data-quest={question.quest_body}
        onClick={showHandler}
        style={{ backgroundColor: "#0006ff", color: "yellow", width: "15%" }}
      >
        {question.points}
      </td>

      {turnTimer === "on" && (
        <ModalQuest
          question={question}
          showHandler={showHandler}
          handleClose={handleClose}
          show={show}
          setRight={setRight}
          setWrong={setWrong}
        />
      )}

      {/* <Modal className="main-modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="quest-body">
            {question.quest_body}
          </Modal.Title>
        </Modal.Header>
        <ProgressBar now={time} />
        <Form className="mt-3" onSubmit={questSubmitHandler}>
          <Form.Control
            type="text"
            name="answer"
            id="answer"
            onChange={questInputHandler}
            value={input.answer}
          />
          <br />
          <Button className="mt-2 mb-3" variant="primary" type="submit">
            Ответить
          </Button>
        </Form>
      </Modal> */}
    </>
  );
}
