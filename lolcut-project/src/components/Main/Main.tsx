import React, { useState } from 'react';
import * as Styled from './Styled';
import { Header } from '../../components';

type Circle = {
    type: string;
    percent: number;
    color: string;
};

const Main: React.FC = () => {
    const [circle, setCircle] = useState<Circle[]>([
        {
            type: "Blog",
            percent: 50, 
            color: "#00FCA3"
        }, {
            type: "Algorithm",
            percent: 20, 
            color: "#1A99AA"
        }, {
            type: "Github",
            percent: 70, 
            color: "#ECD06F"
        }, {
            type: "Personal_Study",
            percent: 100, 
            color: "#DF6C4F"
        },
    ]);

    return (
        <Styled.Main>
            <Header />
            <main>
                {circle.map((data: Circle, i: number) => {
                    return (
                        <div key={i}>
                            <svg>
                                <circle
                                    r={50}
                                    cx={75}
                                    cy={75}
                                    stroke={data.color}
                                    strokeOpacity={0.5}
                                />
                                <circle
                                    r={50}
                                    cx={75}
                                    cy={75}
                                    stroke={data.color}
                                    strokeDasharray={188}
                                    strokeDashoffset={188 - (188 * data.percent) / 100} 
                                />
                                <h2>{data.percent}%</h2>
                                <p>{data.type}</p>
                            </svg>
                        </div>
                    )
                })}
            </main>
        </Styled.Main>
    )
}

export default Main;