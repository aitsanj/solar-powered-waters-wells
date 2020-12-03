import React, { FC } from 'react';
import { Props } from './props';

export const H4: FC<Props> = ({ children, ...rest }: Props) => (
    <h4 {...rest}>
        {children}
    </h4>
);