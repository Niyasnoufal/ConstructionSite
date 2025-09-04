import Logo from "../assets/images/logo.jpg";
import { navData } from "../data";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeLine } from "react-icons/ri";
import { useEffect, useState } from "react";

const NavBar = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 150) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`bg-transparent pt-4 ${
        sticky ? "sticky top-0 z-50" : "relative"
      }`}
    >
      <nav className=" max-w-7xl mx-auto flex justify-around items-center px-6 md:px-12">
        {/* Logo */}
        <div className="logo">
          <img
            src={Logo}
            alt="Civil Engineering construction Logo"
            className="w-[80px] h-[80px] rounded-full"
          />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex justify-around items-center gap-x-8 h-[50px] border border-textColor rounded-3xl w-[500px] bg-white/20 backdrop-blur-lg px-6 webNav transition-all duration-300">
          {navData.map((item) =>
            item.children ? (
              <li key={item.id}>
                <select
                  onChange={(e) => navigate(e.target.value)}
                  className="w-[120px]  bg-transparent text-textColor"
                >
                  <option className="text-sm" >{item.name}</option>
                  {item.children.map((childItem) => (
                    <option key={childItem.id} value={childItem.path} className=" border-none bg-mainBg text-textColor text-lg px-6">
                      {childItem.name}
                    </option>
                  ))}
                </select>
              </li>
            ) : (
              <li key={item.id} className="text-textColor">
                <Link to={item.path}>{item.name}</Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={handleClick}>
            {!menu ? (
              <GiHamburgerMenu className="text-3xl text-textColor" />
            ) : (
              <RiCloseLargeLine className="text-3xl text-textColor" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Nav (slide down with glass effect) */}
      {/* Mobile Nav (Slide-in from Left) */}
{/* Mobile Nav (Slide-in from Left) */}
<div
  className={`fixed top-0 left-0 h-full w-3/4 max-w-sm bg-white/20 backdrop-blur-lg shadow-lg transform transition-transform duration-500 ease-in-out z-40
    ${menu ? "translate-x-0" : "-translate-x-full"}`}
>
  <ul className="flex flex-col gap-6 p-6">
    {navData.map((item) =>
      item.children ? (
        <li key={item.id}>
          <select
            onChange={(e) => {
              navigate(e.target.value);
              setMenu(false); // 👈 closes menu after selection
            }}
            className="w-[120px] text-textColor bg-transparent"
          >
            <option className="text-sm">{item.name}</option>
            {item.children.map((childItem) => (
              <option key={childItem.id} value={childItem.path}>
                {childItem.name}
              </option>
            ))}
          </select>
        </li>
      ) : (
        <li key={item.id} className="text-textColor">
          <Link
            to={item.path}
            onClick={() => setMenu(false)} // 👈 closes menu on link click
          >
            {item.name}
          </Link>
        </li>
      )
    )}
  </ul>
</div>

{/* Overlay */}
{menu && (
  <div
    className="fixed inset-0 bg-black/50 z-30"
    onClick={() => setMenu(false)} // 👈 closes when clicking outside
  ></div>
)}


    </section>
  );
};

export default NavBar;
