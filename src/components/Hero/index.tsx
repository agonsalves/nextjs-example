import { Title } from '@/styles/global';
import ArrowButton from '../ArrowButton';

import * as S from './styles';
import { HeroProps } from './types';

import {
  FaEnvelopeOpen,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUserAlt,
} from 'react-icons/fa';
import { theme } from '@/styles/themes/main';
import { vCardApi } from '@/services/vCardApi';
import FileDownload from 'js-file-download';
import ArchiveSearchToggle from '../ArchiveSearchToggle';

const Hero = ({
  title,
  description,
  hasButton = false,
  buttonText,
  buttonDirection,
  backgroundImg,
  post_type,
  isErrorPage,
  email,
  alternatePhone1,
  alternatePhone1Label,
  position,
  officeLocation,
  firmName,
  slug,
  siteUrl,
  archivePostType,
  dataList
}: HeroProps) => {
  const titleAnimation = {
    y: [24, 0],
    opacity: [0, 1],
  };
  const handleVCardDownload = async () => {
    vCardApi
      .post('/', {
        title,
        position,
        officeLocation,
        email,
        firmName,
        slug,
        siteUrl,
      })
      .then(response => {
        FileDownload(response.data, `${title}.vcf`);
      });
  };

  //refact to use page_type instead post_type from the API
  if (post_type === 'person') {
    return (
      <S.Wrapper
        isErrorPage={isErrorPage}
        backgroundImg={backgroundImg}
        isPerson
      >
        <S.Container>
          <S.Content isErrorPage={isErrorPage} isPerson>
            <S.InfoWrapper>
              <Title
                type={post_type}
                animate={titleAnimation}
                transition={{ duration: 1 }}
              >
                {title}
              </Title>
              {position && (
                <S.PositionWrapper>
                  <S.PositionText>{position[0].term}</S.PositionText>
                  <FaUserAlt
                    size={18}
                    onClick={() => handleVCardDownload()}
                    color={theme.colors.blue}
                  />
                </S.PositionWrapper>
              )}
              {email && (
                <S.PersonAttributeWrapper>
                  <S.PersonAttributeIcon>
                    <FaEnvelopeOpen size={16} color={theme.colors.yellow} />
                  </S.PersonAttributeIcon>
                  <S.PersonAttributeText href={`mailto:${email}`} isEmail>
                    {email}
                  </S.PersonAttributeText>
                </S.PersonAttributeWrapper>
              )}
              {officeLocation && (
                <S.PersonAttributeWrapper>
                  <S.PersonAttributeIcon>
                    <FaMapMarkerAlt size={16} color={theme.colors.yellow} />
                  </S.PersonAttributeIcon>
                  <S.PersonAttributeText
                    href={`tel:${officeLocation[0].office_phone}`}
                  >
                    {officeLocation[0].post_title} -{' '}
                    {officeLocation[0].office_phone}
                  </S.PersonAttributeText>
                </S.PersonAttributeWrapper>
              )}
              {alternatePhone1 && alternatePhone1Label && (
                <S.PersonAttributeWrapper>
                  <S.PersonAttributeIcon>
                    <FaPhoneAlt size={16} color={theme.colors.yellow} />
                  </S.PersonAttributeIcon>
                  <S.PersonAttributeText href={`tel:${alternatePhone1}`}>
                    {alternatePhone1Label} - {alternatePhone1}
                  </S.PersonAttributeText>
                </S.PersonAttributeWrapper>
              )}
            </S.InfoWrapper>
          </S.Content>
        </S.Container>
      </S.Wrapper>
    );
  }

  if (post_type === 'page') {
    return (
      <S.Wrapper isErrorPage={isErrorPage} backgroundImg={backgroundImg}>
        <S.Container>
          <S.Content isErrorPage={isErrorPage}>
            <Title
              type={post_type}
              animate={titleAnimation}
              transition={{ duration: 1 }}
            >
              {title}
            </Title>
            <ArchiveSearchToggle 
              postType={title}
              pageType={post_type}
              archivePostType={archivePostType}
              dataList={dataList}
              slug={slug}
            />
            {description && (
              <S.Description>
                <p>{description}</p>
  
              </S.Description>
            )}
          </S.Content>
        </S.Container>
      </S.Wrapper>
    );
  }

  return (
    <S.Wrapper isErrorPage={isErrorPage} backgroundImg={backgroundImg}>
      <S.Container>
        <S.Content isErrorPage={isErrorPage}>
          <Title
            type={post_type}
            animate={titleAnimation}
            transition={{ duration: 1 }}
          >
            {title}
          </Title>
          {description && (
            <S.Description>
              <p>{description}</p>
              {hasButton && (
                <ArrowButton
                  onClick={() => {}}
                  size={24}
                  direction={buttonDirection}
                  text={buttonText}
                />
              )}
            </S.Description>
          )}
        </S.Content>
      </S.Container>
    </S.Wrapper>
  );
};

export default Hero;
