
import trophy from '../../../../public/trophy.svg'
import cross from '../../../../public/crossed-bones.svg'
import barbute from '../../../../public/barbute.svg'
import orc from '../../../../public/orc-head.svg'
import troll from '../../../../public/troll.svg'
import CompTicket from "./Ticket.tsx";
import s from '../tickets/Tickets.module.css'
import main from '../../common_css/mainStyles.module.css'


export type OptionType = {
    logo: string;
    text: string;
    isActive: boolean;
}

const optionsBarbute: OptionType[] = [
    {text: 'Attending basic activities', isActive: true, logo: trophy},
    {text: 'Gastro lounge', isActive: true, logo: trophy},
    {text: 'Personal T-short', isActive: false, logo: cross},
    {text: 'Free parking', isActive: false, logo: cross},
    {text: 'Sleeproom', isActive: false, logo: cross},
    {text: 'Autograph sessions', isActive: false, logo: cross},
    {text: 'VIP lounge', isActive: false, logo: cross}
]
const optionsTroller: OptionType[] = [
    {text: 'Attending basic activities', isActive: true, logo: trophy},
    {text: 'Gastro lounge', isActive: true, logo: trophy},
    {text: 'Personal T-short', isActive: true, logo: trophy},
    {text: 'Free parking', isActive: true, logo: trophy},
    {text: 'Sleeproom', isActive: true, logo: trophy},
    {text: 'Autograph sessions', isActive: false, logo: cross},
    {text: 'VIP lounge', isActive: false, logo: cross}
]
const optionsOrc: OptionType[] = [
    {text: 'Attending basic activities', isActive: true, logo: trophy},
    {text: 'Gastro lounge', isActive: true, logo: trophy},
    {text: 'Personal T-short', isActive: true, logo: trophy},
    {text: 'Free parking', isActive: true, logo: trophy},
    {text: 'Sleeproom', isActive: true, logo: trophy},
    {text: 'Autograph sessions', isActive: true, logo: trophy},
    {text: 'VIP lounge', isActive: true, logo: trophy}
]
type Ticket = {
    name: string,
    img: string,
    oldPrice: string,
    newPrice: string,
    options: OptionType[]
}
const tickets: Ticket[] = [
    {name: "Barbute", img: barbute, newPrice: '15$', oldPrice: '25$', options: optionsBarbute},
    {name: "Troll", img: troll, newPrice: '50$', oldPrice: '100$', options: optionsTroller},
    {name: "Orc", img: orc, newPrice: '120$', oldPrice: '200$', options: optionsOrc}


]

const Tickets = () => {
    return (
        <div style={{ margin: '70px auto'}} id="tickets">
            <div className={main.container}>
                <h2>TICKETS</h2>
                <div className={s.tickets_container_container}>
            {tickets.map((ticket: Ticket, index) => (
                <CompTicket key={index} name={ticket.name} img={ticket.img}
                            oldprice={ticket.oldPrice} newprice={ticket.newPrice} options={ticket.options}></CompTicket>
            ))}
                </div>
            </div>
        </div>
    );
};

export default Tickets;