import { Link } from "react-router-dom";
import { SiNestjs } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";

function HelloWorldPage() {
  return (
    <main>
      <section className="mb-12">
        <div className="container">
          <div className="flex flex-col-reverse gap-9 md:flex-row-reverse md:mt-9 lg:justify-between">
            <div className="flex flex-col gap-4">
              <h2 className="text-white-main font-bold text-3xl text-center leading-relaxed ">
                Hello World!
              </h2>
              <p className="text-white-squeeze font-medium leading-loose text-xl">
                This is my pet project. For this project i use
                <a
                  className="text-yellow-main mx-1 hover:text-white-main transition "
                  href="https://nestjs.com/"
                  target="_blank"
                >
                  NestJs
                </a>
                ,
                <a
                  className="text-yellow-main mx-1 hover:text-white-main transition "
                  href="https://react.dev/"
                  target="_blank"
                >
                  ReactJs
                </a>
                with
                <a
                  className="text-yellow-main mx-1 hover:text-white-main transition "
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                >
                  TypeScript
                </a>
                .
              </p>
              <p className="text-white-squeeze font-medium leading-loose text-xl">
                Style principle was from this pages:{" "}
                <a
                  className="text-yellow-main mx-1 hover:text-white-main transition "
                  href="https://www.figma.com/community/file/1359525349041220271/bravo-sample-lines-truncation"
                  target="_blank"
                >
                  Bravo Sample
                </a>
                ,
                <a
                  className="text-yellow-main mx-1 hover:text-white-main transition "
                  href="https://www.figma.com/file/255TOnpncKESwtz7cSRZJf/Chat-interface-for-a-Dashboard-(Community)-(Copy)?type=design&node-id=0-1&mode=design&viewport=-165%2C-66%2C0.92&t=JR9USAdyNmVCvdLU-0"
                  target="_blank"
                >
                  Chat Sample
                </a>
              </p>
              <p className="text-white-squeeze font-medium leading-loose text-xl">
                Styling with
                <a
                  className="text-yellow-main mx-1 hover:text-white-main transition "
                  href="https://tailwindcss.com/"
                  target="_blank"
                >
                  Tailindcss
                </a>
              </p>
              <Link
                className="md:mt-4 md:max-w-[292px] w-full md:mx-auto px-6 py-3 text-white-main bg-purple-main rounded-3xl text-center text-xl hover:bg-yellow-main hover:text-blue-main transition"
                to={"auth/register"}
              >
                Start chatting
              </Link>
            </div>
            <div className="relative pt-[100%] lg:pt-[460px] md:pt-[360px] md:w-full lg:w-[460px]">
              <img
                className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl md:w-auto md:h-auto"
                src="/logo.jpeg"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <div className="container">
          <h2 className="text-white-squeeze text-3xl font-extrabold my-4">
            Check code for this projects here:
          </h2>
          <ul className="flex justify-center items-center flex-col gap-6 lg:gap-[200px] md:flex-row">
            <li>
              <span className="capitalize text-white-main text-xl block font-medium">
                frontend
              </span>
              <a
                href="https://github.com/ElfNevisokogoRosta/react-chat"
                className="text-yellow-main flex gap-2 flex-col justify-center items-center"
                target="_blank"
              >
                <span>https://github.com/ElfNevisokogoRosta/react-chat</span>
                <RiReactjsFill className="w-[240px] h-[240px] fill-[#04dcfc]" />
              </a>
            </li>
            <li>
              <span className="capitalize text-white-main text-xl block font-medium">
                backend
              </span>
              <a
                href="https://github.com/ElfNevisokogoRosta/chat-nest"
                className="text-yellow-main flex gap-2 flex-col justify-center items-center"
                target="_blank"
              >
                <span>https://github.com/ElfNevisokogoRosta/chat-nest</span>
                <SiNestjs className="w-[240px] h-[240px] fill-[#e3234b]" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default HelloWorldPage;
