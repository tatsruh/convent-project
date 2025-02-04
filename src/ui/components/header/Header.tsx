import main from '../../common_css/mainStyles.module.css';
import h from './header.module.css';
import logo from '../../../../public/pirate-sword-publicdomainvectors.svg'
import Navigation from "../Navigation.tsx";

const Header = () => {
    return (
        <div className={h.header}>
            <div className={main.container}>
                <div className={main.flexR}><a><img className={h.logo} src={logo} alt="logo"/></a>
                <Navigation></Navigation></div></div>

        </div>
    );
};

export default Header;