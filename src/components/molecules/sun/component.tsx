import { Div, ImageCard } from 'components/atoms';
import React, { FC } from 'react';
import { Props } from './props';
import classnames from 'classnames';

export const Sun: FC<Props> = ({ style, className, ...rest }: Props) => (
    <Div {...rest}>
        <Div style={{ position: 'relative' }}>
            <ImageCard
                src='/img/Ellipse 54.png'
                style={{
                    position: 'absolute',
                    left: '130px',
                    top: '0'
                }}
            />
            <ImageCard
                src='/img/Ellipse 55.png'
                style={{
                    position: 'absolute',
                    top: '-7px',
                    left: '127px',
                }}
            />
            <ImageCard
                src='/img/Rectangle 407.png'
                style={{
                    position: 'absolute',
                    top: '125px',
                    left: '280px',
                }}
            />
            <ImageCard
                src='/img/Rectangle 408.png'
                style={{
                    position: 'absolute',
                    top: '170px',
                    left: '205px',
                }}
            />
            <ImageCard
                src='/img/Rectangle 409.png'
                style={{
                    position: 'absolute',
                    top: '25px',
                    left: '310px',
                }}
            />
            <ImageCard
                src='/img/Rectangle 410.png'
                style={{
                    position: 'absolute',
                    top: '155px',
                    left: '60px',
                }}
            />
        </Div>
    </Div>
);