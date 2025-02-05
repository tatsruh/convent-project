import s from '../hobbies/hobbies.module.css'
import main from '../../common_css/mainStyles.module.css'
import {useDispatch, useSelector} from "react-redux";
import {filterActivities, selectHobbies} from "../../../state/hobbiesSlice.ts";
import HobbyIcon from "./HobbyIcon.tsx";
import ChooseButton from "../small_components/buttons/ChooseButton.tsx";
import Activities from "./activities/Activities.tsx";
import {useState} from "react";


const Hobbies = () => {
    const [activities, setActivities] = useState<boolean>(false);
    const hobbiesArr = useSelector(selectHobbies);
    const dispatch = useDispatch();
    const onClick = () => {
        setActivities(true);
        dispatch(filterActivities({hobbies: hobbiesArr}));
    }
    return (
        <div className={s.hobbies_container} id="about">
            <div className={main.container}>
                <div className={main.flexC}>
                    <h2>Choose Your Activity</h2>
                    <ul className={s.ul}> {hobbiesArr.map((hobby) => (
                        <li>
                            <HobbyIcon key={hobby.id} id={hobby.id} icon={hobby.url} name={hobby.tag}
                                       checked={hobby.checked}/>
                        </li>
                    ))}
                    </ul>
                    <ChooseButton onClick={onClick}/>
                    {activities && <Activities/>}
                </div>
            </div>
        </div>
    );
};

export default Hobbies;