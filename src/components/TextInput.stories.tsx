import { TextInput, TextInputInputProps, TextInputRootProps } from './TextInput';
import { Envelope } from 'phosphor-react'
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>,
            <TextInput.Input placeholder='Type your email address' />
        ],
    },
    argTypes: {
        children: {
            table: {
                disabled: true,
            }
        },
    },
} as Meta<TextInputRootProps>
export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: <TextInput.Input placeholder="Type your email address" />,
    }
}
