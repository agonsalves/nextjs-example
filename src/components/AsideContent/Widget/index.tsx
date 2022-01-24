import { useState } from 'react';
import { theme } from '@/styles/themes/main';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';
import * as S from './styles';
import { WidgetData } from './types';
import ModalVideo from 'react-modal-video';

export interface WidgetProps {
  widget: WidgetData;
}

function Widget({ widget }: WidgetProps) {
  const { visible, template } = widget;
  const { type } = template;
  const [isOpen, setIsOpen] = useState(false);

  if (!visible) {
    return null;
  }

  switch (type) {
    case 'image':
      const { widget_image, widget_caption } = widget;

      const createCaption = () => ({ __html: widget_caption });

      return (
        <S.Container>
          <S.Banner type={type}>
            <img src={widget_image?.url} alt="Widget" />
            {widget_caption && (
              <div dangerouslySetInnerHTML={createCaption()}></div>
            )}
          </S.Banner>
        </S.Container>
      );

    case 'video':
      const {
        post_title,
        widget_caption: widget_video_caption,
        widget_name,
        widget_show_play,
        widget_video_image,
        widget_video_url,
      } = widget;

      const videoId = widget_video_url.substring(
        widget_video_url.indexOf('=') + 1,
      );

      const createVideoCaption = () => ({ __html: widget_video_caption });

      return (
        <>
          <ModalVideo
            channel="youtube"
            isOpen={isOpen}
            videoId={videoId}
            onClose={() => setIsOpen(false)}
          />
          <S.Container>
            <S.VideoBanner>
              <div className="image-wrapper" onClick={() => setIsOpen(true)}>
                <img src={widget_video_image?.url} alt="Widget"></img>
                <div className="play-icon">
                  <FaPlay size={14} color={theme.colors.gray} />
                </div>
              </div>
              {widget_video_caption && (
                <p dangerouslySetInnerHTML={createVideoCaption()}></p>
              )}
            </S.VideoBanner>
          </S.Container>
        </>
      );

    case 'pullquote':
      const {
        widget_quote: widget_quote_pullquote,
        widget_attribution: widget_attribution_pullquote,
        widget_attribution_title: widget_attribution_title_pullquote,
      } = widget;

      const createPullquote = () => ({ __html: widget_quote_pullquote });

      return (
        <S.Container>
          <S.Banner type={type}>
            {widget_quote_pullquote && (
              <div dangerouslySetInnerHTML={createPullquote()}></div>
            )}
            {widget_attribution_pullquote && (
              <span>{widget_attribution_pullquote}</span>
            )}
            {widget_attribution_title_pullquote && (
              <span>{widget_attribution_title_pullquote}</span>
            )}
          </S.Banner>
        </S.Container>
      );

    case 'pullquote_with_image':
      const {
        widget_pullquote_image,
        widget_quote,
        widget_attribution,
        widget_attribution_title,
      } = widget;
      const { url } = widget_pullquote_image;

      const createQuote = () => ({ __html: widget_quote });

      return (
        <S.Container>
          <S.Banner type={type}>
            <img src={url} alt="Widget" />
            {widget_quote && (
              <div dangerouslySetInnerHTML={createQuote()}></div>
            )}
            {widget_attribution && <span>{widget_attribution}</span>}
            {widget_attribution_title && (
              <span>{widget_attribution_title}</span>
            )}
          </S.Banner>
        </S.Container>
      );

    case 'key_contacts':
      const { widget_key_contacts: contacts, template } = widget;

      return (
        <S.Container>
          <S.Contacts>
            <h4>{template.name}</h4>
            {contacts.map(
              ({ email, id, phone, post_title, slug, thumbnail_teaser }) => {
                const { url } = thumbnail_teaser;

                return (
                  <Link key={id} href={slug}>
                    <S.Card>
                      <img src={url} alt="Contact" />
                      <section>
                        <span>{post_title}</span>
                        <Link href={`tel:${phone}`}>{phone}</Link>
                        <Link href={`mailto:${email}`}>Email</Link>
                      </section>
                    </S.Card>
                  </Link>
                );
              },
            )}
          </S.Contacts>
        </S.Container>
      );

    case 'call_to_action':
      const { widget_link_label, widget_link_url, widget_message } = widget;

      const createMessage = () => ({ __html: widget_message });

      return (
        <S.Container>
          <S.Action>
            <h3>{widget.post_title}</h3>
            <div dangerouslySetInnerHTML={createMessage()}></div>
            <Link href={widget_link_url || '/'}>
              <S.ActionButton>
                {widget_link_label}
                <BsArrowRight size={22} />
              </S.ActionButton>
            </Link>
          </S.Action>
        </S.Container>
      );

    default:
      return null;
  }
}

export default Widget;
