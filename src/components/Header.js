import logo from '../images/vector.svg';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Around the U.S." className="header__image" />
    </header>
  )
}

export default Header;
