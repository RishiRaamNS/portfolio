import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";

export default function Home() {
  return (
    <div className="py-12 md:pl-40 md:pr-32 flex md:flex-row flex-col items-center md:gap-x-24 overflow-hidden">
      <div className="md:fixed md:left-20 lg:left-36 md:top-12 flex flex-col ml-14 md:ml-0 items-start justify-start md:w-[30vw] md:h-screen">
        <Image
          src={"/rishi.jpg"}
          width={150}
          height={150}
          alt="profile picture"
          className="rounded-full mb-4"
        />
        <h1 className="font-bold text-4xl mb-2">Rishi Raam</h1>
        <h2 className="text-[#9CA3AF] text-xl mb-4">
          Full Stack Web Developer
        </h2>
        <h3 className="text-[#9CA3AF] text-lg">
          📍Coimbatore, India <span className="font-bold text-sm">IN</span>
        </h3>
        <p className="text-sm md:text-base opacity-90 mt-4 w-screen md:w-fit">
          Building pixel-perfect, engaging, and accessible <br /> digital
          experiences.
        </p>
        <div className="flex text-[#9CA3AF] items-center justify-evenly gap-x-4 mt-6">
          <a
            href="/Rishi Raam Resume.pdf"
            download
            className="px-4 py-1 border flex items-center gap-x-2 text-white border-white rounded-md hover:bg-white hover:text-black"
          >
            <FaFileDownload />
            Resume
          </a>
          <a href="https://github.com/RishiRaamNS">
            <SiGithub
              fontSize={25}
              className="hover:text-white cursor-pointer"
            />
          </a>
          <a href="mailto:rishiraamns@gmail.com">
            <IoIosMail
              fontSize={35}
              className="hover:text-white cursor-pointer"
            />
          </a>
          <a href="https://linkedin.com/in/rishiraam">
            <FaLinkedin
              fontSize={25}
              className="hover:text-white cursor-pointer"
            />
          </a>
          <a href="https://x.com/RishiRaamNS">
            <FaXTwitter
              fontSize={25}
              className="hover:text-white cursor-pointer"
            />
          </a>
        </div>
      </div>

      <div className="md:w-2/3 md:ml-[30vw] w-screen px-4 pt-10 md:p-0">
        <h1 className="font-bold text-3xl mb-6">About Me</h1>
        <p className="my-4 text-[#D1D5DB] md:text-justify">
          Hi, I’m a 20-year-old Full-Stack Developer passionate about building
          products that create real impact. With expertise in both Frontend and
          Backend technologies, I thrive on turning ideas into fully-functional,
          transformative solutions—single-handedly.
        </p>
        <p className="my-4 text-[#D1D5DB] md:text-justify">
          My journey began just over a year ago when I joined a startup founded
          by friends, diving headfirst into the world of full-stack development.
          In that time, I’ve built and launched 5+ full-stack projects from the
          ground up, managing everything from the user interface to the server
          logic. This hands-on experience gave me the technical chops and the
          confidence to take on ambitious projects and deliver them efficiently.
        </p>
        <p className="my-4 text-[#D1D5DB] md:text-justify">
          While my startup journey gave me the perfect springboard to sharpen my
          skills and push boundaries, I soon realized I wanted more. I’m now
          looking for new opportunities in a fast-paced, innovative organization
          where I can build things that truly matter.
        </p>
        <p className="my-4 text-[#D1D5DB] md:text-justify">
          So, if you’re hiring and looking for a developer who’s not just here
          to write code, but to build products that leave a lasting impact, I’d
          love the chance to connect. Let’s create something amazing together!
        </p>

        <div className="mt-10">
          <h1 className="text-3xl font-bold mb-6">Skills</h1>
          <h2 className="font-medium text-xl mb-2">Languages</h2>
          <div>
            <p className="bg-[#1E3356] text-[#3B82F6] inline mx-1 px-3 py-1.5 rounded-full text-[12px] font-medium">
              JavaScript
            </p>
            <p className="bg-[#1E3356] text-[#3B82F6] inline mx-1 px-3 py-1.5 rounded-full text-[12px] font-medium">
              Python
            </p>
            <p className="bg-[#1E3356] text-[#3B82F6] inline mx-1 px-3 py-1.5 rounded-full text-[12px] font-medium">
              Java
            </p>
            <p className="bg-[#1E3356] text-[#3B82F6] inline mx-1 px-3 py-1.5 rounded-full text-[12px] font-medium">
              C
            </p>
            <p className="bg-[#1E3356] text-[#3B82F6] inline mx-1 px-3 py-1.5 rounded-full text-[12px] font-medium">
              C++
            </p>
          </div>
          <h2 className="font-medium text-xl mt-6 mb-2">Frameworks</h2>
          <div>
            <p className="bg-[#164728] text-[#22C55E] inline mx-1 px-3 py-1.5 rounded-full text-[12px] font-medium">
              Next.js
            </p>
            <p className="bg-[#164728] text-[#22C55E] inline mx-1 px-3 py-1.5 rounded-full text-[12px] font-medium">
              ReactJS
            </p>
            <p className="bg-[#164728] text-[#22C55E] inline mx-1 px-3 py-1.5 rounded-full text-[12px] font-medium">
              Node.js
            </p>
            <p className="bg-[#164728] text-[#22C55E] inline mx-1 px-3 py-1.5 rounded-full text-[12px] font-medium">
              ExpressJS
            </p>
          </div>
          <h2 className="font-medium text-xl mt-6 mb-2">Databases</h2>
          <div>
            <p className="bg-[#542121] text-[#EF4444] inline mx-1 px-3 py-1.5 rounded-full text-[12px] font-medium">
              MongoDB
            </p>
            <p className="bg-[#542121] text-[#EF4444] inline mx-1 px-3 py-1.5 rounded-full text-[12px] font-medium">
              Firebase
            </p>
            <p className="bg-[#542121] text-[#EF4444] inline mx-1 px-3 py-1.5 rounded-full text-[12px] font-medium">
              SQL
            </p>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="font-bold text-3xl mb-6">Experience</h1>
          <div className="pl-6 pb-4 border-l-2 border-[#2d3748]">
            <div className="flex gap-x-4">
              <Image
                src="/axolotron.svg"
                alt="axolotron"
                width={100}
                height={100}
              />
              <div>
                <h1 className="font-medium text-xl md:text-2xl">
                  Software Development Intern
                </h1>
                <p className="text-[#D1D5DB] my-0.5">Coimbatore, India</p>
                <p className="text-[#9CA3AF] text-sm">Aug 2023 - Aug 2024</p>
              </div>
            </div>
            <ul className="list-disc text-[#D1D5DB] my-4 pl-4">
              <li>
                Demonstrated proficiency in ReactJS, Next.js, Firebase and
                Node.js.
              </li>
              <li className="my-2">
                Handled the deployment and maintenance of all projects in Vercel
                and Google Firebase.
              </li>
              <li className="my-2">
                Led the Design and Development of 5+ Full-Stack projects
                handling both Frontend and Backend functionalities.
              </li>
              <li className="my2">
                Collaborated with cross-functional teams, enhancing
                communication and teamwork skills.
              </li>
            </ul>
            <div>
              <p className="bg-[#1E3356] text-[#3B82F6] inline mx-1 px-3 py-1.5 rounded-full text-[12px] font-medium">
                JavaScript
              </p>
              <p className="bg-[#1E3356] text-[#3B82F6] inline mx-1 px-3 py-1.5 rounded-full text-[12px] font-medium">
                ReactJS
              </p>
              <p className="bg-[#1E3356] text-[#3B82F6] inline mx-1 px-3 py-1.5 rounded-full text-[12px] font-medium">
                Next.js
              </p>
              <p className="bg-[#1E3356] text-[#3B82F6] inline mx-1 px-3 py-1.5 rounded-full text-[12px] font-medium">
                Firebase
              </p>
              <p className="bg-[#1E3356] text-[#3B82F6] md:inline w-fit mt-4 md:mt-0 mx-1 px-3 py-1.5 rounded-full text-[12px] font-medium">
                Node.js
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="font-bold text-3xl mb-6">Education</h1>
          <div className="pl-6 pb-4 border-l-2 border-[#2d3748]">
            <div className="flex gap-x-4">
              <Image
                src="/hicet.svg"
                alt="hicet college"
                width={100}
                height={100}
                className="rounded-full"
              />
              <div>
                <h1 className="font-medium text-xl md:text-2xl">
                  Bachelor of Computer Science - B.E.(Hons)
                </h1>
                <p className="text-[#D1D5DB] my-0.5 text-sm md:text-base">
                  Hindusthan College of Engineering and Technology, Coimbatore
                </p>
                <p className="text-[#9CA3AF] text-sm inline mr-4">
                  2021 - 2025
                </p>
                <p className="text-[#9CA3AF] font-bold text-sm inline">
                  CGPA: 8.22
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="font-bold text-3xl mb-6">Projects</h1>
          <div className="border-l-2 border-[#2d3748] pl-6 py-2">
            <div className="flex flex-col gap-y-4">
              <Image
                src="/99groups-desktop.png"
                width={300}
                height={300}
                alt="99groups"
                className="rounded-md object-scale-down"
              />
              <div>
                <h1 className="font-medium text-xl md:text-2xl">
                  99Groups: Real-estate portal in Georgia
                </h1>
              </div>
            </div>
            <ul className="list-disc text-[#D1D5DB] my-4 pl-4">
              <li>
                Engineered a sleek landing page and a full-fledged real estate
                portal with a robust Admin Panel for 99Groups, facilitating
                seamless property management and boosting client inquiries by
                30%.
              </li>
              <li className="my-4">
                Integrated multi-lingual support, leveraging Google Translate
                and conditional rendering to provide a localized experience in 3
                languages, expanding the portal’s user base by 25% across
                different regions.
              </li>

              <li className="my-4">
                Leveraged Firebase for real-time updates and secure data
                management, ensuring seamless data synchronization between the
                portal and admin panel.
              </li>
            </ul>
            <div>
              <p className="bg-[#53420E] text-[#EAB308] inline mx-1 px-3 py-1.5 rounded-full text-[12px] font-medium">
                Next.js
              </p>
              <p className="bg-[#53420E] text-[#EAB308] inline mx-1 px-3 py-1.5 rounded-full text-[12px] font-medium">
                Firebase
              </p>
              <p className="bg-[#53420E] text-[#EAB308] inline mx-1 px-3 py-1.5 rounded-full text-[12px] font-medium">
                ReactJS
              </p>
              <p className="bg-[#53420E] text-[#EAB308] inline mx-1 px-3 py-1.5 rounded-full text-[12px] font-medium">
                Vercel
              </p>
            </div>
          </div>

          <div className="border-l-2 border-[#2d3748] mt-10 pl-6 py-2">
            <div className="flex flex-col gap-y-4">
              <Image
                src="/impactenglish.png"
                width={300}
                height={300}
                alt="Impact English"
                className="rounded-md object-scale-down"
              />
              <div>
                <h1 className="font-medium text-xl md:text-2xl">
                  Impact English: Landing Page for IELTS Coaching Centre
                </h1>
              </div>
            </div>
            <ul className="list-disc text-[#D1D5DB] my-4 pl-4">
              <li>
                Developed a high-performance landing page for Impact English, an
                IELTS coaching centre, to boost their online presence and drive
                student enrolment.
              </li>
              <li className="my-4">
                Implemented a fully responsive layout that led to a 40% increase
                in mobile traffic and a 25% improvement in session duration
                across devices.
              </li>

              <li className="my-4">
                Leveraged Next.js for server-side rendering, Tailwind CSS for a
                highly responsive UI, and Firebase for backend services,
                deployed in Vercel ensuring optimal performance and scalability.
              </li>
            </ul>
            <div>
              <p className="bg-[#164728] text-[#22C55E] inline mx-1 px-3 py-1.5 rounded-full text-[12px] font-medium">
                ReactJS
              </p>
              <p className="bg-[#164728] text-[#22C55E] inline mx-1 px-3 py-1.5 rounded-full text-[12px] font-medium">
                Vercel
              </p>
              <p className="bg-[#164728] text-[#22C55E] inline mx-1 px-3 py-1.5 rounded-full text-[12px] font-medium">
                Firebase
              </p>
              <p className="bg-[#164728] text-[#22C55E] inline mx-1 px-3 py-1.5 rounded-full text-[12px] font-medium">
                Next.js
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
