import Button from "./Button";
import Logo from "../assets/images/logo.jpg";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";



const Footer = () => {
  return (
   <footer className="bg-mainBg">
        <div className="flex flex-col justify-center items-center">
            <h3 className="uppercase text-textColor text-sm tracking-wide opacity-45 mt-8 pb-2">Build your dream now</h3>
            <h1 className="text-textColor text-5xl capitalize pb-3 text-center">Request More Information</h1>
            <p className="text-textColor text-center">Dream Construction is ready to solve all your enquiries</p>
            <Button name="Contact Us" className="mt-5"/>
            <span className="text-textColor text-sm mt-8">©2025 Dream Construction</span>
        </div>
        <hr className="text-textColor w-4/5 opacity-25 my-3"/>
        <div className="sm:flex sm:justify-around items-center">
            <div className="logo mx-5 pb-4 flex justify-center items-center">
                      <img
                        src={Logo}
                        alt="Civil Engineering construction Logo"
                        className="w-[80px] h-[80px] rounded-full"
                      />
            </div>
            <ul className="list-none flex justify-center items-center gap-x-8 text-textColor mx-5 pb-4">
                <li>Team</li>
                <li>Projects</li>
                <li>About</li>
            </ul>
            <ul className="flex gap-x-8 justify-center items-center text-textColor mx-5 pb-4 ">
                <li className="hover:text-red-400"><IoLogoInstagram/></li>
                <li className="hover:text-black"><RiTwitterXFill/></li>
                <li className="hover:text-red-700"><HiOutlineMailOpen/></li>
                <li className="hover:text-blue-600"><FaFacebook/></li>
            </ul>
        </div>
   </footer>
  )
}

export default Footer
