import { create } from 'apisauce'
import md5 from 'blueimp-md5'
import addParam from 'append-query'

const publicKey = 'bf2f1b6273accb01a1454acda038a5b3'
const privateKey = '5819bf0eb85a64156cd5bffa548e1bcaadf891c0'
const URL = '//gateway.marvel.com/v1'

const createAPI = () => {
  const ts = 1
  const hash = md5(ts + privateKey + publicKey)
  return create({
    baseURL: URL,
    params: {
      ts,
      hash,
      apikey: publicKey,
    },
  })
}
const api = createAPI()

const generateUrl = (url) => {
  const ts = 1
  const hash = md5(ts + privateKey + publicKey)
  return addParam(url, {
    ts,
    hash,
    apikey: publicKey,
  })
}
export const image = imageUrl => generateUrl(imageUrl.replace('http://', 'https://'))

export default api
