import { FC } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import cookie from "js-cookie";
import { useRouter } from "next/router";

type HeaderProps = {
  // links: LinkPrpos[];
  // logOut: () => void;
  isUserLoggedIn: boolean;
};

const Header: FC<HeaderProps> = ({ isUserLoggedIn }) => {
  const router = useRouter();

  const singOutUser = () => {
    cookie.remove(process.env.JWT_KEY as string);
    router.push("/login");
  };

  return (
    <div className={styles.main}>
      <Link href="/" className={styles.logo}>
        Inventory App
      </Link>
      {isUserLoggedIn && (
        <div className={styles.rigtHandSection}>
          <ul>
            <li>
              <Link href="/createItem">Create Inventory</Link>
              <button onClick={singOutUser}>sign out</button>
            </li>
          </ul>

          {/* <button onClick={logOut}>Sing out</button> */}
        </div>
      )}
    </div>
  );
};

export default Header;
