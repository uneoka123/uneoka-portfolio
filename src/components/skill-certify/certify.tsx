import Link from 'next/link';

import styles from './styles.module.scss';

const Certify = () => {
  return (
    <section id="certifies" className={styles.certify}>
      <h2 className={styles.title}>
        スキル認証
      </h2>
      <ul className={styles.list}>
        <li>
          <img
            src="/img/certify/JavascriptCertify.png"
            width={550}
            height={320}
          />
        </li>
        <li>
          <img
            src="/img/certify/pythonCertify.png"
            width={550}
            height={320}
          />
        </li>
        <li>
          <img
            src="/img/certify/sqlCertify.png"
            width={550}
            height={320}
          />
        </li>
      </ul>
      <Link className={styles.btn} href="/certify">
        もっと見る
      </Link>
    </section>
  )
}

export { Certify };