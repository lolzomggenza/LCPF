import React, { useState, useCallback } from 'react';
import * as Styled from './Styled';
import { Link } from 'react-router-dom';

interface Props {
    imgSrc: string;
    title: string;
    subTitle: string;
    date: string;
    writer: string;
}

type CardInfo = {
    imgSrc: string;
    title: string;
    subTitle: string;
    date: string;
    writer: string
};

const Card: React.FC<Props> = ({ imgSrc, date, subTitle, title, writer }) => {
    return (
        <Styled.Card>
            <a href="" className="img-wrapper">
                <div>
                    <img src={imgSrc}/>
                </div>
            </a>
            <div className="title-wrapper">
                <Link to="/">
                    <span className="title">{title}</span>
                    <span className="sub-title">{subTitle}</span>
                </Link>
                <div>
                    <span>{date}</span>
                </div>
            </div>
            <div className="line"/>
            <div className="sub-information-wrapper">
                <a href="">
                    <span>{writer}</span>
                </a>
            </div>
        </Styled.Card>
    )
}

export default Card