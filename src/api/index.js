import { get } from './http'

const getSeller = get('/api/seller')
const getGoods = get('/api/goods')

export {
  getSeller,
  getGoods
}
