import axios from "axios";
import Button from "../Button/Button";
import styles from "./styles.module.css";
import cookie from "js-cookie";
import { useRouter } from "next/router";

type ItemProps = {
  id: string;
  imgUrl: string;
  title: string;
  count: number;
};

const Item = ({ id, imgUrl, title, count }: ItemProps) => {
  const router = useRouter();

  const jwt = cookie.get("inventory_app_jwt");

  const deleteInventory = async () => {
    try {
      const headers = {
        authorization: jwt,
      };

      const response = await axios.delete(
        `http://localhost:3002/inventories/${id}`,
        {
          headers,
        }
      );

      if (response.status === 200) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={imgUrl} alt="" />
      </div>
      <div className={styles.itemInfo}>
        <h2>{title}</h2>
        <h3>{count}</h3>
        <Button
          title="Delete inventory"
          onClick={() => deleteInventory()}
          isLoading={false}
          type="DANGER"
        />
      </div>
    </div>
  );
};

export default Item;
