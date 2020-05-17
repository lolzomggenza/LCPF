import React, { useState, useRef, useEffect } from 'react';
import * as Styled from './Styled';
import { Header } from '../../components';

type Circle = {
    type: string;
    percent: number;
};

const Main: React.FC = () => {
    const color: string[] = ["#00FCA3", "#1A99AA", "#ECD06F", "#DF6C4F"];
    const circleRef = useRef<SVGCircleElement | null>(null);
    const [circleRound, setCircleRound] = useState<number>(0);
    const [circle, setCircle] = useState<Circle[]>([
        {
            type: "Blog",
            percent: 50,
        }, {
            type: "Algorithm",
            percent: 20,
        }, {
            type: "Github",
            percent: 70,
        }, {
            type: "Personal_Study",
            percent: 10,
        }   
    ]);

    const calcRound = () => {
        const result: number = circleRef.current?.getTotalLength() || 0;
        setCircleRound(result);
    };

    useEffect(() => {
        calcRound();
    }, []);

    return (
        <Styled.Main>
            <Header />
            <main>
                {circle.map((data: Circle, i: number) => {
                    return (
                        <Styled.CircleWrap percent={data.percent} circleRound={circleRound} key={i}>
                            <svg>
                                <circle r="50" cx="75" cy="75"
                                    stroke={color[i]}
                                    strokeOpacity={0.3}
                                />
                                <circle r="50" cx="75" cy="75"
                                    stroke={color[i]}
                                    ref={circleRef}
                                />
                            </svg>
                            <h2>{data.percent}%</h2>
                            <p>{data.type}</p>
                        </Styled.CircleWrap>
                    )
                })}
            </main>
        </Styled.Main>
    )
}

export default Main;