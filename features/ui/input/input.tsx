import React, { HtmlHTMLAttributes } from "react";
import styles from "./input.module.scss";
import classNames from "classnames";

type InputProps = HtmlHTMLAttributes<HTMLInputElement>;

export function Input({ ...props }: InputProps) {
  return (
    <input
      {...props}
      placeholder="Type here"
      className={classNames(styles.input)}
    />
  );
}
