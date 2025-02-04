import s from '../main_button/MainButton.module.css'
type Props = {
    src: string,
    name: string,
    img: string,
}

const MainButton = (props: Props) => {
    return (
            <a href={props.src} target="_blank" rel="noopener noreferrer">
                <div className={s.container}>
                    <img className={s.img} src={props.img} alt="button_icon"/>
                    <span>{props.name}</span>
                </div>
            </a>
    );
};

export default MainButton;