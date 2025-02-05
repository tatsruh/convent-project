import h from './header/header.module.css'
const navArr: string[] = ['about', 'statistics', 'tickets', 'contact']
const Navigation = () => {
    return (
        <ul className={h.ul}>
            {navArr.map((item, i) => (
                <li key={i}><a href={`#${item}`}>{item}</a></li>
            ))}
        </ul>
    );
};

export default Navigation;