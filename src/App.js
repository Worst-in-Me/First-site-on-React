import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Popular } from './components/Popular/Popular';
import { About } from './components/About/About';
import { Why } from './components/Why/Why';
import { Special } from './components/Special/Special';
import { Application } from './components/Application/Application';
import { Shoplist } from './components/Shoplist/Shoplist';
import { Oplata } from './components/Oplata/Oplata';
import { Review } from './components/Review/Review';
import { Question } from './components/Question/Question';
import { Contacts } from './components/Contacts/Contacts';
import { Footer } from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Popular />
            <About />
            <Why />
            <Special />
            <Application />
            <Shoplist />
            <Oplata />
            <Review />
            <Question />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
