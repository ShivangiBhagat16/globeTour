import { Link } from "react-router-dom";

import styles from "./Logo.module.css";

function Logo() {
    return <Link to="/">
            <img src="/globe.png" alt="GlobeTour logo" className={styles.logo} /> <span className="logotext">GlobeTour</span>
          </Link>
}

export default Logo;
