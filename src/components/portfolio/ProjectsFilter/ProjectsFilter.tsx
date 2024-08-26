import { filterProjects } from "@rtk/features/projects/projectsSlice";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ProjectsFilter = ({ technology }) => {
  const dispatch = useDispatch();

  return (
    <Button
      variant="secondary"
      size="sm"
      className="fw-bold me-3 fs-6 mb-3"
      onClick={() => dispatch(filterProjects(technology.technology))}
    >
      {technology.technology}
    </Button>
  );
};

export default ProjectsFilter;
