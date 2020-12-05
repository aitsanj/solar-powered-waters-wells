import { Colors, FontSizes } from 'common';
import { Div, H3, H4, P } from 'components/atoms';
import React, { FC, useState } from 'react';
import { QuestionAndAnswerArray } from './Mock';
import { Props } from './props';

export const QuestionAndAnswers: FC<Props> = ({ title, content, id, ...rest }: Props) => {
    const [initialState, setInitialState] = useState(QuestionAndAnswerArray);
    return (
        <Div {...rest}>
            {
                initialState.map((text, i) => (
                    <Div key={i} >
                        <Div style={{ display: 'flex', alignItems: 'center' }}>
                            <H4 style={{
                                marginRight: '10px',
                                borderRadius: '50%',
                                backgroundColor: Colors.blue,
                                color: Colors.white,
                                padding: '5px 12px',
                                fontSize: FontSizes.big
                            }}>
                                {text.id}
                            </H4>
                            <H3 style={{ fontSize: FontSizes.big }}>{text.title}</H3>
                        </Div>
                        <P style={{ fontSize: FontSizes.big }}>
                            {text.content}
                        </P>
                    </Div>
                ))
            }
        </Div>
    )
};