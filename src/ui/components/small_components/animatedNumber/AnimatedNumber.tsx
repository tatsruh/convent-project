import { Typography } from '@mui/material';
import CountUp from "react-countup";
import s from '../animatedNumber/AnimatedNumber.module.css'

type Props = {
    end: number;
    text: string;
}

const AnimatedNumber = (props: Props) => {
    return (
        <div className={s.container}>
        <Typography variant="h4">
            <CountUp className={s.number} start={0} end={props.end} duration={3} separator="," />
        </Typography>
            <span className={s.span}>{props.text}</span>
        </div>
    );
};

export default AnimatedNumber;
