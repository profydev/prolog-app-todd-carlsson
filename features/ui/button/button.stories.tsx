import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonColor, ButtonSize } from "./button";

const meta = {
  component: Button,
  title: "UI/Button",
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "select" },
      options: [
        "Button CTA",
        [
          <img key={1} width={20} height={20} src="/icons/react.svg" />,
          "Button CTA",
        ],
        [
          "Button CTA",
          <img key={1} width={20} height={20} src="/icons/react.svg" />,
        ],
        <img key={1} width={20} height={20} src="/icons/react.svg" />,
      ],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "xLarge"],
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "gray", "empty", "emptyGray", "error"],
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/**Button Size Variations */
export const small: Story = {
  args: {
    size: ButtonSize.small,
    children: "Button CTA",
  },
};
export const medium: Story = {
  args: {
    size: ButtonSize.medium,
    children: "Button CTA",
  },
};
export const large: Story = {
  args: {
    size: ButtonSize.large,
    children: "Button CTA",
  },
};
export const xLarge: Story = {
  args: {
    size: ButtonSize.xLarge,
    children: "Button CTA",
  },
};

/**Button Color Variations */
export const primary: Story = {
  args: {
    color: ButtonColor.primary,
    children: "Button CTA",
  },
};
export const secondary: Story = {
  args: {
    color: ButtonColor.secondary,
    children: "Button CTA",
  },
};
export const gray: Story = {
  args: {
    color: ButtonColor.gray,
    children: "Button CTA",
  },
};
export const empty: Story = {
  args: {
    color: ButtonColor.empty,
    children: "Button CTA",
  },
};
export const emptyGray: Story = {
  args: {
    color: ButtonColor.emptyGray,
    children: "Button CTA",
  },
};
export const error: Story = {
  args: {
    color: ButtonColor.error,
    children: "Button CTA",
  },
};

/**Button Icon Variations */
export const leadingIcon: Story = {
  args: {
    children: [
      <img key={1} width={20} height={20} src="/icons/react.svg" />,
      "Button CTA",
    ],
  },
};
export const trailingIcon: Story = {
  args: {
    children: [
      "Button CTA",
      <img key={1} width={20} height={20} src="/icons/react.svg" />,
    ],
  },
};
export const iconOnly: Story = {
  args: {
    children: <img key={1} width={20} height={20} src="/icons/react.svg" />,
  },
};
