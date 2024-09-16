import React, { useState } from "react";
import styles from "./styles.module.css";
import Button from "../Button/Button";
import cookie from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";

const CreateItemForm = () => {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const router = useRouter();

  const jwt = cookie.get("inventory_app_jwt");

  const addInventory = async () => {
    try {
      const body = {
        title: title,
        count: count,
        imgUrl: imgUrl,
      };

      const headers = {
        authorization: jwt,
      };

      const response = await axios.post(
        `${process.env.SERVER_URL}/inventories`,
        body,
        {
          headers,
        }
      );

      if (response.status === 201) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.main}>
      <input
        value={title}
        placeholder="title"
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        value={count}
        placeholder="count"
        type="text"
        onChange={(e) => {
          setCount(e.target.value);
        }}
      />
      <input
        value={imgUrl}
        placeholder="imgUrl"
        type="text"
        onChange={(e) => {
          setImgUrl(e.target.value);
        }}
      />
      <Button
        isLoading={false}
        title="Add inventory"
        onClick={() => {
          addInventory();
        }}
      />
    </div>
  );
};

export default CreateItemForm;
