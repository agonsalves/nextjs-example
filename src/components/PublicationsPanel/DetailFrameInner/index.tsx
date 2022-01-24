import React                           from 'react'
import Div                  from 'Shared/Div'
import Img                        from 'Shared/Img'
import Span                       from 'Shared/Span'
import MotionDiv                  from 'Shared/MotionDiv'
import {
    detailFrameContentWrapperStyle
}                                 from '../styles'
import {
    archiveDetailBottomStyle,
    archiveDetailContentWrapperStyle,
    archiveDetailTitleStyle,
    archiveDetailTopStyle,
    archiveDetailTypeStyle,
    detailFrameBottomStyle,
    detailFrameInnerStyle,
    detailFrameTopStyle,
    detailMobileTopImageStyle,
    detailSidebarImagePlaceholderStyle,
    detailSidebarImageStyle,
    detailSideBarWrapperStyle,
    micrositeDetailContentWrapperStyle,
    archiveDetailBlogPostBylineStyle
}                                 from './styles'
import AsideContent from '@/components/AsideContent'
import RichText from '@/Shared/RichText'

const DetailFrameInner = ({post, direction}) => {
    const detailFrameContentVariants = {
        enter: (direction: number) => {
            return {
              x: direction > 0 ? 1000 : -1000,
              opacity: 0
            };
          },
          center: {
            zIndex: 1,
            x: 0,
            opacity: 1
          },
          exit: (direction: number) => {
            return {
              zIndex: 0,
              x: direction < 0 ? 1000 : -1000,
              opacity: 0
            };
          }
    }

    return (
        <MotionDiv
            key={post}
            initial="enter"
            animate="center"
            exit="exit"
            variants={detailFrameContentVariants}
            themes={detailFrameInnerStyle(direction.init)}
            transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
            }}
        >
            <Div themes={detailFrameContentWrapperStyle}>
                <Div
                    themes={{...archiveDetailTopStyle(!!post?.thumbnail_teaser), ...detailFrameTopStyle}}>
                    {post?.publication_type && (
                        <Div themes={archiveDetailTypeStyle}>
                            {post?.publication_type[0].term}
                        </Div>
                    )}
                    {post?.news_item_type && (
                        <Div themes={archiveDetailTypeStyle}>
                            {post?.news_item_type[0].term}
                        </Div>
                    )}
                    <Div themes={archiveDetailTitleStyle(post)}>
                        {post?.post_title}
                    </Div>
                    {post?.byline && (
                        <Span themes={
                            archiveDetailBlogPostBylineStyle.name
                        }>
                            {post?.byline}
                        </Span>
                    )}
                    {((post?.thumbnail_teaser && true) && (
                        <Img
                            themes={detailMobileTopImageStyle}
                            image={post?.thumbnail_teaser}
                        />
                    ))}
                </Div>
                <Div themes={{...archiveDetailBottomStyle, ...detailFrameBottomStyle}}>
                    <Div themes={{...archiveDetailContentWrapperStyle, ...micrositeDetailContentWrapperStyle}}>
                        <RichText>{post?.full_content}</RichText>
                    </Div>
                </Div>
            </Div>
            {true && (
                <Div className="microsite-detail-sidebar" themes={detailSideBarWrapperStyle}>
                    {(post?.photo && (
                        <Img
                            themes={detailSidebarImageStyle}
                            image={post?.photo}
                        />
                    )) || (
                        <Div themes={detailSidebarImagePlaceholderStyle}/>
                    )}
                    <AsideContent widgets={post?.widgets} practice_area={post?.practice_area} people={post?.people}/>
                </Div>
            )}
        </MotionDiv>
    )
}

export default DetailFrameInner
