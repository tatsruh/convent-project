
import main from "../common_css/mainStyles.module.css";
import Header from "../components/header/Header.tsx";
import Main from "../components/main/Main.tsx";

const MainPage = () => {
    return (
        <>
            <div className={main.background}>
                <Header></Header>
                <Main></Main>
            </div>

        </>
    );
};

export default MainPage;