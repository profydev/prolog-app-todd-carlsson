import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta = {
  component: Input,
  title: "UI/Input",
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const input: Story = {};
