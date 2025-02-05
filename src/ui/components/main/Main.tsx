import s from '../main/main.module.css';
import main from '../../common_css/mainStyles.module.css'
import SocialMedias from "../small_components/social_medias/socialMedias.tsx";
import MainButton from "../small_components/buttons/main_button/MainButton.tsx";
import tiktok from '../../../../public/logo-tiktok.svg';
import ticket from '../../../../public/ticket.svg';
import AnimatedNumberCopy from "../small_components/animatedNumber/AnimatedNumberCopy.tsx";



const Main = () => {
    return (
        <div className={s.main}>
        <div className={`${main.container} ${main.flexR}`}>
            <div className={s.sideDiv}><SocialMedias></SocialMedias></div>
            <div className={s.centerDiv}><h1>Welcome to warcon <AnimatedNumberCopy start={2000} end={2025} text={''}></AnimatedNumberCopy></h1></div>
            <div className={s.sideDiv}>
                <MainButton img={tiktok} src={''} name={'Check our tiktok'}></MainButton>
                <MainButton img={ticket} src='#tickets' name={'Buy Ticket'}></MainButton>
            </div>
        </div>
        </div>
    );
};

export default Main;