import { TInput } from "types/inputTypes";

import styles from "./input.module.scss";
const { form_group, form_control } = styles;

const Input = ({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}: TInput) => {
  return (
    <div className={`${form_group} form-group`}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        className={`${form_control} form-control`}
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
