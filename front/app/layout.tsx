import "@styles/globals.css";
import "@radix-ui/themes/styles.css";
import { FC, ReactNode } from "react";
import { Theme } from "@radix-ui/themes";
import Header from "../components/header/Header";
import Footer from "@components/footer/Footer";

export const metadata = {
  title: "ABRACE",
  description: "ONG de adoção - ADICIONAR MELHOR DESCRIÇÃO",
};

interface MyProps {
  children?: ReactNode;
}

const RootLayout: FC<MyProps> = (props) => {
  return (
    <html lang="pt-BR">
      <body>
        <Theme>
          <Header />
          <main>{props.children}</main>
          
        </Theme>
      </body>
    </html>
  );
};

export default RootLayout;
