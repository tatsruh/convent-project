import s from '../tickets/Tickets.module.css'
type OptionProps = {
    img: string;
    text: string;
    isActive: boolean;
}
export const Option = (props: OptionProps) => {
    return (
        <div className={s.option}>
            <img className={s.icon} src={props.img} alt="icon"/>
            <span className={props.isActive ? "" : s.disabled}>{props.text}</span>
        </div>
    );
};

