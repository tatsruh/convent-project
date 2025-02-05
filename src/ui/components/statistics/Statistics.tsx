import s from '../statistics/Statistics.module.css'
import main from '../../common_css/mainStyles.module.css'
import AnimatedNumber from "../small_components/animatedNumber/AnimatedNumber.tsx";

const Statistics = () => {
    return (
        <div className={s.container} id="statistics">
            <div className={main.container}>
                <div className={main.flexC}>
                    <h2>Last year statistics</h2>
                    <AnimatedNumber start={0} end={3} text={'days'}></AnimatedNumber>
                    <AnimatedNumber start={0} end={46} text={'experts'}></AnimatedNumber>
                    <AnimatedNumber start={0} text={'guests'} end={9890}></AnimatedNumber>

                </div>
            </div>
        </div>
    );
};

export default Statistics;