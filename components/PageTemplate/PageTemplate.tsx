import React, { ReactNode, useEffect } from "react";
import styles from "./styles.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import cookie from "js-cookie";
import { useRouter } from "next/router";

type PageTemplateProps = {
  children: ReactNode;
};

const PageTemplate = ({ children }: PageTemplateProps) => {
  const router = useRouter();
  const jwt = cookie.get("inventory_app_jwt");

  const validateUser = async () => {
    try {
      const headers = {
        authorization: jwt,
      };

      const response = await axios.get(`http://localhost:3002/login/validate`, {
        headers,
      });

      if (response.status !== 200) {
        router.push("/login");
      }
    } catch (err) {
      router.push("/login");
    }
  };

  useEffect(() => {
    if (!jwt) {
      router.push("/login");
    }

    validateUser();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.main}>{children}</div>
      <Footer copyrightTitle="Inventory App" />
    </div>
  );
};

export default PageTemplate;
