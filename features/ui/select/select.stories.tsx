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

export const select: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <Select
        options={[
          "Phoenix Baker",
          "Olivia Rhye",
          "Lana Steiner",
          "Demi Wilkinson",
          "Candice Wu",
          "Natali Craig",
          "Drew Cano",
        ]}
      />
    </div>
  ),
};
export const selectDisabled: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <Select
        options={[
          "Phoenix Baker",
          "Olivia Rhye",
          "Lana Steiner",
          "Demi Wilkinson",
          "Candice Wu",
          "Natali Craig",
          "Drew Cano",
        ]}
        disabled
      />
    </div>
  ),
};
export const selectIcon: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <Select
        options={[
          "Phoenix Baker",
          "Olivia Rhye",
          "Lana Steiner",
          "Demi Wilkinson",
          "Candice Wu",
          "Natali Craig",
          "Drew Cano",
        ]}
        iconSrc="/icons/user.svg"
      />
    </div>
  ),
};
