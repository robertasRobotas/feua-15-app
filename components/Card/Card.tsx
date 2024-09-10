import styles from "./styles.module.css";

type CardProps = {
  imgUrl: string;
  title: string;
};

const Card = ({ imgUrl, title }: CardProps) => {
  return (
    <div className={styles.main}>
      <img src={imgUrl} />
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
