import logo from "../Home/logo.png";

export default function About() {
  return (
    <div className="py-16 bg-black">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-4/11 ">
            <img src={logo} alt="image" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-blue-50 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-blue-100">
              Hi, I'm Dhruv Jain, a B.Tech Information Technology student with a
              passion for web development, problem solving, and learning new
              technologies. This project was built using React, React Router,
              and Tailwind CSS to explore modern frontend development practices.
              I enjoy creating clean, responsive user interfaces and
              strengthening my programming skills through hands-on projects.
              Alongside web development, I actively practice Data Structures and
              Algorithms in C++ and continuously work on improving my software
              development skills. When I'm not coding, you'll probably find me
              watching web series, drinking coffee, or hanging out with friends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
