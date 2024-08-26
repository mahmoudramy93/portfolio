export type TPostProps = {
  id: string;
  technology: string;
  title: string;
  description: string;
  time: string;
  image: string;
  sub_titles: TSubTitle[];
};

type TSubTitle = {
  title: string;
  description: string;
};
