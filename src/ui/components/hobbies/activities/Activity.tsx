import {Activity} from "../../../../state/hobbiesSlice.ts";
import s from '../activities/Activities.module.css'


type ActivityProps = {
    array: Activity[],
    day: string
}


const Active = (props: ActivityProps) => {
    return (<>

            <h3 className={s.h3}>{props.day}</h3>
            <ul className={s.ul}>
                {props.array.length > 0 ? (
                    props.array.map((act) => (
                        <li className={s.li} key={act.id}><>
                            <span className={s.span}>{act.time}</span>
                            {act.description}</>
                        </li>
                    ))
                ) : (
                    <p>No activities for you</p>
                )}
            </ul>
        </>
    );
};

export default Active;