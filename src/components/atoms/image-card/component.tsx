import React, { FC } from 'react';
import { Props } from './props';

export const ImageCard: FC<Props> = ({ ...rest }: Props) => (
    <img {...rest} />
);