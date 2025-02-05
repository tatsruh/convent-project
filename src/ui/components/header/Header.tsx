import main from '../../common_css/mainStyles.module.css';
import h from './header.module.css';
import logo from '../../../../public/pirate-sword-publicdomainvectors.svg'
import Navigation from "../small_components/navigation/Navigation.tsx";
import BurgerMenu from "../small_components/BurgerMenu.tsx";

const Header = () => {
    return (
        <div className={h.header}>
            <div className={main.container}>
                <div className={main.flexR}><a><img className={h.logo} src={logo} alt="logo"/></a>
                <Navigation></Navigation></div></div>
            <BurgerMenu></BurgerMenu>
        </div>

    );
};

export default Header;