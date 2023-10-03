import Promo from '../../components/Promo/Promo';
import RecentProject from '../../components/RecentProject/RecentProject';
import './MainPage.scss';

function MainPage() {
  return (
    <main className='main'>
      <Promo/>
      <RecentProject/>
    </main>
  )
}

export default MainPage