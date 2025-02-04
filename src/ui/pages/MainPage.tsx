
import main from "../common_css/mainStyles.module.css";
import Header from "../components/header/Header.tsx";
import Main from "../components/main/Main.tsx";
import Hobbies from "../components/hobbies/Hobbies.tsx";
import Statistics from "../components/statistics/Statistics.tsx";

const MainPage = () => {
    return (
        <>
            <div className={main.background}>
                <Header></Header>
                <Main></Main>
                <Hobbies></Hobbies>
                <Statistics></Statistics>
            </div>

        </>
    );
};

export default MainPage;