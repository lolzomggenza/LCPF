import React, { useState, } from 'react';
import * as Styled from './Styled';
import { Header } from '../../components';
import Circle from './components/Circle';
import main_h from './img/main_h.png'
import arrow_down from './img/arrow_down.png'
import link_img from './img/link.png'
import summary_img from './img/summary.png'

type Circle = {
    type: string;
    percent: number;
};

const Main: React.FC = () => {
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

    const circleView = () => {
        const view = circle.map((data: Circle, i: number) => {
            return (
                <Circle 
                    percent={data.percent}
                    type={data.type} 
                    key={i}
                />
            )
        })
        return view;
    }

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
                        <img className="link-img" src={link_img} alt="link" />
                        <input type="text" placeholder="link" />
                    </div>
                    <div className="page-2-input-wrapper">
                        <img src={summary_img} alt="summary" />
                        <input type="text" placeholder="summary" />
                    </div>
                </div>
            </div>
        </Styled.Main>
    )
}

export default Main;