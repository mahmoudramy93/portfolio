export type TPostSection =
  | {
      type: "text";
      content: string;
      heading: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
    }
  | {
      type: "quote";
      content: string;
    }
  | {
      type: "video";
      src: string;
    };

export type TPost = {
  id: string;
  title: string;
  date: string;
  comments: number;
  image: string;
  sections?: TPostSection[];
  description?: string;
  isFlex?: boolean;
  author?: string;
  category?: string;
  tags?: string[];
};
