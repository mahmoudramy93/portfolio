import { ChangeEvent } from "react";

export type TInput = {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};
