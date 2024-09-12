import { FC } from "react";
// import { LinkPrpos } from "../../types/link";
import styles from "./styles.module.css";
import Link from "next/link";

type HeaderProps = {
  // links: LinkPrpos[];
  // logOut: () => void;
};

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className={styles.main}>
      <Link href="/" className={styles.logo}>
        Inventory App
      </Link>

      <div className={styles.rigtHandSection}>
        <ul>
          <li>
            <Link href="/createItem">Create Inventory</Link>
          </li>
        </ul>

        {/* <button onClick={logOut}>Sing out</button> */}
      </div>
    </div>
  );
};

export default Header;
