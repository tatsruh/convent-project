import { Typography } from '@mui/material';
import CountUp from "react-countup";
import s from '../animatedNumber/AnimatedNumber.module.css'

type Props = {
    end: number;
    start: number;
    text?: string;
}

const AnimatedNumber = (props: Props) => {
    return (
        <div className={s.containerCopy}>
            <Typography variant="h4">
                <CountUp className={s.number} start={props.start} end={props.end} duration={5} separator="" />
            </Typography>
            <span className={s.span}>{props.text}</span>
        </div>
    );
};

export default AnimatedNumber;
