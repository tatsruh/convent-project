import * as motion from "motion/react-client"
import type { Variants } from "motion/react"
import s from './Splice.module.css'

export default function ScrollTriggered() {
    return (
        <div style={container}>
            {food.map(([emoji, date, adress, img, hueA, hueB], i) => (
                <Card img={img} i={i} emoji={emoji} date={date} adress={adress}  hueA={hueA} hueB={hueB} key={emoji} />
            ))}
        </div>
    )
}
const img = "/fish-monster.svg";

interface CardProps {
    emoji: string,
    adress: string,
    date: string,
    img: string,
    hueA: number
    hueB: number
    i: number
}

function Card({ emoji, date, adress, img, hueA, hueB, i }: CardProps) {
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`

    return (
        <motion.div
            className={`card-container-${i}`}
            style={cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
        >
            <div style={{ ...splash, background }} />
            <motion.div style={card} variants={cardVariants} className="card">
                <span className={s.span}>{emoji}</span>
                <span className={s.span}>{date}</span>
                <span className={s.span2}>{adress}</span>
                <img className={s.img} src={img} alt="fish"/>

            </motion.div>
        </motion.div>
    )
}

const cardVariants: Variants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
}

const hue = () => `hsl(82, 39%, 30%)`; // Dark olive green

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
    margin: "100px auto",
    maxWidth: 500,
    paddingBottom: 100,
    width: "100%",
}

const cardContainer: React.CSSProperties = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 20,
    marginBottom: -200,
}

const splash: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
}

const card: React.CSSProperties = {
    fontSize: 164,
    width: 300,
    height: 430,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    background: "#f5f5f5",
    boxShadow:
        "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
    transformOrigin: "10% 60%",
}

/**
 * ==============   Data   ================
 */

const food: [string,string, string, string, number, number][] = [

    ['We wait for you', '17.11.2025', 'Warsaw, Dolna str 35', img, 0, 860],

]
