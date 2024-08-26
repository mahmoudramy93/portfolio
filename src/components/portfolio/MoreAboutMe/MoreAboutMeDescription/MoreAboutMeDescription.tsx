import "./moreAboutMeDescription.module.scss";

const MoreAboutMeDescription = (props) => {
  const { descriptionOne, descriptionTwo } = props;

  return (
    <p className="more-about-me-desc">
      {descriptionOne}
      <br />
      <br />
      {descriptionTwo}
    </p>
  );
};

export default MoreAboutMeDescription;
