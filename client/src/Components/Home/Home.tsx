import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./homeCss.css"
import { useSelector } from 'react-redux';


export default function Home() {

  const user = useSelector((state: RootState) => state.UserReducer.user  );


  return (
    <>
    <div className='container_home mt-5'>
    <Card className="text-center">
          <Card.Body>
              <Card.Title>Правила игры</Card.Title>
              <hr/>
              <Card.Text>

                Правила командной игры похожи на правила телевизионной версии. Играют одновременно все команды.

                Игра состоит из нескольких раундов. В начале каждого раунда объявляются темы и стоимость вопросов (количество баллов, которые можно получить при правильном ответе на вопрос). Одна из команд выбирает тему и стоимость вопроса, после чего ведущий зачитывает соответствующий вопрос. Время на обсуждение составляет 15 секунд. По истечении 15-ти секунд по сигналу команды записывают свой вариант в бланк ответа и отдают ведущему, при этом, если команда не уверена, то ответ можно вообще не сдавать. В одном раунде 5 тем и 5 различных стоимостей вопросов (т.е. всего 25 вопросов).

                По правилам игры в каждом раунде каждая команда один раз выбирает вопрос. Таким образом, если в игре участвует, например, 15 команд, то разыграно будет ровно 15 вопросов из 25 возможных. Порядок, в котором команды выбирают вопросы, определяется ведущим перед началом раунда.

                В случае правильного ответа команда получает количество очков, равное стоимости вопроса. В случае неправильного ответа команда теряет количество очков, равное стоимости вопроса. Если команда вообще не дает ответа, то ничего не происходит.
              </Card.Text>

            {user.login 
            ?
            <Link to="/game"><Button variant="primary">играть</Button></Link>
            :
            <Link to="/reg"><Button variant="primary">играть</Button></Link> 
               } 

              
          
          
          </Card.Body>
      </Card>
      </div>
      </>
  )
}