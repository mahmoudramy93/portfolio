import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { CustomTitle } from "@components/common";
import { courses } from "@data/data.json";

import AOS from "aos";

import styles from "./myCourses.module.scss";
const {
  my_courses,
  course_item,
  course_item_list,
  course_list_item,
  name,
  provider,
} = styles;

const MyCourses = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-in-out" });
  }, []);

  return (
    <section className={my_courses}>
      <Container>
        <CustomTitle
          title={"My Courses"}
          description={"There Is All My Courses"}
        />
        <Row>
          <Col xl={4}>
            <div className={course_item} data-aos="fade-right">
              <ul className={course_item_list}>
                {courses &&
                  courses
                    .map((course) => {
                      return (
                        <li
                          key={course.id}
                          className={`${course_list_item} d-flex align-items-center justify-content-between`}
                        >
                          <p className={name}>{course.name}</p>
                          <a href="#" className={provider}>
                            {course.provider}
                          </a>
                        </li>
                      );
                    })
                    .slice(0, 5)}
              </ul>
            </div>
          </Col>
          <Col xl={4}>
            <div className={course_item} data-aos="fade-up">
              <ul className={course_item_list}>
                {courses &&
                  courses
                    .map((course) => {
                      return (
                        <li
                          key={course.id}
                          className={`${course_list_item} d-flex align-items-center justify-content-between`}
                        >
                          <p className={name}>{course.name}</p>
                          <a href="#" className={provider}>
                            {course.provider}
                          </a>
                        </li>
                      );
                    })
                    .slice(6, 10)}
              </ul>
            </div>
          </Col>
          <Col xl={4}>
            <div className={course_item} data-aos="fade-left">
              <ul className={course_item_list}>
                {courses &&
                  courses
                    .map((course) => {
                      return (
                        <li
                          key={course.id}
                          className={`${course_list_item} d-flex align-items-center justify-content-between`}
                        >
                          <p className={name}>{course.name}</p>
                          <a href="#" className={provider}>
                            {course.provider}
                          </a>
                        </li>
                      );
                    })
                    .slice(11, 15)}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MyCourses;
