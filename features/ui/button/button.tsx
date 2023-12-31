import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./button.module.scss";

export enum ButtonSize {
  small = "small",
  medium = "medium",
  large = "large",
  xLarge = "xLarge",
}

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  empty = "empty",
  emptyGray = "emptyGray",
  error = "error",
  clear = "clear",
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize;
  color?: ButtonColor;
  children: React.ReactNode | string | number;
};

export function Button({
  size = ButtonSize.small,
  color = ButtonColor.clear,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={classNames(styles.button, props.className, {
        [styles.small]: size === ButtonSize.small,
        [styles.medium]: size === ButtonSize.medium,
        [styles.large]: size === ButtonSize.large,
        [styles.xLarge]: size === ButtonSize.xLarge,

        [styles.primary]: color === ButtonColor.primary,
        [styles.secondary]: color === ButtonColor.secondary,
        [styles.gray]: color === ButtonColor.gray,
        [styles.empty]: color === ButtonColor.empty,
        [styles.emptyGray]: color === ButtonColor.emptyGray,
        [styles.error]: color === ButtonColor.error,
        [styles.clear]: color === ButtonColor.clear,
      })}
    >
      {children}
    </button>
  );
}
