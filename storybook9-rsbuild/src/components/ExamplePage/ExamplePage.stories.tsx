import type { Meta, StoryObj } from 'storybook-react-rsbuild';

import { ExamplePage } from './ExamplePage';

const meta: Meta<typeof ExamplePage> = {
  component: ExamplePage,
  parameters: {   
  },
  args: { },
};

export default meta;
type Story = StoryObj<typeof ExamplePage>;

export const Default: Story = {};
