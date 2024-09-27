import Logo from "@/assets/images/logo.jpg";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
const NavigationLinks = [
  {
    title: "Home",
    path: "/",
    isVisible: true,
  },
  {
    title: "About",
    path: "/about",
    isVisible: true,
  },
  {
    title: "Products",
    path: "/products",
    isVisible: true,
  },
  {
    title: "Contact Us",
    path: "/contact",
    isVisible: true,
  },
];

export const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-4 pt-4 gap-4 md:gap-12 mx-4 md:mx-12">
      <Link to="/" className="w-2/12 md:w-1/12">
        <img src={Logo} alt="logo" className="sm:w-16 md:w-18 lg:w-24 aspect-square min-w-10" />
      </Link>
      <div className="flex bg-gold text-black flex-1 justify-center items-center max-w-4xl px-4 py-2 sm:py-4 md:py-6 lg:py-6 rounded-full w-10/12 md:w-10/12">
        <div className="flex justify-between items-center w-full md:w-10/12 lg:w-9/12 uppercase font-sans font-bold gap-2 md:gap-4">
          {NavigationLinks.map((link) => {
            if (link.isVisible) {
              return (
                <NavLink
                  key={link.title}
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      "text-black",
                      "hover:text-white",
                      "px-4",
                      "py-1",
                      "sm:px-3",
                      "sm:py-2",
                      "md:px-4",
                      "md:py-3",
                      "lg:px-6",
                      "lg:py-4",
                      "text-xs",
                      "md:text-sm",
                      "lg:text-base",
                      "rounded-full",
                      "transition-all",
                      "duration-300",
                      "ease-in-out",
                      "hover:bg-gray-800",
                      "hover:bg-opacity-50",
                      "break-keep",
                      "whitespace-nowrap",
                      isActive && "bg-gray-800 bg-opacity-50"
                    )
                  }
                >
                  {link.title}
                </NavLink>
              );
            }
          })}
        </div>
      </div>
      <div className="text-center text-gold flex flex-col text-sm sm:text-base md:text-xl lg:text-3xl font-serif w-2/12 md:w-1/12 justify-center items-center">
        <span className="">CRESCENT</span>
        <span className="">EXPORTS</span>
      </div>
    </div>
  );
};
