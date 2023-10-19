import { Meta, StoryObj } from "@storybook/react";
import { Select } from "./select";

const meta = {
  component: Select,
  title: "UI/Select",
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

const optionsArr = [
  "Phoenix Baker",
  "Olivia Rhye",
  "Lana Steiner",
  "Demi Wilkinson",
  "Candice Wu",
  "Natali Craig",
  "Drew Cano",
];

export const select: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <Select options={optionsArr} />
    </div>
  ),
};
export const selectDisabled: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <Select options={optionsArr} disabled />
    </div>
  ),
};
export const selectIcon: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <Select options={optionsArr} iconSrc="/icons/user.svg" />
    </div>
  ),
};
export const selectLabel: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <Select
        options={optionsArr}
        iconSrc="/icons/user.svg"
        label="Team Member"
      />
    </div>
  ),
};
export const selectHint: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <Select
        options={optionsArr}
        label="Team Member"
        hint="This is a hint text to help user."
      />
    </div>
  ),
};
