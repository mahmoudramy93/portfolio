import { CustomDescription } from "../index";

import "./customTitle.scss";

const CustomTitle = ({ title, description }) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="section-title text-center position-relative">
          <h2>{title}</h2>
          <CustomDescription description={description} />
        </div>
      </div>
    </div>
  );
};

export default CustomTitle;
