import styles from "./customDescription.module.scss";
const { main_description } = styles;

type TCustomDescriptionProps = { description: string };

const CustomDescription = ({ description }: TCustomDescriptionProps) => {
  return <p className={main_description}>{description}</p>;
};

export default CustomDescription;
