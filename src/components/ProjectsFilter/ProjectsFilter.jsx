import { Button } from "react-bootstrap";

const ProjectsFilter = ({ technology }) => {
  return (
    <Button variant="secondary" size="sm" className="fw-bold me-3 fs-6">
      {technology.technology}
    </Button>
  );
};

export default ProjectsFilter;
