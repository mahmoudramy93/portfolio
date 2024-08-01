import { CustomTitle } from "../../components";
import { courses } from "../../data/data.json";
import { useEffect } from "react";

import AOS from "aos";
import "./courses.scss";

const Courses = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-in-out" });
  }, []);

  return (
    <section className="courses">
      <div className="container">
        <CustomTitle
          title={"Courses"}
          description={"There Is All My Courses"}
        />
        <div className="row">
          <div className="col-xl-4">
            <div className="course" data-aos="fade-right">
              <ul className="courses-list">
                {courses
                  .map((course) => {
                    return (
                      <li
                        key={course.id}
                        className="course-list-item d-flex align-items-center justify-content-between"
                      >
                        <p className="name">{course.name}</p>
                        <a href="#" className="company">
                          {course.provider}
                        </a>
                      </li>
                    );
                  })
                  .slice(0, 5)}
              </ul>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="course" data-aos="fade-up">
              <ul className="courses-list">
                {courses
                  .map((course) => {
                    return (
                      <li
                        key={course.id}
                        className="course-list-item d-flex align-items-center justify-content-between"
                      >
                        <p className="name">{course.name}</p>
                        <a href="#" className="company">
                          {course.provider}
                        </a>
                      </li>
                    );
                  })
                  .slice(6, 10)}
              </ul>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="course" data-aos="fade-left">
              <ul className="courses-list">
                {courses
                  .map((course) => {
                    return (
                      <li
                        key={course.id}
                        className="course-list-item d-flex align-items-center justify-content-between"
                      >
                        <p className="name">{course.name}</p>
                        <a href="#" className="company">
                          {course.provider}
                        </a>
                      </li>
                    );
                  })
                  .slice(11, 15)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
