import React, { useState, useCallback } from 'react';
import * as Styled from './Styled';
import { Link } from 'react-router-dom';

type CardInfo = {
    imgSrc: string;
    title: string;
    subTitle: string;
    date: string;
    writer: string
};

const Card: React.FC = () => {
    const [cardInfo, setCardInfo] = useState<CardInfo>(
        {
            imgSrc: "https://img.freepik.com/free-vector/abstract-galaxy-background_1199-247.jpg?size=626&ext=jpg",
            title: "✏️ 안녕하세요",
            subTitle: "안녕 안녕 나는 지수야 헬륨가스 마셨더니 요롷게 됬지",
            date: "2020년 5월 17일",
            writer: "by 유재민"
        }
    );

    return (
        <Styled.Card>
            <a href="" className="img-wrapper">
                <div>
                    <img src={cardInfo.imgSrc}/>
                </div>
            </a>
            <div className="title-wrapper">
                <a href="">
                    <span className="title">{cardInfo.title}</span>
                    <span className="sub-title">{cardInfo.subTitle}</span>
                </a>
                <div>
                    <span>{cardInfo.date}</span>
                </div>
            </div>
            <div className="line"/>
            <div className="sub-information-wrapper">
                <a href="">
                    <span>{cardInfo.writer}</span>
                </a>
            </div>
        </Styled.Card>
    )
}

export default Card