import React, { useState } from 'react';
import * as Styled from './Styled';
import { Header, Card } from '../../components';
import { Link } from 'react-router-dom';

type Card = {
    imgSrc: string;
    title: string;
    subTitle: string;
    date: string;
    writer: string;
    link: string;
}

type Notice = {
    title: string;
    date: string;
    link: string;
}

type Tag = {
    tag: string;
    link: string;
}

const Blog: React.FC = () => {
    const [cardInfo, setCardInfo] = useState<Card[]>([
        {
            imgSrc: "https://img.freepik.com/free-vector/abstract-galaxy-background_1199-247.jpg?size=626&ext=jpg",
            title: "✏️ 안녕하세요",
            subTitle: "안녕 안녕 나는 지수야 헬륨가스 마셨더니 요롷게 됬지",
            date: "2020년 5월 17일",
            writer: "by 유재민",
            link: "",
        }, {
            imgSrc: "https://img.freepik.com/free-vector/abstract-galaxy-background_1199-247.jpg?size=626&ext=jpg",
            title: "✏️ 안녕하세요",
            subTitle: "안녕 안녕 나는 지수야 헬륨가스 마셨더니 요롷게 됬지",
            date: "2020년 5월 17일",
            writer: "by 유재민",
            link: "",
        }, {
            imgSrc: "https://img.freepik.com/free-vector/abstract-galaxy-background_1199-247.jpg?size=626&ext=jpg",
            title: "✏️ 안녕하세요",
            subTitle: "안녕 안녕 나는 지수야 헬륨가스 마셨더니 요롷게 됬지",
            date: "2020년 5월 17일",
            writer: "by 유재민",
            link: "",
        }, {
            imgSrc: "https://img.freepik.com/free-vector/abstract-galaxy-background_1199-247.jpg?size=626&ext=jpg",
            title: "✏️ 안녕하세요",
            subTitle: "안녕 안녕 나는 지수야 헬륨가스 마셨더니 요롷게 됬지",
            date: "2020년 5월 17일",
            writer: "by 유재민",
            link: "",
        }, 
        {
            imgSrc: "https://img.freepik.com/free-vector/abstract-galaxy-background_1199-247.jpg?size=626&ext=jpg",
            title: "✏️ 안녕하세요",
            subTitle: "안녕 안녕 나는 지수야 헬륨가스 마셨더니 요롷게 됬지",
            date: "2020년 5월 17일",
            writer: "by 유재민",
            link: "",
        }, 
    ])

    const [notice, setNotice] = useState<Notice[]>([
        {
            title: "LC가 일주일안에 만들어지지 못한 변명을 대기 위한 공지사항",
            date: "2019년 19월 19일",
            link: ""
        },
        {
            title: "Online class annoys me",
            date: "2019년 19월 19일",
            link: ""
        },
        {
            title: "아 치킨 먹고 싶다",
            date: "2019년 19월 20일",
            link: ""
        }
    ])

    const [tag, setTag] = useState<Tag[]>([
        {
            tag: "TypeScript",
            link: ""
        },
        {
            tag: "Python",
            link: ""
        },
        {
            tag: "온라인 개학",
            link: ""
        },
        {
            tag: "AWS",
            link: ""
        },
        {
            tag: "ElasticSearch",
            link: ""
        },
        {
            tag: "Kafka",
            link: ""
        }
    ])

    return (
        <Styled.BlogMain>
            <Header />
            <main>
                <div className="post-wrapper">
                    {cardInfo.map((card: Card, i: number) => {
                        return (
                            <div>
                                <Card
                                    imgSrc={card.imgSrc}
                                    title={card.title}
                                    subTitle={card.subTitle}
                                    date={card.date}
                                    writer={card.writer}
                                    link={card.link}
                                />
                            </div>
                        )
                    })}
                </div>
                <aside>
                    <div>
                        <div className="notice-wrapper">
                            <span>
                                공지사항
                            </span>
                            <div className="line"/>
                            {notice.map((notice: Notice, i: number) => {
                                return (
                                    <div className="notice">
                                        <Link to={notice.link}>
                                            {notice.title}
                                        </Link>
                                        <span>
                                            {notice.date}
                                        </span>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="tag-wrapper">
                            <span>인기 태그</span>
                            <div className="line"/>
                            <ul>
                            {tag.map((tag: Tag, i: number) => {
                                return (
                                    <li><Link to={tag.link}># {tag.tag}</Link></li>
                                )
                            })}
                            </ul>
                        </div>
                    </div>
                </aside>
            </main>
        </Styled.BlogMain>
    )
}

export default Blog