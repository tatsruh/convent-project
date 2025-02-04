import s from '../statistics/Statistics.module.css'
import main from '../../common_css/mainStyles.module.css'
import AnimatedNumber from "../small_components/animatedNumber/AnimatedNumber.tsx";

const Statistics = () => {
    return (
        <div className={s.container}>
            <div className={main.container}>
                <div className={main.flexC}>
                    <h2>Last year statistics</h2>
                    <AnimatedNumber end={3} text={'days'}></AnimatedNumber>
                    <AnimatedNumber end={46} text={'experts'}></AnimatedNumber>
                    <AnimatedNumber text={'guests'} end={9890}></AnimatedNumber>

                </div>
            </div>
        </div>
    );
};

export default Statistics;