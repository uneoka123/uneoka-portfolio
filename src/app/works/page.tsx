import { Card } from '@/components/card/card';
import { VideoCard } from '@/components/videocard/videocard';
import styles from './styles.module.scss';

const Works = () => {
  return (
    <section className={styles.works}>
      <div className={styles.container}>
        <h1 className={styles.title}>Archive</h1>

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
          <li>
            <Card
              img="/img/works/2-4.png"
              title="ポータルサイト"
              description="このプラットフォームは、ホテル、フライト、アクティビティの予約オプションを提供し、旅行計画のための包括的なリソースになります。"
              href="https://www.tripadvisor.com/"
              githubUrl=""
              topics={['react', 'tailwindcss', 'node', 'mongoDb', ]}
            />
          </li>
          <li>
            <Card
              img="/img/works/mogo.jpg"
              title="Mogo"
              description="Creative landing page template."
              href="https://nailheart.github.io/Mogo/"
              githubUrl="https://github.com/Nailheart/Mogo"
              topics={['simple-bar', 'sass', 'gulp', 'google-maps']}
            />
          </li>
          <li>
            <Card
              img="/img/works/safari.jpg"
              title="サファリ"
              description="静的なマルチページストア。"
              href="https://nailheart.github.io/Safari/"
              githubUrl="https://github.com/Nailheart/Safari"
              topics={['jinja', 'gulp', 'sass']}
            />
          </li>
          <li>
            <Card
              img="/img/works/cat-energy.jpg"
              title="Cat Energy"
              description="Online food store for cats."
              href="https://nailheart.github.io/377731-cat-energy-21/"
              githubUrl="https://github.com/Nailheart/377731-cat-energy-21"
              topics={['html', 'less', 'google-maps']}
            />
          </li>
          <li>
            <Card
              img="/img/works/technomart.jpg"
              title="Technomart"
              description="Store of building materials and repair tools."
              href="https://nailheart.github.io/377731-technomart-29/"
              githubUrl="https://github.com/Nailheart/377731-technomart-29"
              topics={['html', 'css']}
            />
          </li>
          <li>
            <Card
              img="/img/works/todo.jpg"
              title="Todo"
              description="Simple to do list with save on localStorage."
              href="https://nailheart.github.io/Todo/"
              githubUrl="https://github.com/Nailheart/Todo"
              topics={['js', 'sass']}
            />
          </li>
          <li>
            <Card
              img="/img/works/sol-conveter.jpg"
              title="Sol conveter"
              description="Convert sols (Martian solar day) to day (Earth solar day)."
              href="https://nailheart.github.io/sol-converter/"
              githubUrl="https://github.com/Nailheart/sol-converter"
              topics={['html', 'js', 'sass']}
            />
          </li>

          <li>
            <Card
              img="/img/works/memory-game.jpg"
              title="Memory game"
              description="Responsive memory game."
              href="https://nailheart.github.io/memory-game/"
              githubUrl="https://github.com/Nailheart/memory-game"
              topics={['html', 'js', 'sass']}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Works;
