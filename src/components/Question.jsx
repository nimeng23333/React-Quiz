import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";
import QUESTIONS from '../../question'
import { useState } from "react";

export default function Question({idx, onTimeout, onSelect}){
    const [answer, setAnswer] = useState({
        selectedAnswer:'',
        isCorrect:null,
    })
    let timer = 30000

    function handleSelectAnswer(answer){
        setAnswer({
            selectedAnswer:answer,
            isCorrect:null,
        })
        setTimeout(()=>{
            setAnswer({
                selectedAnswer:answer,
                isCorrect: answer === QUESTIONS[idx].answers[0],
            })

            setTimeout(()=>{
                onSelect(answer)
            },1000)
        },500)
    }
    let answerState = ''
    if(answer.selectedAnswer){
        if(answer.isCorrect !== null){
            timer = 1000
            answerState = answer.isCorrect? 'correct':'wrong';
        }else{
            timer = 500;
            answerState = 'answered';
        }
    }
    return(
        <div id="question">
            <QuestionTimer key={timer} timeout={timer} onTimeout={answer.selectedAnswer ? null :onTimeout} />
            <h2>{QUESTIONS[idx].text}</h2>
            <Answers answers={QUESTIONS[idx].answers} selectedAnswer={answer.selectedAnswer} answerState={answerState} onSelect={handleSelectAnswer} />
    </div>
    )
}