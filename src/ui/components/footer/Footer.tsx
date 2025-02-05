import ScrollTriggered from "../../splice/Splice.tsx";
import main from '../../common_css/mainStyles.module.css'
import s from './Footer.module.css'
import SocialMedias from "../small_components/social_medias/socialMedias.tsx";
import img from '../../../../public/github-142-svgrepo-com.svg'
const Footer = () => {
    return (
        <div style={{height:"auto"}} id="contact">
        <div className={main.container} style={{height:'auto'}}>
            <div className={s.footer}>
                <div>
                    <span className={s.span}>Tatiana Rukhavets 2025</span>
                    <a href="">  <img className={s.img} src={img} alt="github"/></a>
                </div>

            <ScrollTriggered></ScrollTriggered>
                <SocialMedias></SocialMedias>
            </div>
        </div>
        </div>
    );
};

export default Footer;