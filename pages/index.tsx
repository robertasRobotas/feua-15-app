import Header from "@/components/Header/Header";
import { useState } from "react";
import { LinkPrpos } from "../types/link";
import Footer from "@/components/Footer/Footer";
import Modal from "@/components/Modal/Modal";

export default function Home() {
  const [links] = useState<LinkPrpos[]>([
    { title: "About", href: "/aaaaaa" },
    { title: "Portfolio", href: "/bbbbbb" },
    { title: "Contacts", href: "/cccccc" },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);

  const logOut = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Header logo={"324324324"} links={links} logOut={logOut} />
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
