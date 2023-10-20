import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta = {
  component: Input,
  title: "UI/Input",
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const input: Story = {};
export const icon: Story = {
  args: {
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
