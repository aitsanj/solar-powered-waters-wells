import React, { FC } from 'react';
import { Props } from './props';

export const Div: FC<Props> = ({ children, ...rest }: Props) => (
    <div {...rest}>
        {children}
    </div>
);