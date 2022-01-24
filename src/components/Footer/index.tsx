import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FooterProps } from './types';

import * as S from './styles';

function Footer({ locations, social_urls }: FooterProps) {
  const { linkedin, facebook, twitter } = social_urls;

  return (
    <S.Container>
      <S.Copyright>
        <span>© 2021 Great Jakes Marketing Company.</span>
        <span>All Rights Reserved.</span>
      </S.Copyright>
      <S.Links>
        <S.Internal>
          {locations.map(({ title, db_id, url }) => (
            <Link key={db_id} href={url}>
              {title}
            </Link>
          ))}
        </S.Internal>
        <S.External>
          <a href={linkedin} target="_blank" rel="noopener">
            <FaLinkedinIn />
          </a>
          <S.Bar />
          <a href={facebook} target="_blank" rel="noopener">
            <FaFacebookF />
          </a>
          <S.Bar />
          <a href={twitter} target="_blank" rel="noopener">
            <FaTwitter />
          </a>
        </S.External>
      </S.Links>
    </S.Container>
  );
}

export default Footer;
