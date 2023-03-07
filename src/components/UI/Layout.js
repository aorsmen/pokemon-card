import { Outlet, Link } from 'react-router-dom';

// Components
import Image from '../UI/Image';

// Design
import logo from '../../assets/images/logo.png';
import './Layout.css';

const Layout = () => {
  return (
    <main>
      <header className="header">
        <div className="header__logo">
          <Image src={logo} alt="pokeapi" />
        </div>
        <nav className="header__nav">
          <Link className="header__nav-link" to="/">Pokedex</Link>
        </nav>
      </header>
      <Outlet />
    </main>
  );
};

export default Layout;