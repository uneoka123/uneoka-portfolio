import { Intro } from '@/components/intro/intro';
import { About } from '@/components/about/about';
import { Portfolio } from '@/components/portfolio/portfolio';
import { Contacts } from '@/components/contacts/contacts';
import styles from './styles.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <Intro />
      <About />
      <Portfolio />
      <Contacts />
    </div>
  );
};

export default Home;
