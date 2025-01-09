import { FooterSocialProps } from './social.types'
import styles from './social.module.scss'

const Social: React.FC<FooterSocialProps> = ({ items }) => (
  <ul className={styles.root}>
    {items.map(({ href, label }) => (
      <li className={styles.item} key={label}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="link link--underline"
        >
          {label}
        </a>
      </li>
    ))}
  </ul>
)

export default Social
