import Link from 'next/link';
import { Italiana } from 'next/font/google';
import styles from './header.module.css';
import SearchButton from '@/components/searchButton';
import MenuButton from '@/components/menuButton';

const italiana = Italiana({ weight: '400', subsets: ['latin'] });

const Header = () => {
  return (
    <header>
      <nav className={styles.container}>
        <Link href="#">LANÇAMENTOS</Link>
        <Link href="#">CATEGORIAS</Link>

        <Link href="/" className={italiana.className}>
          RateFlix
        </Link>

        <Link href="#">POPULARES</Link>
        <Link href="#">RESENHAS</Link>
        <SearchButton />
        <MenuButton />
      </nav>
    </header>
  );
};

export default Header;
