import s from '../buttons/ChooseButton.module.css'
type ButtonProps = {
    onClick: () => void
}
const ChooseButton = (props: ButtonProps) => {
    return (
        <button className={s.button} onClick={props.onClick} >
            Show attractions for me
        </button>
    );
};

export default ChooseButton;