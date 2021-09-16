import Link from 'next/link'
import { FunctionComponent } from 'react'
import { ArticleMeta } from '../interfaces/article'
import styles from '../styles/card.module.css'
import {motion} from 'framer-motion'

interface IProps {
  article: ArticleMeta
}

const Card: FunctionComponent<IProps> = ({ article }) => {
  return (
    <Link href={`/article/${article.slug}`}>
      <div className={styles.card}>
        <motion.img layoutId='image' src={article.thumbnail} />
        <div className={styles.info}>
          <motion.h1 layoutId='title'>{article.title}</motion.h1>
          <p>{article.description}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card
