import { useCallback, useState } from "react"
import QUESTIONS from '../../question'

import Question from "./Question";
import Summary from "./Summary";

export default function Quiz(){
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIdx = userAnswers.length;
    const quizComplete = activeQuestionIdx === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
        setUserAnswers( (prevValue => {
            return [...prevValue, selectedAnswer]
        }));
    },[]); 


    const handleSkipAnswer = useCallback(()=>{
        handleSelectAnswer(null)
    },[handleSelectAnswer])

    if(quizComplete){
        return(
            <Summary userAnswers={userAnswers}/>
        )
    }

    return(
        <div id="quiz">
            <Question key={activeQuestionIdx} idx={activeQuestionIdx} onTimeout={handleSkipAnswer} onSelect={handleSelectAnswer} />
        </div>

    )
}