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
                    <div className="notice-wrapper">
                        <span>
                            hello
                        </span>
                        <ul>
                            <li>공지 1</li>
                            <li>공지 2</li>
                            <li>온라인 수업 시러욧</li>
                        </ul>
                    </div>
                    <div className="tag-wrapper">

                    </div>
                </aside>
            </main>
        </Styled.BlogMain>
    )
}

export default Blog