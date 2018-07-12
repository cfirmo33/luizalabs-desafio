import axios from 'axios'

const publicKey = 'fba222cafbdc409f768cb548e344e409'
const privateKey = 'f4383981871bf44e1c0c9b1725b45c2393294ebf'
const URL = '//gateway.marvel.com'

const generateUrl = (url) => {
  const ts = 1
  const hash = md5(ts + privateKey + publicKey)
  return addParam(url, {
    ts,
    hash,
    apikey: publicKey,
  })
}

const api = uri => generateUrl(`${URL}/v1${uri}`)

export const getCharacterList = () => axios.get(api('/public/characters'))

export const image = imageUrl => generateUrl(imageUrl.replace('http://', 'https://'))

