import s from '../small_components/BurgerMenu.module.css'
import main from '../../common_css/mainStyles.module.css'
import {MobileNavigation} from "./navigation/MobileNavigation.tsx";
import {changeMenu, selectMenu} from "../../../state/hobbiesSlice.ts";
import {useDispatch, useSelector} from "react-redux";

const BurgerMenu = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector(selectMenu)
    const onClick = () => {
        dispatch(changeMenu())
    }
    return (
        <>
            <div className={main.show_small}>
                <div className={s.hamburger} onClick={onClick}>
                    <a className={isOpen ? `${s.main_nav_toggle} ${s.active_menu}` : s.main_nav_toggle}
                       href="#main-nav"><i>Menu</i></a>
                </div>
            </div>
            <MobileNavigation></MobileNavigation>
        </>

    );
};

export default BurgerMenu;