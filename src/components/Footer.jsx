
import logo from "../../public/February 2025-2.svg";
import { Link, useNavigate } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaAmazon } from "react-icons/fa";

export function Footer() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-center bg-cyan-900 pt-4 pb-6">
      <div className="md:w-[78%] max-md:w-[95%] h-full flex flex-col gap-2">
        <div>
          <div className="flex items-center justify-between">
            <img
              src={logo}
              alt=""
              className="w-48"
              onClick={() => navigate("/")}
            />
            <div className="flex gap-6">
            <FaLinkedin className="text-white w-7 h-7" />
            <FaInstagram className="text-white w-7 h-7"/>
            <BsTwitterX className="text-white w-7 h-7"/>
            <FaAmazon className="text-white w-7 h-7"/>
            </div>
          </div>
          <p className="text-white font-thin">
            Monappa International Book Publications is a premier publishing
            house committed to delivering high-quality books that inspire,
            educate, and engage readers worldwide. With a vision to empower
            voices across diverse fields, Monappa International specializes in
            publishing a wide range of content, including academic research,
            fiction, non-fiction, professional guides.
          </p>
        </div>
        <div>
          <div className="md:my-5 flex max-md:flex-col md:gap-5 max-md:gap-2">
            <span className="text-white font-thin">@ 2025 Monappa</span>
            <Link
              to="/terms-and-privacy-policy/general-terms"
              className="text-white font-thin"
            >
              General Terms and Conditions
            </Link>
            <Link
              to="/terms-and-privacy-policy/user-privacy"
              className="text-white font-thin "
            >
              Privacy
            </Link>
            <Link
              to="/terms-and-privacy-policy/terms"
              className="text-white font-thin "
            >
              Privacy Policy (Books & Proceedings)
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
