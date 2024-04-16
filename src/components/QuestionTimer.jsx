import { useEffect, useState } from "react";

export default function QuestionTimer({timeout, onTimeout}){
    const [remainingTime, setRemainingTime] = useState(timeout)
    useEffect(()=>{
        const timer = setTimeout(() =>{
            onTimeout();
        }, timeout);
        return ()=>{clearTimeout(timer)}
    },[timeout,onTimeout])

    useEffect(()=>{
        const interval = setInterval(()=>{
            setRemainingTime(prevValue => prevValue-100)
        },100)
        return()=>{clearInterval(interval)}
    },[])
    //在这里需要用useEffect是因为这里的setRemainingTime导致了这个组件的更新，也就会创建一个新的setInterval，这里用useEffect来确保这个interval不会一直被重新创建，而只有当依赖发生变化的时候才执行
    return <progress id="question-time" max={timeout} value={remainingTime} />
}