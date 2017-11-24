import styled from 'styled-components';
import { Col, Row } from 'react-flexa';
import Link from 'next/link';

import MediaPreview from '../post/MediaPreview.js';

const PostContainer = styled(Row)`
  margin-bottom: ${props => props.theme.spacing * 3}px;
  margin-top: ${props => props.theme.spacing}px;
`;

const Links = styled.a`
  color: ${props => props.theme.secondaryColor};
  cursor: pointer;
  font-size: 0.8em;
`;

const PostTitle = styled.h1`
  color: ${props => props.theme.headingColor};
  display: inline;
  font-size: 1.1em;
`;

const PostMeta = styled.div`
  font-size: 0.8em;
  margin: ${props => props.theme.spacing / 2}px 0px;
`;

const Post = ({
  author,
  commentsCount = 0,
  domain,
  media,
  permalink,
  postHint,
  preview,
  isSelf,
  selfText,
  subreddit,
  title,
  thumbnail,
  url
}) => (
  <PostContainer>
    <Col xs={12} sm={10}>
      <PostTitle>{title} </PostTitle>
      <Link href={`/domain/${domain}`}>
        <Links>{domain}</Links>
      </Link>
      <PostMeta>
        by {author} ∙ date in{' '}
        <Link href={`/${subreddit}`}>
          <Links>{subreddit}</Links>
        </Link>
      </PostMeta>
      <MediaPreview
        media={media}
        postHint={postHint}
        preview={preview}
        isSelf={isSelf}
        selfText={selfText}
        title={title}
        thumbnail={thumbnail}
        url={url}
      />
      <PostMeta>
        <Link href={`${permalink}`}>
          <Links>
            <b>{commentsCount} comments</b>
          </Links>
        </Link>
      </PostMeta>
    </Col>
  </PostContainer>
);
export default ({ listing }) =>
  listing.children.map(({ data }) => {
    //console.log(data, data.post_hint);
    return (
      <Post
        author={data.author}
        commentsCount={data.num_comments}
        createdAt={data.created}
        domain={data.domain}
        isSelf={data.is_self}
        key={data.id}
        permalink={data.permalink}
        postHint={data.post_hint}
        media={data.secure_media_embed}
        preview={data.preview}
        selfText={data.selftext}
        subreddit={data.subreddit_name_prefixed}
        title={data.title}
        thumbnail={data.thumbnail}
        url={data.url}
      />
    );
  });
