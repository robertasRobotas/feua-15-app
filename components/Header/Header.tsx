import { FC } from "react";
import { LinkPrpos } from "../../types/link";
import styles from "./styles.module.css";

type HeaderProps = {
  logo: string | number;
  links: LinkPrpos[];
  logOut: () => void;
};

const Header: FC<HeaderProps> = ({ logo, links, logOut }) => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>{logo}</div>

      <div className={styles.rigtHandSection}>
        <ul>
          {links.map((link) => {
            return (
              <li key={link.title}>
                <a href={link.href}>{link.title}</a>
              </li>
            );
          })}
        </ul>

        <button onClick={logOut}>Sing out</button>
      </div>
    </div>
  );
};

export default Header;
