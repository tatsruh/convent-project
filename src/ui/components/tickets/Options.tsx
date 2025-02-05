import {Option} from "./Option.tsx";
import s from '../tickets/Tickets.module.css'
import {OptionType} from "./Tickets.tsx";

type propsOptions = {
    options: OptionType[]
}
const Options = (props: propsOptions) => {
    return (
        <div>
            <ul className={s.ul}>
                {props.options.map((option, index) => (
                    <li><Option text={option.text} img={option.logo} isActive={option.isActive} key={index}/></li>
                ))}
            </ul>
        </div>
    );
};

export default Options;