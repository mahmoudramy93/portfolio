import "./categoryItem.scss";

const CategoryItem = ({ category }) => {

  return (
    <button  className="category-item d-block py-2 fw-bold">
      {category.category}
    </button>
  );
};

export default CategoryItem;
