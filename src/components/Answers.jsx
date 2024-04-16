import { useRef } from "react";

export default function Answers({answers, selectedAnswer, answerState, onSelect}){
    const shuffledAnswers = useRef();
    if(!shuffledAnswers.current){
        shuffledAnswers.current = [...answers]
        shuffledAnswers.current.sort(()=> Math.random() - 0.5);
    }//即使上层的quiz组件被重新释放，这个answer的组件有已打乱的答案，就不会再次打乱了
    return(
        <ul id="answers">
                {shuffledAnswers.current.map((answer) => {
                    const isSelected = selectedAnswer === answer;
                    let cssClasses = '';
                    if(isSelected){
                        if(answerState === 'answered'){
                            cssClasses = 'selected'
                        }else{
                            cssClasses = answerState
                        }
 
                    }
                    return(
                    <li key={answer} className="answer">
                        <button onClick={()=> onSelect(answer)} className={cssClasses} disabled={answerState !== ''} >{answer}</button>
                    </li>
                )})}
            </ul>
    )
}