import React, { useState, useRef, useEffect } from 'react';
import * as Styled from './Styled';
import { Header } from '../../components';
import main_h from './img/main_h.png'
import arrow_down from './img/arrow_down.png'
import link_img from './img/link.png'
import summary_img from './img/summary.png'

type Circle = {
    type: string;
    percent: number;
};

const Main: React.FC = () => {
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
    // const apiCircle = () => {
    //     axios request
    //     setCircle([
    //         ...circle,
    //         {
    //             // new Object
    //         }
    //     ])
    // }

    const circleView = () => {
        console.log(1)
        const view = circle.map((data: Circle, i: number) => {
            return (
                <Styled.CircleWrap percent={data.percent} circleRound={circleRound} key={i}>
                    <svg>
                        <circle r="50" cx="75" cy="75"
                            strokeOpacity={0.3}
                        />
                        <circle r="50" cx="75" cy="75"
                            ref={circleRef}
                        />
                    </svg>
                    <h2>{data.percent}%</h2>
                    <button>{data.type}</button>
                </Styled.CircleWrap>
            )
        })
        return view;
    }

    useEffect(() => {
        calcRound();
    }, []);

    return (
        <Styled.Main>
            <Header />
            <main>
                {circleView()}
            </main>
            <div className="page-1-arrow">
                <img src={arrow_down} alt="arrow_down"/>
            </div>
            <div className="page-2-wrapper">
                <div className="page-2-h1">
                    <img src={main_h} alt="main_h"/>
                </div>
                <div className="page-2-input-wrapper-wrapper">
                    <div className="page-2-input-wrapper">
                        <img className="link-img" src={link_img} alt="link"/>
                        <input type="text"/>
                    </div>
                    <div className="page-2-input-wrapper">
                        <img src={summary_img} alt="summary"/>
                        <input type="text"/>
                    </div>
                </div>
            </div>
        </Styled.Main>
    )
}

export default Main;