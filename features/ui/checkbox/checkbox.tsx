import React from "react";
import classNames from "classnames";
import styles from "./checkbox.module.scss";

export enum CheckboxSizes {
  small = "small",
  medium = "medium",
}

type CheckboxProps = {
  children: string | number;
  size?: CheckboxSizes;
  disabled?: boolean;
};

export function Checkbox({
  children,
  size = CheckboxSizes.small,
  disabled = false,
  ...props
}: CheckboxProps) {
  return (
    <label
      {...props}
      className={classNames(styles.customCheckbox, {
        [styles.small]: size === CheckboxSizes.small,
        [styles.medium]: size === CheckboxSizes.medium,

        [styles.disabled]: disabled === true,
      })}
    >
      <input disabled={disabled} type="checkbox" name="checkbox" />
      {children}
    </label>
  );
}
