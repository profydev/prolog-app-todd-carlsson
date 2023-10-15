import React, { useEffect, useRef, CSSProperties } from "react";
import classNames from "classnames";
import styles from "./checkbox.module.scss";

export enum CheckboxSizes {
  small = "small",
  medium = "medium",
}

export interface CustomCSS extends CSSProperties {
  "--url-img": string;
}

type CheckboxProps = {
  children: string | number;
  size?: CheckboxSizes;
  disabled?: boolean;
  indeterminate?: boolean;
};

export function Checkbox({
  children,
  size = CheckboxSizes.small,
  disabled = false,
  indeterminate = false,
  ...props
}: CheckboxProps) {
  const checkboxRef = useRef<HTMLInputElement>(null);

  const indeterminateUrl = {
    "--url-img":
      size === CheckboxSizes.small
        ? "url('/icons/check-partial-small.svg')"
        : "url('/icons/check-partial-medium.svg')",
  } as CustomCSS;

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);
  return (
    <label
      {...props}
      className={classNames(styles.customCheckbox, {
        [styles.small]: size === CheckboxSizes.small,
        [styles.medium]: size === CheckboxSizes.medium,

        [styles.disabled]: disabled === true,
        [styles.indeterminate]: indeterminate === true,
      })}
    >
      <input
        type="checkbox"
        name="checkbox"
        style={indeterminateUrl}
        disabled={disabled}
        ref={checkboxRef}
      />
      {children}
    </label>
  );
}
