import React from "react";
import styles from "./checkbox.module.scss";
import classNames from "classnames";

export function Checkbox() {
  return <input className={classNames(styles.checkbox)} type="checkbox" />;
}
