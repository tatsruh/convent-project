
import main from "../common_css/mainStyles.module.css";
import Header from "../components/header/Header.tsx";
import Main from "../components/main/Main.tsx";
import Hobbies from "../components/hobbies/Hobbies.tsx";
import Statistics from "../components/statistics/Statistics.tsx";
import Tickets from "../components/tickets/Tickets.tsx";
import CountdownSection from "../components/countdown/CoundownSection.tsx";
import Footer from "../components/footer/Footer.tsx";

const MainPage = () => {
   // 10 minutes timer
    return (
        <>
            <div className={main.background}>
                <Header></Header>
                <Main></Main>
                <Hobbies></Hobbies>
                <Statistics></Statistics>
                <CountdownSection></CountdownSection>
                <Tickets></Tickets>
                <Footer></Footer>
            </div>

        </>
    );
};

export default MainPage;