import {Timer} from "./Countdown.tsx";
import s from './Counter.module.css'
import main from '../../common_css/mainStyles.module.css'

const CountdownSection = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 24610799);
    return (
        <div className={s.section_container}>

        <div className={main.container}>
            <div className={main.flexR}>
            <Timer expiryTimestamp={time}></Timer>
            </div>
        </div>
        </div>
    );
};

export default CountdownSection;