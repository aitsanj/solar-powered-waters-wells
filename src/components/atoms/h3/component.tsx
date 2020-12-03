import React, { FC } from 'react';
import { Props } from './props';

export const H3: FC<Props> = ({ children, ...rest }: Props) => (
    <h3 {...rest}>
        {children}
    </h3>
);