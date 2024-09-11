import styles from "./styles.module.css";

type ItemProps = {
  imgUrl: string;
  title: string;
};

const Item = ({ imgUrl, title }: ItemProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={imgUrl} alt="" />
      </div>
      <div className={styles.itemInfo}>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Item;
