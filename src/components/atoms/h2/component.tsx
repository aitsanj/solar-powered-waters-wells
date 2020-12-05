import React, { FC } from 'react';
import { Props } from './props';

export const H2: FC<Props> = ({ children, ...rest }: Props) => (
    <h2 {...rest}>
        {children}
    </h2>
);