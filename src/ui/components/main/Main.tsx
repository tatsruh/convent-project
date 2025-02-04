import s from '../main/main.module.css';
import main from '../../common_css/mainStyles.module.css'
import SocialMedias from "../small_components/social_medias/socialMedias.tsx";
import MainButton from "../small_components/buttons/main_button/MainButton.tsx";
import tiktok from '../../../../public/logo-tiktok.svg';
import ticket from '../../../../public/ticket.svg';



const Main = () => {
    return (
        <div className={s.main}>
        <div className={`${main.container} ${main.flexR}`}>
            <div className={s.sideDiv}><SocialMedias></SocialMedias></div>
            <div className={s.centerDiv}><h1>Welcome to warcon <span>2025</span></h1></div>
            <div className={s.sideDiv}>
                <MainButton img={tiktok} src={''} name={'Check our tiktok'}></MainButton>
                <MainButton img={ticket} src={''} name={'Buy Ticket'}></MainButton>
            </div>
        </div>
        </div>
    );
};

export default Main;