import h from './header/header.module.css'
const navArr: string[] = ['news', 'guests', 'FAQ', 'About Warcon', 'contact']
const Navigation = () => {
    return (
        <ul className={h.ul}>
            {navArr.map((item, i) => (
                <li key={i}><a href="">{item}</a></li>
            ))}
        </ul>
    );
};

export default Navigation;