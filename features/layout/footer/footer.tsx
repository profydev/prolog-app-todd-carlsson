import React from "react";
import classNames from "classnames";
import styles from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={classNames(styles.container)}>
      <div className={classNames(styles.content)}>
        <div>Version</div>
        <div>Docs</div>
        <div>API</div>
        <div>Help</div>
      </div>
    </footer>
  );
}
