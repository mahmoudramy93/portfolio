import { CustomTitle } from "../../components";

import "./courses.scss";

import { courses } from "../../data/data.json";

const Courses = () => {
  return (
    <section className="courses">
      <div className="container">
        <CustomTitle
          title={"Courses"}
          description={"There Is All My Courses"}
        />
        <div className="row">
          <div className="col-xl-4">
            <div className="course">
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
            <div className="course">
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
            <div className="course">
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
