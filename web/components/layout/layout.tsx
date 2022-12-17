import { ReactChildren } from "react";

type Props = {
  children: ReactChildren;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      {children}
      <footer>
        <p>フッターだよ</p>
      </footer>
    </>
  );
};
