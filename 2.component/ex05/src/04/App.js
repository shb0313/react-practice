import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {

    const [ticks, setTicks] = useState(0);

    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();


    useEffect(() => {
        setInterval(() => {
            // setTicks(ticks + 1);
            setTicks(tick => tick + 1);
        }, 1000);
    }, []);
    
    useEffect(() => {

        const date = new Date();
        setHours(date.getHours());
        setMinutes(date.getMinutes());
        setSeconds(date.getSeconds());

    }, [ticks]);

    return (
        <div>
            <span>{ticks}</span>
            {
                // ticks % 10 === 0 ?
                //     null
                //     :
                    <Clock
                        message={'ex05: useEffect Hook example'}
                        hours={hours}
                        minutes={minutes}
                        seconds={seconds}    
                    />
            }
        </div>
    );
}


/*
    컴포넌트 라이프사이클 LifeCycle

    마운트    (생성? 시작?)
    업데이트  (뭐가 바뀌거나 그런 느낌.)
    언마운트  (삭제? 끝?)
    ----------------------------------------------------------------

    useEffect(() => { 내가 할 행동 }, []);

    [] : 처음 시작할때만 useEffect를 쓴다.
    [값] : 값이 바뀌나 안바뀌나 쨰려보있다가 바뀌면 useEffect 실행
    ----------------------------------------------------------------

    useState

    java로 치면
    String s = 'sofa';
    int i = 123;
    i = 345;

    react에서는 이렇게 쓰래
    [const/let] [변수명, 변수명변경] = useState(초기값);

    변수명 = 초기값;
    변수명면경(변경값);
*/