import { useDispatch } from "react-redux";
import "./categoryItem.module.scss";
import { filterdPosts } from "@rtk/features/posts/postsSlice";

const CategoryItem = ({ category }) => {
  const dispatch = useDispatch();
  return (
    <button
      className="category-item d-block py-2 fw-bold"
      onClick={() => dispatch(filterdPosts(category.category))}
    >
      {category.category}
    </button>
  );
};

export default CategoryItem;
