import React, { HtmlHTMLAttributes } from "react";
import styles from "./input.module.scss";
import classNames from "classnames";
import Image from "next/image";

type InputProps = HtmlHTMLAttributes<HTMLInputElement> & {
  iconSrc?: string;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  hint?: string;
};

export function Input({
  iconSrc,
  placeholder = "Type here",
  disabled = false,
  label,
  hint,
  ...props
}: InputProps) {
  return (
    <div className={classNames(styles.inputContainer)}>
      {label && <p className={classNames(styles.label)}>{label}</p>}
      {iconSrc && (
        <Image
          className={classNames(styles.icon)}
          src={iconSrc}
          height={20}
          width={20}
          alt="icon"
        />
      )}
      <input
        {...props}
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        className={classNames(styles.input)}
        style={{ paddingLeft: iconSrc ? 42 : 14 }}
      />
      {hint && <p className={classNames(styles.hint)}>{hint}</p>}
    </div>
  );
}
