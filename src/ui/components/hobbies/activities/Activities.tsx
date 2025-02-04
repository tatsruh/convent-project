import {useSelector} from "react-redux";
import {selectActivities} from "../../../../state/hobbiesSlice.ts";
import s from '../activities/Activities.module.css'
import Active from "./Activity.tsx";


const Activities = () => {
    const activitiesArr = useSelector(selectActivities)
    const fridayArray = activitiesArr.filter((activity) => {
        return activity.day === 'Friday'
    })
    const saturdayArray = activitiesArr.filter((activity) => {
        return activity.day === 'Saturday'
    })

    return (
        <div className={s.container}>
            <Active array={fridayArray} day="Friday"></Active>
            <Active array={saturdayArray} day="Saturday"></Active>
        </div>
    );
};

export default Activities;