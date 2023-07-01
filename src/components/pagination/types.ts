export type CardProps = {
  nextPage: (nextPageUrl: string) => string | void;
  prevPage: (prevPageUrl: string) => string | void;
  goToPage: (num: number) => number | void;
  pages: number;
  prevPageUrl: string;
  nextPageUrl: string;
};
