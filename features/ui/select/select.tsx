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
};

export function Select({
  options,
  emptyText = "Choose an Option",
  iconSrc,
  disabled = false,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(emptyText);

  return (
    <div
      onClick={() => !disabled && setIsOpen(!isOpen)}
      className={classNames(styles.selectWrapper)}
    >
      <div className={classNames(styles.select, isOpen && styles.open)}>
        <div
          className={classNames(
            styles.selectTrigger,
            selectedOption === emptyText ? styles.empty : "",
            isOpen ? styles.focus : "",
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
        </div>
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
              {item}
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
    </div>
  );
}
