import styled from 'styled-components';
import decodeHtml from 'decode-html';
import ReactPlayer from 'react-player';
import ProgressiveImage from 'react-progressive-image';
import variables from '../../styles/variables.js';

const videoPlayerStyle = {
  marginTop: variables.spacing / 2,
  maxWidth: variables.mediaPreviewMaxWidth
};

const ImagePreview = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  margin-top: ${props => props.theme.spacing / 2}px;
  opacity: ${props => (props.loading ? 0.5 : 1)};
  transition: opacity 0.4444s ease-in-out;
  height: ${props => props.theme.mediaPreviewMaxHeight}px;
  max-width: ${props => props.theme.mediaPreviewMaxWidth}px;
  width: 100%;
`;

export default ({
  postHint,
  preview,
  isSelf,
  selfText,
  title,
  thumbnail,
  url
}) => {
  switch (postHint) {
    case 'rich:video':
      if (url) {
        return (
          <ReactPlayer
            height={variables.mediaPreviewMaxHeight}
            style={videoPlayerStyle}
            url={url}
            width="100%"
          />
        );
      } else return null;
      break;
    case 'image':
      if (preview.enabled === true) {
        const { images } = preview;
        if (images.length === 1) {
          return (
            <ProgressiveImage preview={thumbnail} src={url}>
              {(src, loading) => (
                <ImagePreview
                  loading={loading}
                  style={{ backgroundImage: `url(${src})` }}
                />
              )}
            </ProgressiveImage>
          );
        }
      } else return null;
    default:
      return null;
      break;
  }
};
