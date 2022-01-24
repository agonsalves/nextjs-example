import React from "react";
import AsideContent from "../AsideContent";
import Posts from "../PostsArchiveSearch";
import Tracker from "../Tracker";

interface PublicationsProps {
    hits?: any;
    relatedPosts?: any;
    slug?: any;
    setActiveId?: any;
    widgets?: any;
}

export const Publications = ({hits, relatedPosts, slug, setActiveId, widgets}: PublicationsProps) => {
    if(hits === null){
        return null
    }
    return (
        <>
        {hits ? hits.map((post, index) => {
            const { _id, _source } = post;
            return (
            <Tracker childrenId={_id} key={_id} setActiveId={setActiveId}>
                <Posts
                section={_source}
                template={slug}
                isFirst={!Boolean(index)}
                />
            </Tracker>
            )
        }) : (
        relatedPosts.map((post, index) => {
            const { visible, id } = post;
            if (!visible) {
              return null;
            }
            return (
            <Tracker childrenId={id} key={id} setActiveId={setActiveId}>
                <Posts
                section={post}
                template={slug}
                isFirst={!Boolean(index)}
                />
            </Tracker>
            )
        }))}
        </>
    )
}


