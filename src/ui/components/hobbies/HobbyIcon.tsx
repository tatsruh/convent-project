import s from '../hobbies/hobbies.module.css'
import {changeStatus} from "../../../state/hobbiesSlice.ts";
import {useDispatch} from "react-redux";
type HobbyIconProps = {
    icon: string,
    name: string,
    checked: boolean,
    id: number,
}
const HobbyIcon = ({icon, name, checked, id}: HobbyIconProps) => {
    const dispatch = useDispatch();
    const onClick = () => {
      dispatch(changeStatus({hobbyId: id}))
    }
    return (
        <div className={checked ? s.active : s.icon_container_container} onTouchStart={onClick} onClick={onClick}>
            <div className={s.icon_container}>
                <img src={icon} alt={name}/>
                <span>{name}</span>
            </div>
        </div>

    );
};

export default HobbyIcon;