import React, { useState, useCallback } from 'react';
import * as Styled from './Styled';
import { Header, Card } from '../../components';


const Blog: React.FC = () => {

    return (
        <Styled.BlogMain>
            <Header />
            <main>
                <div className="post-wrapper">
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                </div>
                <aside>
                    <div>
                        <div className="notice-wrapper">
                            <span>
                                공지사항
                            </span>
                            <div className="line"/>
                            <div className="notice">
                                <a href="">
                                    LC가 일주일안에 만들어지지 못한 변명을 대기 위한 공지사항
                                </a>
                                <span>
                                    2019년 19월 19일
                                </span>
                            </div>
                            <div className="notice">
                                <a href="">
                                    Online class annoys me
                                </a>
                                <span>
                                    2019년 19월 19일
                                </span>
                            </div>
                            <div className="notice">
                                <a href="">
                                    아 시바 치킨 먹고 싶다
                                </a>
                                <span>
                                    2019년 19월 19일
                                </span>
                            </div>
                        </div>
                        <div className="tag-wrapper">
                            <span>인기 태그</span>
                            <div className="line"/>
                            <ul>
                                <li><a href=""># TypeScript</a></li>
                                <li><a href=""># React</a></li>
                                <li><a href=""># 온라인수업</a></li>
                                <li><a href=""># 시러</a></li>
                            </ul>
                        </div>
                    </div>
                </aside>
            </main>
        </Styled.BlogMain>
    )
}

export default Blog