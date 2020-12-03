import React, { FC } from 'react';
import { Props } from './props';

export const P: FC<Props> = ({ children, ...rest }: Props) => (
    <p {...rest}>
        {children}
    </p>
)