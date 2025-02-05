import h from '../../header/header.module.css'
import main from '../../../common_css/mainStyles.module.css'
const navArr: string[] = ['about', 'statistics', 'tickets', 'contact']
const Navigation = () => {
    return (
        <div className={main.show_big}>
        <ul className={h.ul}>
            {navArr.map((item, i) => (
                <li key={i}><a href={`#${item}`}>{item}</a></li>
            ))}
        </ul>
        </div>
    );
};

export default Navigation;