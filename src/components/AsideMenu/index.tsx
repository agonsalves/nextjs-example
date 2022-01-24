import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsArrowRight } from 'react-icons/bs';
import { useTheme } from 'styled-components';
import * as S from './styles';

interface AsideItem {
  id: string;
  post_title: string;
  post_name: string;
}

export interface AsideMenuProps {
  activeId: number;
  setActiveId: (activeId: number) => void;
  items: AsideItem[];
  slug: string;
  isHidden?: boolean;
}

function AsideMenu({
  activeId,
  setActiveId,
  items,
  slug,
  isHidden = false,
}: AsideMenuProps) {
  const { colors } = useTheme();

  if (isHidden) return null;

  return (
    <S.Wrapper>
      {!!items &&
        items.map(({ id, post_title, post_name }: AsideItem) => (
          <Link key={id} href={`/${slug}#${post_name}`} passHref>
            <S.Container
              active={activeId === parseInt(id)}
              onClick={() => setActiveId(parseInt(id))}
            >
              <span>{post_title}</span>
              {activeId === parseInt(id) && (
                <BsArrowRight color={colors.white} size={24} />
              )}
            </S.Container>
          </Link>
        ))}
    </S.Wrapper>
  );
}

export default AsideMenu;
