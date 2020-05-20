import React, { useState, useEffect, useRef } from 'react';
import * as Styled from "../Styled";
interface CircleProps {
    percent: number;
    type: string;
}

const Circle: React.FC<CircleProps> = ({ percent, type }) => {
    const circleRef = useRef<SVGCircleElement | null>(null);
    const [circleRound, setCircleRound] = useState<number>(0);

    const calcRound = () => {
        const result: number = circleRef.current?.getTotalLength() || 0;
        setCircleRound(result);
    };

    useEffect(() => {
        calcRound();
    }, []);

    return (
        <Styled.CircleWrap circleRound={circleRound} percent={percent}>
            <svg>
                <circle r="50" cx="75" cy="75"
                    strokeOpacity={0.3}
                />
                <circle r="50" cx="75" cy="75"
                    ref={circleRef}
                />
            </svg>
            <h2>{percent}%</h2>
            <button>{type}</button>
        </Styled.CircleWrap>
    )
}

export default Circle;