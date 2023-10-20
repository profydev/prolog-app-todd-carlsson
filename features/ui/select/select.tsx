import React, { useState } from "react";
import uuid from "react-uuid";
import classNames from "classnames";
import styles from "./select.module.scss";
import Image from "next/image";

type SelectProps = {
  options: string[];
  emptyText?: string;
  disabled?: boolean;
  iconSrc?: string;
  label?: string;
  hint?: string;
  errorMessage?: string;
};

export function Select({
  options,
  emptyText = "Choose an Option",
  iconSrc,
  label,
  hint,
  errorMessage,
  disabled = false,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    emptyText.length ? emptyText : "Choose an Option",
  );

  return (
    <div
      onClick={() => !disabled && setIsOpen(!isOpen)}
      className={classNames(styles.selectWrapper)}
    >
      {label && <div className={classNames(styles.label)}>{label}</div>}
      <div className={classNames(styles.select, isOpen && styles.open)}>
        <button
          className={classNames(
            styles.selectTrigger,
            errorMessage ? styles.error : "",
            selectedOption === emptyText ||
              selectedOption === "Choose an Option"
              ? styles.empty
              : "",
            disabled ? styles.disabled : "",
          )}
        >
          <span className={classNames(styles.selectTriggerContent)}>
            {iconSrc && (
              <Image
                className={classNames(styles.icon)}
                height={20}
                width={20}
                src={iconSrc}
                alt="icon"
              />
            )}
            {selectedOption}
          </span>
          <Image
            style={{ transform: !isOpen ? "rotate(180deg)" : "" }}
            src="/icons/chevron.svg"
            height={20}
            width={20}
            alt="arrow"
          />
        </button>
        <div className={classNames(styles.customOptions)}>
          {options.map((item: string) => (
            <span
              key={uuid()}
              onClick={() => setSelectedOption(item)}
              className={classNames(
                styles.customOption,
                selectedOption === item && styles.selected,
              )}
              data-value={item}
            >
              <div className={classNames(styles.customOptionContent)}>
                {iconSrc && (
                  <Image
                    className={classNames(styles.icon)}
                    height={20}
                    width={20}
                    src={iconSrc}
                    alt="icon"
                  />
                )}
                {item}
              </div>
              {selectedOption === item && (
                <Image
                  src="/icons/check-select.svg"
                  height={20}
                  width={20}
                  alt="check"
                />
              )}
            </span>
          ))}
        </div>
      </div>
      {hint && !errorMessage && (
        <p className={classNames(styles.hint)}>{hint}</p>
      )}
      {errorMessage && (
        <p className={classNames(styles.errorMessage)}>{errorMessage}</p>
      )}
    </div>
  );
}
