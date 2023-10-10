import React from "react";
import classNames from "classnames";
import styles from "./checkbox.module.scss";

export function Checkbox() {
  return <input className={classNames(styles.checkbox)} type="checkbox" />;
}
