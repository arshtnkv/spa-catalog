import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios)

mock.onGet('/api/products').reply(200, [
  {
    id: 1,
    name: 'Смартфон',
    price: 299.99,
    description: 'Современный смартфон с отличной камерой.',
    image: 'https://placehold.jp/200x200.png',
    category: 'Электроника',
  },
  {
    id: 2,
    name: 'Футболка',
    price: 19.99,
    description: 'Удобная футболка из хлопка.',
    image: 'https://placehold.jp/200x200.png',
    category: 'Одежда',
  },
  {
    id: 3,
    name: 'Смартфон',
    price: 299.99,
    description: 'Современный смартфон с отличной камерой.',
    image: 'https://placehold.jp/200x200.png',
    category: 'Электроника',
  },
  {
    id: 4,
    name: 'Футболка',
    price: 19.99,
    description: 'Удобная футболка из хлопка.',
    image: 'https://placehold.jp/200x200.png',
    category: 'Одежда',
  },
  {
    id: 5,
    name: 'Смартфон',
    price: 299.99,
    description: 'Современный смартфон с отличной камерой.',
    image: 'https://placehold.jp/200x200.png',
    category: 'Электроника',
  },
  {
    id: 6,
    name: 'Футболка',
    price: 19.99,
    description: 'Удобная футболка из хлопка.',
    image: 'https://placehold.jp/200x200.png',
    category: 'Одежда',
  },
])

mock.onGet('/api/banners').reply(200, [
  {
    id: 1,
    name: 'banner1',
    image: 'https://placehold.jp/300x400.png',
    link: 'https://example.com/promotion1',
  },
  {
    id: 2,
    name: 'banner2',
    image: 'https://placehold.jp/300x400.png',
    link: 'https://example.com/promotion2',
  },
])

export default mock
