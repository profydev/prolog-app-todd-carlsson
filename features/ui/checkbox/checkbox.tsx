import React from "react";
import classNames from "classnames";
import styles from "./checkbox.module.scss";

export enum CheckboxSizes {
  small = "small",
  medium = "medium",
}

type CheckboxProps = {
  children: string | number;
  size: CheckboxSizes;
};

export function Checkbox({
  children,
  size = CheckboxSizes.small,
}: CheckboxProps) {
  return (
    <label
      className={classNames(styles.customCheckbox, {
        [styles.small]: size === CheckboxSizes.small,
        [styles.medium]: size === CheckboxSizes.medium,
      })}
    >
      <input type="checkbox" name="checkbox" />
      {children}
    </label>
  );
}
