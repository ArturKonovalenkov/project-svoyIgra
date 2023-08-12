import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Toast, ToastContainer } from "react-bootstrap";
import Question from "../Question/Question";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/types/state";
import { useNavigate } from "react-router-dom";
import { ADD_GAME, END_GAME } from "../../redux/type.redux";
import "./Game.css";

const questInitState = {
  quests: [],
};

export default function Game() {
  const [quest, setQuest] = useState(questInitState);
  const [right, setRight] = useState(false);
  const [wrong, setWrong] = useState(false);
  //   const [show, setShow] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch("http://localhost:3000/game");
        const result = await response.json();
        console.log("result:", result);
        setQuest((pre) => ({ ...pre, quests: result }));
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const questStats = useSelector((state: RootState) => state.GameReducer);
  const answer = useSelector(
    (state: RootState) => state.RightReducer.rightAnswer
  );
  const answeredQuests = questStats.solvedQuests;
  const points = questStats.points;
  const time = questStats.time;

  const endGameHandler = async () => {
    try {
      const response = await fetch("http://localhost:3000/statistica", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ points, time: Math.round(time) }),
      });
      //   const result = await response.json();
      dispatch({ type: END_GAME, payload: "end" });
      navigate("/statistika");
    } catch (error) {
      alert(error);
    }
  };

  //   const showHandler = (e) => {
  //     const id = e.target.dataset.qid;
  //     console.log("id:", id);
  //     const qBody = e.target.dataset.quest;
  //     console.log("qBody:", qBody);
  //     // console.log(document.querySelector(".main-modal"));
  //     setShow(true);
  //     const modalTitle = document.querySelector(".quest-body");
  //     console.log("modalTitle:", modalTitle);
  //     // modalTitle.innerText = qBody;
  //   };

  //   console.log(document.querySelector(".main-modal"));

  //   const handleClose = () => setShow(false);

  console.log(quest);

  return (
    <>
      <div
        className="d-flex flex-column align-items-center mt-5 game-container"
        style={{ color: "yellow" }}
      >
        <div>Всего очков: {points}</div>
        <div>Потрачено времени: {Math.round(time)} секунд</div>
        <Table className="w-75 border game-table">
          <tbody>
            {quest.quests.map((theme) => (
              <tr key={`theme ${theme.id}`}>
                <td
                  className="text-center"
                  style={{ backgroundColor: "#0006ff", color: "yellow" }}
                >
                  {theme.title}
                </td>
                {theme.Questions.map((question) => (
                  <>
                    {answeredQuests.includes(question.id) ? (
                      <td
                        key={`answered ${question.id}`}
                        className="border-start table-light"
                        style={{
                          backgroundColor: "#0006ff",
                          color: "yellow",
                          width: "15%",
                        }}
                      ></td>
                    ) : (
                      <Question
                        key={`quest ${question.id}`}
                        question={question}
                        setRight={setRight}
                        setWrong={setWrong}
                      />
                    )}
                  </>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="success" size="lg" onClick={endGameHandler}>
          Закончить игру
        </Button>
      </div>
      {right && (
        <ToastContainer position="middle-center" style={{ zIndex: 1 }}>
          <Toast
            onClose={() => setRight(false)}
            bg="dark"
            delay={5000}
            autohide
          >
            <Toast.Header>
              <strong className="me-auto">Своя Игра</strong>
              <small>now</small>
            </Toast.Header>
            <Toast.Body className="text-white">Правильно!</Toast.Body>
          </Toast>
        </ToastContainer>
      )}

      {wrong && (
        <ToastContainer position="middle-center" style={{ zIndex: 1 }}>
          <Toast
            onClose={() => setWrong(false)}
            bg="dark"
            delay={5000}
            autohide
          >
            <Toast.Header>
              <strong className="me-auto">Своя Игра</strong>
              <small>now</small>
            </Toast.Header>
            <Toast.Body className="text-white">
              Неправильно. Правильный ответ {answer}
            </Toast.Body>
          </Toast>
        </ToastContainer>
      )}
    </>
  );
}
