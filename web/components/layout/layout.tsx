import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      {children}
      <footer>
        <p>フッターだよ</p>
      </footer>
    </>
  );
};
