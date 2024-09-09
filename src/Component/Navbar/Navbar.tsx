import './Navbar.css';
import menu from '../../assets/menu.png';
import close from '../../assets/close.png';
import { useRef } from 'react';

const Navbar = () => {
  const menuRef = useRef<HTMLUListElement>(null);
  const menuIconRef = useRef<HTMLImageElement>(null); // Ref for the menu icon
  const closeIconRef = useRef<HTMLImageElement>(null); // Ref for the close icon

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.add("open");
      menuRef.current.style.right = "0";
    }
    if (menuIconRef.current && closeIconRef.current) {
      menuIconRef.current.style.display = 'none'; // Hide the menu icon
      closeIconRef.current.style.display = 'block'; // Show the close icon
    }
  };

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.remove("open");
      menuRef.current.style.right = "-350px";
    }
    if (menuIconRef.current && closeIconRef.current) {
      menuIconRef.current.style.display = 'block'; // Show the menu icon
      closeIconRef.current.style.display = 'none'; // Hide the close icon
    }
  };

  return (
    <div className='navbar'>
      <img src="{logo}" alt="" />
      <img ref={menuIconRef} src={menu} alt="Open menu" className='nav-mob-open' onClick={openMenu} />
      <ul ref={menuRef} className="nav-menu">
        <img ref={closeIconRef} src={close} alt="Close menu" className="nav-mob-close" onClick={closeMenu} />
        <li><a href="#home"><p>Home</p></a></li>
        <li><a href="#about"><p>About Me</p></a></li>
        <li><a href="#services"><p>Services</p></a></li>
        <li><a href="#work"><p>Portfolio</p></a></li>
        <li><a href="#contact"><p>Contact</p></a></li>
      </ul>

      <a href="#contact" className="nav-connect">Connect With Me</a>
    </div>
  );
}

export default Navbar;
