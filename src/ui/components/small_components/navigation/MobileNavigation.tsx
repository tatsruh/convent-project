import h from '../../header/header.module.css'
import main from '../../../common_css/mainStyles.module.css'
import {changeMenu, selectMenu} from "../../../../state/hobbiesSlice.ts";
import {useDispatch, useSelector} from "react-redux";
const navArr: string[] = ['about', 'statistics', 'tickets', 'contact']

export const MobileNavigation = () => {
    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(changeMenu())
    }
    const isActive = useSelector(selectMenu)
    return (
        <div className={main.show_small}>
            <ul className={isActive ? `${h.ul} ${h.active}`: h.ul }>
                {navArr.map((item, i) => (
                    <li onClick={onClick} key={i}><a href={`#${item}`}>{item}</a></li>
                ))}
            </ul>
        </div>
    );
};

