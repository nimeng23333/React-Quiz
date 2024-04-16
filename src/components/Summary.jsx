import QUESTIONS from '../../question'

export default function Summary({userAnswers}){
    const skippedAnswers = userAnswers.filter(answer => answer === null);
    const correctAnswers = userAnswers.filter((answer,idx) => answer === QUESTIONS[idx].answers[0]);
    
    const skippedPercentage = Math.round((skippedAnswers.length / userAnswers.length) * 100)
    const correctPercentage = Math.round((correctAnswers.length / userAnswers.length) * 100)
    const wrongPercentage = 100 - skippedPercentage - correctPercentage
    return(
        <div id="summary">
            <h2>Quiz Complete !</h2>
            <div id="summary-stats">
                <p>
                    <span className='number'>{skippedPercentage}%</span>
                    <span className='text'>skipped</span>
                </p>
                <p>
                    <span className='number'>{correctPercentage}%</span>
                    <span className='text'>answerd correctly</span>
                </p>
                <p>
                    <span className='number'>{wrongPercentage}%</span>
                    <span className='text'>answerd incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer,idx) =>{
                    let cssClass = 'user-answer';
                    let correct = false;
                    if(answer === null){
                        cssClass += ' skipped';
                    }else if(answer === QUESTIONS[idx].answers[0]){
                        cssClass += ' correct';
                        correct = true;
                    }else{
                        cssClass += ' wrong';
                    }
                    return(
                        <li key={answer+idx}>
                            <h3>{idx+1}</h3>
                            <p className="question">{QUESTIONS[idx].text}</p>
                            <p className={cssClass}>{answer ?? 'Skipped'}</p>
                            {!correct && <p className="user-answer">Correct Answer: <br />{QUESTIONS[idx].answers[0]}</p>}
                        </li>
                    )
                })}

            </ol>
        </div>
    )
}