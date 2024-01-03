import { headerLogo } from "../assets/images/";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/index";
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute w-full z-10">
      <nav className="flex justify-between max-container items-center">
        <a href="/">
          <img src={headerLogo} height={29} width={130} />
        </a>
        <ul className="flex-1 flex justify-center gap-16 items-center max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#">
          <img src={hamburger} width={25} height={25} className="hidden max-lg:block"/>
        </a>
      </nav>
    </header>
  );
};

export default Nav;
