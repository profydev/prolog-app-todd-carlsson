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
  error?: boolean;
  errorMessage?: string;
};

export function Input({
  iconSrc,
  placeholder = "Type here",
  disabled = false,
  label,
  hint,
  errorMessage,
  error = errorMessage ? true : false,
  ...props
}: InputProps) {
  return (
    <div className={classNames(styles.container)}>
      {label && <p className={classNames(styles.label)}>{label}</p>}
      <div className={classNames(styles.inputContainer)}>
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
          className={classNames(styles.input, error ? styles.error : "")}
          style={{
            paddingLeft: iconSrc ? 42 : 14,
            paddingRight: error ? 38 : 14,
          }}
        />
        {error && (
          <Image
            className={classNames(styles.errorIcon)}
            src="/icons/alert-circle.svg"
            height={16}
            width={16}
            alt="alert circle"
          />
        )}
      </div>
      {hint && !error && <p className={classNames(styles.hint)}>{hint}</p>}
      {errorMessage && (
        <p className={classNames(styles.errorMessage)}>{errorMessage}</p>
      )}
    </div>
  );
}
