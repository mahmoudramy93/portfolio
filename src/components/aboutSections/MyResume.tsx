import { FaBriefcase } from "react-icons/fa";
import { CustomTitle } from "../common";
import Link from "next/link";

const MyResume = () => {
  return (
    <section className="px-5 py-[60px]">
      <div className="container">
        <CustomTitle title={"My Resume"} description={"There Is My CV"} />
        <h3 className="mx-auto mb-[50px] flex w-fit items-center gap-2 bg-[#015943] px-5 py-[14px] text-lg font-normal uppercase text-white">
          <FaBriefcase />
          experience
        </h3>

        <div className="relative -ml-[1px] after:absolute after:bottom-0 after:left-0 after:top-0 after:w-[3px] after:bg-tealGreen after:content-[''] md:after:left-1/2">
          {/* left */}
          <div className="after:-right[13px] relative left-0 w-full bg-inherit
           pb-5 pl-10 md:pl-0 pr-10 pt-0 
           before:absolute before:left-[30px] before:top-[18px] before:border-b-[10px] before:border-l-0 before:border-r-[10px] before:border-t-[10px] before:border-transparent before:border-r-[#595959] before:content-[''] after:absolute after:-left-[11px] after:top-[15px] after:z-10 after:h-[25px] after:w-[25px] after:rounded-full after:border-[3px] after:border-tealGreen after:bg-darkGray after:content-[''] md:w-1/2 md:before:left-auto md:before:right-[30px] md:before:border-l-[10px] md:before:border-r-0 md:before:border-l-[#595959] md:after:-right-[13px] md:after:left-auto">
            <div className="flex flex-col gap-4 p-5 bg-gray-800 rounded-md dark:bg-darkGray">
              <p className="text-xl text-lightTealGreen dark:text-tealGreen">Jun 2019 - Present</p>
              <h4 className="text-lg font-normal text-white">
                Harvest Foods Group
              </h4>
              <p className="text-lg text-gray-300">
                Senior System Administrator, I.T Infrastructure Engineer
              </p>
            </div>
          </div>

          {/* right */}
          <div className="relative left-0 w-full bg-inherit pb-5 
          pl-10 pr-10 md:pr-0 pt-0 before:absolute before:left-[30px] before:top-[18px] before:border-b-[10px] before:border-l-0 before:border-r-[10px] before:border-t-[10px] before:border-transparent before:border-r-[#595959] before:content-[''] after:absolute after:-left-[13px] after:top-[15px] after:z-10 after:h-[25px] after:w-[25px] after:rounded-full after:border-[3px] after:border-tealGreen after:bg-darkGray after:content-[''] md:left-1/2 md:w-1/2">
            <div className="flex flex-col gap-4 p-5 bg-gray-800 rounded-md dark:bg-darkGray">
            <p className="text-xl text-lightTealGreen dark:text-tealGreen">Dec 2017 - Jun 2019</p>
              <h4 className="text-lg font-normal text-white">
                Technical Support, Network Engineer
              </h4>
              <p className="text-lg text-gray-300">Arab Computer Company</p>
            </div>
          </div>

          {/* left */}
          <div className="after:-right[13px] relative left-0 w-full bg-inherit
           pb-5 pl-10 md:pl-0 pr-10 pt-0 
           before:absolute before:left-[30px] before:top-[18px] before:border-b-[10px] before:border-l-0 before:border-r-[10px] before:border-t-[10px] before:border-transparent before:border-r-[#595959] before:content-[''] after:absolute after:-left-[11px] after:top-[15px] after:z-10 after:h-[25px] after:w-[25px] after:rounded-full after:border-[3px] after:border-tealGreen after:bg-darkGray after:content-[''] md:w-1/2 md:before:left-auto md:before:right-[30px] md:before:border-l-[10px] md:before:border-r-0 md:before:border-l-[#595959] md:after:-right-[13px] md:after:left-auto">
            <div className="flex flex-col gap-4 p-5 bg-gray-800 rounded-md dark:bg-darkGray">
            <p className="text-xl text-lightTealGreen dark:text-tealGreen">Apr 2015- Dec 2017</p>
              <h4 className="text-lg font-normal text-white">
                Computer Maintenance Engineer
              </h4>
              <p className="text-lg text-gray-300">IT Solution Company</p>
            </div>
          </div>
        </div>

        {/* education */}
        <h3 className="mx-auto my-[50px] flex w-fit items-center gap-2 bg-[#015943] px-5 py-[14px] text-lg font-normal uppercase text-white">
          <FaBriefcase />
          education
        </h3>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex flex-col flex-1 gap-4 p-5 rounded-md bg-darkGray">
            <p className="text-xl text-tealGreen">Jan 2023</p>
            <h4 className="text-lg font-normal text-white">Holberton School</h4>
            <p className="text-lg text-gray-300">
              Diploma, Computer Software Engineering
            </p>
            <Link
              href="https://kma.edu.eg/"
              className="w-fit cursor-pointer border border-tealGreen bg-none px-[30px] py-3 text-tealGreen transition-all duration-300 hover:bg-black hover:text-white"
              target="_blank"
            >
              Holberton School
            </Link>
          </div>

          <div className="flex flex-col flex-1 gap-4 p-5 rounded-md bg-darkGray">
            <p className="text-xl text-tealGreen">Sep 2012 Oct 2016</p>
            <h4 className="text-lg font-normal text-white">
              King Marriott Academy - KMA
            </h4>
            <p className="text-lg text-gray-300">
              Bachelor&#39;s, Management Information Systems, General
            </p>
            <a
              href="https://kma.edu.eg/"
              className="w-fit cursor-pointer border border-tealGreen bg-none px-[30px] py-3 text-tealGreen transition-all duration-300 hover:bg-black hover:text-white"
              target="_blank"
            >
              King Marriott Academy - KMA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyResume;
