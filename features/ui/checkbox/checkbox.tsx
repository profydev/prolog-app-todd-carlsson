import React, { useEffect, useRef, CSSProperties } from "react";
import classNames from "classnames";
import styles from "./checkbox.module.scss";

export enum CheckboxSizes {
  small = "small",
  medium = "medium",
}

export interface CustomCSS extends CSSProperties {
  "--url-img": string;
  "--url-img-indeterminate": string;
}

type CheckboxProps = {
  label: string;
  size?: CheckboxSizes;
  disabled?: boolean;
  indeterminate?: boolean;
  name?: string;
};

export function Checkbox({
  label,
  size = CheckboxSizes.small,
  disabled = false,
  indeterminate = false,
  name = "checkbox",
  ...props
}: CheckboxProps) {
  const checkboxRef = useRef<HTMLInputElement>(null);

  const checkboxImgUrl = {
    "--url-img-indeterminate":
      size === CheckboxSizes.small
        ? !disabled
          ? "url('/icons/check-partial-small.svg')"
          : "url('/icons/check-partial-small-disabled.svg')"
        : !disabled
        ? "url('/icons/check-partial-medium.svg')"
        : "url('/icons/check-partial-medium-disabled.svg')",

    "--url-img":
      size === CheckboxSizes.small
        ? !disabled
          ? "url('/icons/check-small.svg')"
          : "url('/icons/check-small-disabled.svg')"
        : !disabled
        ? "url('/icons/check-medium.svg')"
        : "url('/icons/check-medium-disabled.svg')",
  } as CustomCSS;

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);
  return (
    <label
      {...props}
      className={classNames(styles.customLabel, {
        [styles.small]: size === CheckboxSizes.small,
        [styles.medium]: size === CheckboxSizes.medium,

        [styles.indeterminate]: indeterminate === true,
        [styles.disabled]: disabled === true,
      })}
    >
      <input
        type="checkbox"
        className={classNames(styles.customInput)}
        name={name}
        style={checkboxImgUrl}
        disabled={disabled}
        ref={checkboxRef}
      />
      {label}
    </label>
  );
}
