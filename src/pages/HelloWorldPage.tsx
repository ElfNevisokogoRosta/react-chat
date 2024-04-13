import { Link } from "react-router-dom";

function HelloWorldPage() {
  return (
    <>
      <div className="container">
        <div className="flex flex-col-reverse gap-9 md:flex-row-reverse md:mt-9 lg:justify-between">
          <div className="flex flex-col gap-4">
            <h2 className="text-white-main font-bold text-3xl text-center leading-relaxed ">
              Hello World!
            </h2>
            <p className="text-white-squeeze font-medium leading-loose text-xl">
              This is my pet project. For this project i use{" "}
              <a
                className="text-white-accent mx-1 hover:text-white-main transition "
                href="https://nestjs.com/"
              >
                NestJs
              </a>
              ,
              <a
                className="text-white-accent mx-1 hover:text-white-main transition "
                href="https://react.dev/"
              >
                ReactJs
              </a>{" "}
              with{" "}
              <a
                className="text-white-accent mx-1 hover:text-white-main transition "
                href="https://www.typescriptlang.org/"
              >
                TypeScript
              </a>
              .
            </p>
            <p className="text-white-squeeze font-medium leading-loose text-xl">
              Style principle was from this pages:{" "}
              <a
                className="text-white-accent mx-1 hover:text-white-main transition "
                href="https://www.figma.com/community/file/1359525349041220271/bravo-sample-lines-truncation"
              >
                Bravo Sample
              </a>
              ,{" "}
              <a
                className="text-white-accent mx-1 hover:text-white-main transition "
                href="https://www.figma.com/file/255TOnpncKESwtz7cSRZJf/Chat-interface-for-a-Dashboard-(Community)-(Copy)?type=design&node-id=0-1&mode=design&viewport=-165%2C-66%2C0.92&t=JR9USAdyNmVCvdLU-0"
              >
                Chat Sample
              </a>
            </p>
            <p className="text-white-squeeze font-medium leading-loose text-xl">
              Styling with{" "}
              <a
                className="text-white-accent mx-1 hover:text-white-main transition "
                href="https://tailwindcss.com/"
              >
                Tailindcss
              </a>
            </p>
            <Link
              className="md:mt-4 md:max-w-[292px] w-full md:mx-auto px-6 py-3 text-white-main bg-purple-main rounded-3xl text-center text-xl hover:bg-white-accent hover:text-blue-main transition"
              to={"auth/register"}
            >
              Start chatting
            </Link>
          </div>
          <div className="relative pt-[100%] lg:pt-[460px] md:w-full lg:w-[460px]">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl md:w-auto md:h-auto"
              src="/logo.jpeg"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HelloWorldPage;
