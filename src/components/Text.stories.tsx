import { Text, TextProps } from './Text';
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Text',
        size: 'md',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio',
            }
        }
    } as Meta<TextProps>,
}
export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm',
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg',
    }
}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Text with p tag</p>
        )
    },
    argTypes: {
        children: {
            table: {
                disabled: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }
}