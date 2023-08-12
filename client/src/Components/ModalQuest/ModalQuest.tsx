import React, { useEffect, useState } from "react";
import {
  Modal,
  ProgressBar,
  Button,
  Form,
  Col,
  Row,
  Toast,
  Alert,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ADD_GAME, RIGHT_ANSWER } from "../../redux/type.redux";

export default function ModalQuest({
  question,
  showHandler,
  handleClose,
  show,
  setRight,
  setWrong,
}) {
  const answerInitState = {
    id: question.id,
    question: question.quest_body,
    points: question.points,
    answer: "",
  };
  const [time, setTime] = useState(0);
  const [input, setInput] = useState(answerInitState);
  // const [right, setRight] = useState(false);
  // const [wrong, setWrong] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time + 0.03125);
    }, 31.25);

    if (time >= 20) {
      clearInterval(timer);
      dispatch({
        type: ADD_GAME,
        payload: { questId: input.id, points: -input.points, time },
      });
      dispatch({ type: RIGHT_ANSWER, payload: question.right_answer });
      setWrong(true);
    }
    return () => clearInterval(timer);
  }, [time]);

  console.log(time);

  const questInputHandler = (e) => {
    setInput((pre) => ({ ...pre, answer: e.target.value }));
  };

  const questSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submit");

    if (
      input.answer.toLowerCase().trim() === question.right_answer.toLowerCase()
    ) {
      dispatch({
        type: ADD_GAME,
        payload: { questId: input.id, points: input.points, time },
      });
      // alert("Правильно!");
      handleClose();
      setRight(true);
    } else {
      dispatch({
        type: ADD_GAME,
        payload: { questId: input.id, points: -input.points, time },
      });
      dispatch({ type: RIGHT_ANSWER, payload: question.right_answer });
      // alert(`Неверно. Правильный ответ ${question.right_answer}`);
      handleClose();
      setWrong(true);
    }
  };

  return (
    <>
      <Modal className="main-modal" show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Header>
          <Modal.Title className="quest-body">
            {question.quest_body}
          </Modal.Title>
        </Modal.Header>
        <ProgressBar now={time * 5} />
        <Form className="mt-3 mb-4 d-flex flex-column align-items-center" onSubmit={questSubmitHandler}>
          <Form.Control
            type="text"
            name="answer"
            id="answer"
            onChange={questInputHandler}
            value={input.answer}
            className="w-50"
          />
          <br />
            <Button variant="primary" type="submit" className="w-50">
              Ответить
            </Button>
        </Form>
      </Modal>
    </>
  );
}
