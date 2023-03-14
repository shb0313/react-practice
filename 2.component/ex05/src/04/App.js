import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {

    const [ticks, srtTicks] = useState(0);

    

    return (
        <div>
            <span>{ticks}</span>
            {
                ticks % 10 === 0 ?
                    null
                    :
                    <Clock
                        message={'ex05: useEffect Hook example'}
                        hours={'10'}
                        minutes={'20'}
                        seconds={'50'}/>
            }
        </div>
    );
}