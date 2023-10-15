import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxSizes } from "./checkbox";

const meta = {
  component: Checkbox,
  title: "UI/Checkbox",
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

/**CHECKBOX SIZES */

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

/**CHECKBOX INDETERMINATE SIZES */

export const indeterminateSmall: Story = {
  args: {
    children: "Label",
    size: CheckboxSizes.small,
    indeterminate: true,
  },
};
export const indeterminateMedium: Story = {
  args: {
    children: "Label",
    size: CheckboxSizes.medium,
    indeterminate: true,
  },
};
