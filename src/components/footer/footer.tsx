import { Wrapper } from '@/ui'
import packageJson from '../../../package.json'
import { FooterSocialItem } from './footer.types'
import Social from './social'
import styles from './footer.module.scss'

const socialList: FooterSocialItem[] = [
  {
    label: 'github',
    href: 'https://github.com/arshtnkv',
  },
  {
    label: 'telegram',
    href: 'https://t.me/arshtnkv/',
  },
]

const Footer: React.FC = () => {
  return (
    <footer>
      <Wrapper className={styles.root}>
        <Social items={socialList} />
        <p>© {packageJson.author} Все права защищены</p>
        <p>v.{packageJson.version}</p>
      </Wrapper>
    </footer>
  )
}

export default Footer
