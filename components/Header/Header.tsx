import { FC } from "react";
// import { LinkPrpos } from "../../types/link";
import styles from "./styles.module.css";

type HeaderProps = {
  // links: LinkPrpos[];
  // logOut: () => void;
};

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>Inventory App</div>

      <div className={styles.rigtHandSection}>
        {/* <ul>
          {links.map((link) => {
            return (
              <li key={link.title}>
                <a href={link.href}>{link.title}</a>
              </li>
            );
          })}
        </ul> */}

        {/* <button onClick={logOut}>Sing out</button> */}
      </div>
    </div>
  );
};

export default Header;
