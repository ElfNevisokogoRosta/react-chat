import { FaGithubAlt } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
function Footer() {
  return (
    <footer className="py-4">
      <div className="container">
        <h3 className="text-2xl text-white-squeeze pl-9 font-extrabold my-9">
          Contact me:
        </h3>
        <address className="mb-9">
          <ul className="flex gap-2">
            <a
              href="https://github.com/ElfNevisokogoRosta"
              className="transition text-white-squeeze hover:text-blue-main hover:bg-purple-main py-2 px-3 md:py-3 md:px-6  rounded-3xl  border flex items-center justify-center"
            >
              <li className="flex gap-2 items-center">
                <span className="text-current text-xl font-normal not-italic">
                  GitHub
                </span>
                <FaGithubAlt className="text-current w-9 h-9 md:w-12 md:h-9" />{" "}
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/anatoliy-tymoshenko-556440229/"
              className="text-white-squeeze hover:text-blue-main hover:bg-purple-main py-2 px-3  md:py-3 md:px-6 rounded-3xl border flex items-center justify-center"
            >
              <li className="flex gap-2 items-center">
                <span className="text-current text-xl font-normal not-italic">
                  LinkedIn
                </span>
                <BsLinkedin className="text-current w-9 h-9 md:w-12 md:h-9" />
              </li>
            </a>
          </ul>
        </address>
        <p className="text-white-accent text-center select-none ">
          Copyright 2024 ©{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
