import './blogSubTitle.module.scss';

const BlogSubTitle = ({subTitle}) => {
  return (
    <div>
      <h4 className="sub-title">{subTitle.title}</h4>
      <p className="description">{subTitle.description}</p>
    </div>
  );
};

export default BlogSubTitle;
