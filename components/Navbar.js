import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';

export const Navbar = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div onClick={() => router.push('/')}>Home</div>
      <div onClick={() => router.push('/news/1')}>News</div>
      <div onClick={() => router.push('/reddit')}>Reddit</div>
      <div onClick={() => (window.location.href = 'https://bit.ly/39ITZ4J')}>
        Profile
      </div>
    </div>
  );
};
