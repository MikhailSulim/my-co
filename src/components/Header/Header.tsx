import './Header.scss';

function Header() {
  return (
    <header className='header'>
        <div className='header__logo'>MY-CO &#11020; Architecture Bureau</div>
        <nav className='header__nav'>
            <a href='/' className='header__link' >Текущий проект</a>
            <a href='/' className='header__link' >Наши проекты</a>
            <a href='/' className='header__link' >О нас</a>
        </nav>
        </header>
  )
}

export default Header