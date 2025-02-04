import tiktok from '../../../../../public/logo-tiktok.svg'
import youtube from '../../../../../public/free-youtube-icon-123-thumb.png'
import github from '../../../../../public/github-logo-png_seeklogo-304612.png'
import facebook from '../../../../../public/facebook-new.png'
import s from '../social_medias/socials.module.css'
type socialMedia = {
    name: string,
    url: string,
}
const socialMedias: socialMedia[] = [
    {name: 'facebook', url: facebook},
    {name: 'youtube', url: youtube},
    {name: 'tiktok', url: tiktok},
    {name: 'github', url: github},


]


const SocialMedias = () => {
    return (
        <div className={s.mediaContainer}>
            {socialMedias.map((sm, index) => (
                <a className={s.link} key={index}><img src={sm.url} alt={sm.name}/></a>
            ))}
        </div>
    );
};

export default SocialMedias;