import {FC} from 'react';
import './App.css';
import {Container} from "./styled/appCss";
import {useFetchCrypto} from "./hooks/useFetchCrypto";
import Loading from "./components/Loading";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import FetchDate from "./components/FetchDate";
import FetchError from "./components/FetchError";

const App: FC = () => {

    const {loading, error} = useFetchCrypto();

    return (
        <Container>
            {loading && <Loading/>}
            {!loading && !error && (
                <>
                    <Header/>
                    <MainPage/>
                    <FetchDate/>
                </>
            )}
            {error && <FetchError/>}
        </Container>
    )
        ;
};
export default App;