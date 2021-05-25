import Head from 'next/head';
import Image from 'next/image';
import { Navbar } from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className='page-container'>
      <Navbar />
      <div className={styles.main}>
        <h1>Welcome to CBN</h1>
        <h2>Craft Beer News</h2>
      </div>
    </div>
  );
}
