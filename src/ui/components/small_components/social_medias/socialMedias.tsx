import tiktok from '../../../../../public/logo-tiktok.svg'
import youtube from '../../../../../public/youtube-svgrepo-com.svg'
import twitter from '../../../../../public/twitter-svgrepo-com.svg'
import facebook from '../../../../../public/facebook-svgrepo-com.svg'
import s from '../social_medias/socials.module.css'
type socialMedia = {
    name: string,
    url: string,
}
const socialMedias: socialMedia[] = [
    {name: 'facebook', url: facebook},
    {name: 'youtube', url: youtube},
    {name: 'tiktok', url: tiktok},
    {name: 'twitter', url: twitter},


]


const SocialMedias = () => {
    return (
        <div className={s.mediaContainer}>
            {socialMedias.map((sm, index) => (
                <a className={s.link} href={''} key={index}><img src={sm.url} alt={sm.name}/></a>
            ))}
        </div>
    );
};

export default SocialMedias;