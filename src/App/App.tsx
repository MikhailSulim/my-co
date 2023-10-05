import './App.scss';
import Header from '../components/Header/Header';
import MainPage from '../pages/MainPage/MainPage';
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header/>
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;
