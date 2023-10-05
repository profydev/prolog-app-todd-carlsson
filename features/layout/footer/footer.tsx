import React from "react";
import { version } from "package.json";
import classNames from "classnames";
import styles from "./footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import uuid from "react-uuid";

export type footerLinkProps = {
  id: string;
  name: string;
  href: string;
};
export function Footer() {
  const footerLinks: footerLinkProps[] = [
    {
      id: uuid(),
      name: "Docs",
      href: "#",
    },
    {
      id: uuid(),
      name: "API",
      href: "#",
    },
    {
      id: uuid(),
      name: "Help",
      href: "#",
    },
    {
      id: uuid(),
      name: "Community",
      href: "#",
    },
  ];
  return (
    <footer className={classNames(styles.container)}>
      <div className={classNames(styles.content)}>
        <div className={classNames(styles.footerText)}>Version: {version}</div>
        <div className={classNames(styles.footerLinks)}>
          {footerLinks.map((link) => (
            <Link
              key={link.id}
              className={classNames(styles.footerLink)}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <Image
          width={23}
          height={33}
          className={classNames(styles.footerLogo)}
          src="/icons/logo-small.svg"
          alt="logo"
        />
      </div>
    </footer>
  );
}
