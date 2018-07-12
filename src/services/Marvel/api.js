import { create } from 'apisauce'
import md5 from 'blueimp-md5'

const publicKey = 'fba222cafbdc409f768cb548e344e409'
const privateKey = 'f4383981871bf44e1c0c9b1725b45c2393294ebf'
const URL = '//gateway.marvel.com/v1'
// export const image = imageUrl => generateUrl(imageUrl.replace('http://', 'https://'))

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

export default api
