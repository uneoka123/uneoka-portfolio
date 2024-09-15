import Link from 'next/link';

import { Card } from '@/components/card/card';
import { VideoCard } from '@/components/videocard/videocard';
import styles from './styles.module.scss';

const Portfolio = () => {
  return (
    <section id="projects" className={styles.portfolio}>
      <h2 className={styles.title}>
        プロジェクト
      </h2>

      <ul className={styles.list}>
        <li>
          <VideoCard
            video='/img/works/1-1.mp4'
            title='不動産'
            description='個人と家族が完備された家具が備わる住宅の一つに素早く定着するのに役立つ家具賃貸サイトを製作しました。'
            href='https://arealhomeaway.com'
            githubUrl=''
            topics={['wordpress', 'mysql', 'figma']}
          />
        </li>
        <li>
          <Card
            img="/img/works/3-1.png"
            title="画像ジェネレーター"
            description="高品質のカスタムイメージジェネレータを製作しました。"
            href="https://youtube-clone-nailheart.vercel.app"
            githubUrl=""
            topics={['nextjs', 'typescript', 'mongoDb', 'tailwindcss']}
          />
        </li>
        <li>
          <Card
            img="/img/works/ad.png"
            title="Amazon広告分析システム"
            description="このシステムのフロントエンドを開発しました。"
            href="https://amazon-ads-system-frontend.onrender.com/ja/dashboard"
            githubUrl=""
            topics={['nextjs', 'prisma', 'typescript', 'tailwindcss']}
          />
        </li>
      </ul>
      <Link className={styles.btn} href="/works">
        もっと見る
      </Link>
    </section>
  );
};

export { Portfolio };
