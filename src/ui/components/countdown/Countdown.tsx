import {useTimer} from 'react-timer-hook';
import s from '../countdown/Counter.module.css'
export function Timer({expiryTimestamp}: any) {
    const {
        seconds,
        minutes,
        hours,
        days,
    } = useTimer({expiryTimestamp, onExpire: () => console.warn('onExpire called')});


    return (

        <div className={s.flex}>
            <div className={s.container}>
                <span>{days}</span>
                <span className={s.span}>Days</span>
            </div>
            <div className={s.container}>
                <span>{hours}</span>
                <span className={s.span}>Hours</span>
            </div>
            <div className={s.container}>
                <span>{minutes}</span>
                <span className={s.span}>Minutes</span>
            </div>
            <div className={s.container}>
                <span>{seconds}</span>
                <span className={s.span}>Seconds</span>
            </div>
        </div>
    );
}

