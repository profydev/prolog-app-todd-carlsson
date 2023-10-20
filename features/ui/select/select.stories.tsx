import { Meta, StoryObj } from "@storybook/react";
import { Select } from "./select";

const meta = {
  component: Select,
  title: "UI/Select",
  tags: ["autodocs"],
  argTypes: {
    iconSrc: {
      control: "select",
      options: [
        "/icons/user.svg",
        "/icons/node.svg",
        "/icons/python.svg",
        "/icons/react.svg",
      ],
    },
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
  args: {
    options: optionsArr,
  },
};
export const selectWithContainer: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <Select options={optionsArr} />
    </div>
  ),
};
export const disabled: Story = {
  args: {
    options: optionsArr,
    disabled: true,
  },
};
export const icon: Story = {
  args: {
    options: optionsArr,
    iconSrc: "/icons/user.svg",
  },
};
export const label: Story = {
  args: {
    options: optionsArr,
    iconSrc: "/icons/user.svg",
    label: "Team member",
  },
};
export const hint: Story = {
  args: {
    options: optionsArr,
    label: "Team member",
    hint: "This is a hint text to help user.",
  },
};
export const error: Story = {
  args: {
    options: optionsArr,
    label: "Team member",
    hint: "This is a hint text to help user.",
    errorMessage: "This is a error message.",
  },
};
