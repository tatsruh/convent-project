import s from '../tickets/Tickets.module.css'
import Options from "./Options.tsx";
import { OptionType} from "./Tickets.tsx";


type PropsTicket = {
    img: string;
    name: string;
    oldprice: string;
    newprice: string;
    options: OptionType[]
}
const CompTicket = (props: PropsTicket) => {
    return (
        <div className={s.ticket_container}>
            <img className={s.img} src={props.img} alt="icon"/>
            <span className={s.span}>{props.name}</span>
            <span className={s.oldprice}>{props.oldprice}</span>
            <span className={s.newprice}>{props.newprice}</span>
            <Options options={props.options}></Options>
            <button className={s.button}>Add to cart</button>
        </div>
    );
};

export default CompTicket;