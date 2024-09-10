import Header from "@/components/Header/Header";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer/Footer";
import Modal from "@/components/Modal/Modal";
import axios from "axios";
import cookie from "js-cookie";
import CardWrapper from "@/components/CardWrapper/CardWrapper";
import { Inventory } from "@/types/inventories";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const [isModalOpen, setModalOpen] = useState(false);
  const [inventories, setInventories] = useState<Inventory[]>([]);

  const companyId = cookie.get("company_id");
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

  const fetchInventories = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3002/inventories/company/${companyId}`
      );

      setInventories(response.data.inventories);
      console.log(response.data.inventories);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!jwt) {
      router.push("/login");
    }

    validateUser();

    fetchInventories();
  }, []);

  return (
    <>
      <Header />

      <CardWrapper inventories={inventories} />

      <Footer copyrightTitle="sdfsdsd" />
      {isModalOpen && (
        <Modal
          text="Do you really want to sign out?"
          onModalClose={() => {
            setModalOpen(false);
          }}
        />
      )}
    </>
  );
}
