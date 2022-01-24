import * as S from './styles';
import { useRouter } from 'next/router';

function NavigationMenu() {
  const router = useRouter();
  const { subSlug } = router.query;
  return (
    <S.Wrapper>
      <S.Menu>
        <S.ItemMenu isActive={!subSlug}>
          <S.ItemMenuLink href="/about-the-firm">Overview</S.ItemMenuLink>
        </S.ItemMenu>
        <S.ItemMenu isActive={subSlug === 'leadership'}>
          <S.ItemMenuLink href="/about-the-firm/leadership">
            Leadership
          </S.ItemMenuLink>
        </S.ItemMenu>
        <S.ItemMenu isActive={subSlug === 'community'}>
          <S.ItemMenuLink href="/about-the-firm/community">
            Community
          </S.ItemMenuLink>
        </S.ItemMenu>
        <S.ItemMenu isActive={subSlug === 'diversity'}>
          <S.ItemMenuLink href="/about-the-firm/diversity">
            Diversity
          </S.ItemMenuLink>
        </S.ItemMenu>
        <S.ItemMenu isActive={subSlug === 'accolades'}>
          <S.ItemMenuLink href="/about-the-firm/accolades">
            Accolades
          </S.ItemMenuLink>
        </S.ItemMenu>
      </S.Menu>
    </S.Wrapper>
  );
}

export default NavigationMenu;
