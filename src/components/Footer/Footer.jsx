import { Input } from "@/components/ui/input";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "@/assets/images/logo.jpg";

const Footer = () => {
  return (
    <div className="dark">
    <footer className="bg-white dark:bg-black/5 px-12">
      <div className="mx-auto space-y-8 px-4 py-16 sm:px-6 lg:space-y-8  lg:px-8 pb-4 md:pb-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-1 sm:col-span-2  md:col-span-4 lg:col-span-1">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white sm:text-4xl sr-only">
              Crescent Export
              </h1>
              <img
                src={Logo}
                alt="logo"
                className="w-24 h-auto"
              />
            </div>

            <p className="text-center lg:text-left  mt-4  text-gray-500 dark:text-gray-400">
            We are a team of passionate people committed to enhancing lives by creating exceptional products and customer experiences, built on a foundation of respect and service.
            </p>
     
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 sm:col-span-2 md:col-span-2 lg:col-span-2 lg:grid-cols-2 justify-center">
            <div>
              <p className="font-medium text-gray-900 dark:text-white text-xl">
                Categories
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                {Array.from({ length: 5 }).map((_, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Category {index + 1}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900 dark:text-white text-xl">
                Categories
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                {Array.from({ length: 5 }).map((_, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Category {index + 1}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

           
          </div>

          <div className="sm:col-span-2 md:col-span-2 lg:col-span-2">
              <h2 className="font-medium text-3xl text-gray-900 dark:text-white uppercase">
                Stay up-to-date with our new arrivals
              </h2>
              <p className="mt-4 max-w-xs text-gray-500 dark:text-gray-400">
                Subscribe to our newsletter to get updates on our latest products and promotions.
              </p>
              <div className="mt-6">
                <div className="flex gap-2 bg-gray-800 dark:bg-[#4B4B4B] rounded-md p-2">
                  <Input
                    placeholder="Your Email"
                    className="bg-transparent border-none focus:ring-0"
                  />
                  <button className="px-4 py-2 bg-black/80 text-white rounded-md hover:bg-black">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
        </div>


        <hr className="border-gray-200 dark:border-gray-700" />
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Crescent Export. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to={"/about"} className="text-gray-500 dark:text-gray-400">
              About
            </Link>
            <Link to={"/contact"} className="text-gray-500 dark:text-gray-400">
              Contacts
            </Link>
            <a href="#" className="text-gray-500 dark:text-gray-400">
              <AiFillInstagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400">
              <FaYoutube className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400">
              <FaFacebook className="h-6 w-6" />
            </a>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link
              to={"/refund-policy"}
              className="text-gray-500 dark:text-gray-400"
            >
              Refund Policy
            </Link>
            <Link
              to={"/privacy-policy"}
              className="text-gray-500 dark:text-gray-400"
            >
              Privacy Policy
            </Link>
            <Link
              to={"/terms-of-service"}
              className="text-gray-500 dark:text-gray-400"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  </div>
  );
};

export default Footer;
