import { FontSizes } from 'common';
import { Div, H2 } from 'components/atoms';
import { QuestionAndAnswers, Sun } from 'components/molecules';
import React, { FC } from 'react';
import { Props } from './props';

export const SolarPoweredWaterWells: FC<Props> = ({ ...rest }: Props) => (
    <Div style={{
        display: 'flex',
        justifyContent: 'space-between'
    }} {...rest}>
        <Div style={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 4,
            width: '100%',
            alignItems: 'center'
        }}>
            <H2 style={{ fontSize: FontSizes.big }}>Solar-Powered Water wells</H2>
            <Sun />
        </Div>
        <QuestionAndAnswers style={{
            flexGrow: 1,
            width: '100%'
        }} />
    </Div>
)