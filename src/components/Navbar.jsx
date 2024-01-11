import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
      <h1 className='purple-gradient_text font-bold'>Home</h1>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "purplee" : "text-white" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "purplee" : "text-white"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
