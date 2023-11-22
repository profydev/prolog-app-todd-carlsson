import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta = {
  component: Input,
  tags: ["autodocs"],
  title: "UI/Input",
  argTypes: {
    iconSrc: {
      control: "select",
      options: [
        "/icons/mail.svg",
        "/icons/user.svg",
        "/icons/node.svg",
        "/icons/python.svg",
        "/icons/react.svg",
      ],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const input: Story = {};
export const icon: Story = {
  args: {
    iconSrc: "/icons/mail.svg",
  },
};
export const iconWithLabel: Story = {
  args: {
    label: "Email",
    iconSrc: "/icons/mail.svg",
  },
};
export const disabled: Story = {
  args: {
    disabled: true,
  },
};
export const label: Story = {
  args: {
    label: "Email",
  },
};
export const hint: Story = {
  args: {
    label: "Email",
    hint: "This is a hint text to help user.",
  },
};
export const errorMessage: Story = {
  args: {
    label: "Email",
    hint: "This is a hint text to help user.",
    errorMessage: "This is a error message.",
  },
};
export const error: Story = {
  args: {
    error: true,
  },
};
