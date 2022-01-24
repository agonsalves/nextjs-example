import * as React from 'react';
import redirect from 'nextjs-redirect';
import {
  FaTwitter as TwitterIcon,
  FaLinkedinIn as LinkedinIcon,
  FaFacebookF as FacebookIcon,
} from 'react-icons/fa';
import { MdMail as MailIcon } from 'react-icons/md';

import * as S from './styles';

export interface SocialSharingProps {
  url: string;
  postTitle: string;
}

const SocialSharing: React.FC<SocialSharingProps> = ({ url, postTitle }) => {
  const handleNavigate = React.useCallback(() => {
    redirect(url);
  }, [url]);

  return (
    <S.Wrapper>
      <S.SocialButton onClick={handleNavigate}>
        <LinkedinIcon />
      </S.SocialButton>
      <S.SocialButton onClick={handleNavigate}>
        <TwitterIcon />
      </S.SocialButton>
      <S.SocialButton onClick={handleNavigate}>
        <FacebookIcon />
      </S.SocialButton>
      <S.SocialButton>
        <a href="mailto:" data-subject={postTitle}>
          <MailIcon />
        </a>
      </S.SocialButton>
    </S.Wrapper>
  );
};

export default SocialSharing;
