import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxSizes } from "./checkbox";

const meta = {
  component: Checkbox,
  title: "UI/Checkbox",
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const small: Story = {
  args: {
    children: "Label",
    size: CheckboxSizes.small,
  },
};
export const medium: Story = {
  args: {
    children: "Label",
    size: CheckboxSizes.medium,
  },
};
