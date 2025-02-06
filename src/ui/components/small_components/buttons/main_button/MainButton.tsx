import s from '../main_button/MainButton.module.css'
type Props = {
    src: string,
    name: string,
    img: string,
}

const MainButton = (props: Props) => {
    return (
            <a href={props.src} rel="noopener noreferrer">
                <div className={s.container}>
                    <img className={s.img} src={props.img} alt="button_icon"/>
                    <span className={s.span}>{props.name}</span>
                </div>
            </a>
    );
};

export default MainButton;