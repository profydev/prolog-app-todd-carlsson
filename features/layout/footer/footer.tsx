import React from "react";
import classNames from "classnames";
import styles from "./footer.module.scss";
import Link from "next/link";

export function Footer() {
  return (
    <footer className={classNames(styles.container)}>
      <div className={classNames(styles.content)}>
        <div className={classNames(styles.footerText)}>
          Version: {process.env.NEXT_PUBLIC_APP_VERSION}
        </div>
        <div className={classNames(styles.footerLinks)}>
          <Link className={classNames(styles.footerLink)} href="#">
            Docs
          </Link>
          <Link className={classNames(styles.footerLink)} href="#">
            API
          </Link>
          <Link className={classNames(styles.footerLink)} href="#">
            Help
          </Link>
          <Link className={classNames(styles.footerLink)} href="#">
            Community
          </Link>
        </div>
        <img
          className={classNames(styles.footerLogo)}
          src="/icons/logo-small.svg"
          alt="logo"
        />
      </div>
    </footer>
  );
}
