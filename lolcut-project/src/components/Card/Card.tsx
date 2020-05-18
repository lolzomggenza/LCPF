import React, { useState, useCallback } from 'react';
import * as Styled from './Styled';
import { Link } from 'react-router-dom';

interface Props {
    imgSrc: string;
    title: string;
    subTitle: string;
    date: string;
    writer: string;
    link: string;
}

type CardInfo = {
    imgSrc: string;
    title: string;
    subTitle: string;
    date: string;
    writer: string;
    link: string;
};

const Card: React.FC<Props> = ({ imgSrc, date, subTitle, title, writer, link }) => {
    return (
        <Styled.Card className="card-wrapper">
            <Link to={link} className="img-wrapper">
                <div>
                    <img src={imgSrc}/>
                </div>
            </Link>
            <div className="title-wrapper">
                <Link to={link}>
                    <span className="title">{title}</span>
                    <span className="sub-title">{subTitle}</span>
                </Link>
                <div>
                    <span>{date}</span>
                </div>
            </div>
            <div className="line"/>
            <div className="sub-information-wrapper">
                <Link to={link}>
                    <span>{writer}</span>
                </Link>
            </div>
        </Styled.Card>
    )
}

export default Card