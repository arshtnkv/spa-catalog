import { Helmet } from 'react-helmet-async'
import useProduct from '../../shared/hooks/useProduct'
import styles from './product.module.scss'
import { Button } from '@/ui'
import { useSelector } from 'react-redux'
import { RootState } from '@/shared/store'
import { useCartActions } from '@/shared/hooks/useCartActions'
import { Breadcrumbs, Quantifier } from '@/components'

const ProductPage: React.FC = () => {
  const product = useProduct()
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const { addItem, removeItem } = useCartActions()

  if (!product) {
    return <div>Товар не найден</div>
  }

  const cartItem = cartItems.find((item) => item.id === product.id)

  return (
    <>
      <Helmet>
        <title>{product.name}</title>
      </Helmet>
      <div className={styles.root}>
        <Breadcrumbs />
        <div className={styles.wrapper}>
          <div className={styles.images}>
            <img
              src={product.image}
              width="500"
              height="700"
              alt={product.name}
            />
            <div className={styles.thumbnail}>
              <img
                src={product.image}
                width="500"
                height="700"
                alt={product.name}
              />
              <img
                src={product.image}
                width="500"
                height="700"
                alt={product.name}
              />
            </div>
          </div>
          <div className={styles.detail}>
            <h1 className={styles.title}>{product.name}</h1>
            <p className={styles.art}>
              ART: Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className={styles.price}>${product.price}</p>
            <p className={styles.paymentInfo}>
              Кредит, рассрочка от <a href="link link--underline">Sber</a>
            </p>
            <div className={styles.options}>
              <p>Варианты:</p>
              <div className={styles.options_buttons}>
                <Button size="sm" className="active">
                  Вариант 1
                </Button>
                <Button size="sm" colorScheme="white">
                  Вариант 2
                </Button>
                <Button size="sm" colorScheme="white">
                  Вариант 3
                </Button>
              </div>
            </div>
            <div className={styles.options}>
              <p>Дополнительные опции:</p>
              <div className={styles.options_buttons}>
                <Button size="sm" className="active">
                  Опция 1
                </Button>
                <Button size="sm" colorScheme="white">
                  Опция 2
                </Button>
              </div>
            </div>

            <div className={styles.actions}>
              <Quantifier
                quantity={cartItem ? cartItem.quantity : 0}
                addItem={() => addItem(cartItem || { ...product, quantity: 1 })}
                removeItem={() => cartItem && removeItem(cartItem.id)}
              />
              <Button size="sm" colorScheme="red">
                Купить сейчас
              </Button>
            </div>
            <div className={styles.info}>
              <p>
                <strong>Бесплатная доставка при заказе свыше $50</strong>
              </p>
              <p>
                <strong>24/7 поддержка клиентов: </strong>
                +7 123 456 78 90
              </p>
              <p>
                <strong>Гарантия производителя 1 год</strong>
              </p>
              <p>
                <strong>Доставка: </strong>
                3–5 рабочих дней
              </p>
            </div>
            <p className={styles.description}>
              {product.description}
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam maiores officia quos, iste minima ad veniam nesciunt,
              harum velit blanditiis veritatis autem vitae sequi eveniet
              voluptatem perferendis exercitationem. Quidem quos exercitationem
              deleniti fugiat delectus non quas accusantium distinctio officiis
              asperiores expedita qui, sed ad. Numquam iure neque commodi a
              voluptatibus?
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductPage
