import React from 'react';
import Card from "@/app/components/card/card";
import {posts} from "@/app/mocks/posts";
import styles from "./card-list.module.scss";

function CardList() {


    return (
        <div className={styles.main}>
            {posts.map((post, i) => {
                return <Card key={i} title={post.title} body={post.body}/>
            })}
        </div>
    );
}

export default CardList;