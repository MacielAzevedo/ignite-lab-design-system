import * as CheckboxPprimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export interface CheckboxProps extends CheckboxPprimitive.CheckboxProps{ }

export const Checkbox = (props: CheckboxProps) => {
    return (
        <CheckboxPprimitive.Root className='w-6 h-6 p-[2px] bg-gray-800 rounded'{...props}>
            <CheckboxPprimitive.Indicator asChild>
                <Check weight='bold' className='h-5 w-5 text-cyan-500' />
            </CheckboxPprimitive.Indicator>
        </CheckboxPprimitive.Root >
    )
}