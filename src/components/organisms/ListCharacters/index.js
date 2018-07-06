import React from 'react'
import Grid from '../../atoms/Grid'
import CharacterItem from '../../molecules/CharacterItem'

const characters = [
  {
    name: 'Homem de Ferro',
    image: 'https://i.pinimg.com/originals/52/08/ac/5208ac301eb3fb378dc6b69a5e94c6ec.jpg',
  },
  {
    name: 'Homem Aranha',
    image: 'https://img.elo7.com.br/product/original/1483425/painel-de-festa-homem-aranha-adesivo-marvel.jpg',
  },
  {
    name: 'Hulk',
    image: 'https://img.elo7.com.br/product/original/1B76B87/painel-hulk-2-00-x-1-00m-artigos-de-festa-infantil.jpg',
  },
  {
    name: 'Homem Formiga',
    image: 'https://www.defatoonline.com.br/wp-content/uploads/2018/07/homem-formiga.jpg?w=800%&h=400',
  },
  {
    name: 'Homem de Ferro',
    image: 'https://i.pinimg.com/originals/52/08/ac/5208ac301eb3fb378dc6b69a5e94c6ec.jpg',
  },
  {
    name: 'Homem Aranha',
    image: 'https://img.elo7.com.br/product/original/1483425/painel-de-festa-homem-aranha-adesivo-marvel.jpg',
  },
  {
    name: 'Hulk',
    image: 'https://img.elo7.com.br/product/original/1B76B87/painel-hulk-2-00-x-1-00m-artigos-de-festa-infantil.jpg',
  },
  {
    name: 'Homem Formiga',
    image: 'https://www.defatoonline.com.br/wp-content/uploads/2018/07/homem-formiga.jpg?w=800%&h=400',
  },
  {
    name: 'Homem de Ferro',
    image: 'https://i.pinimg.com/originals/52/08/ac/5208ac301eb3fb378dc6b69a5e94c6ec.jpg',
  },
  {
    name: 'Homem Aranha',
    image: 'https://img.elo7.com.br/product/original/1483425/painel-de-festa-homem-aranha-adesivo-marvel.jpg',
  },
  {
    name: 'Hulk',
    image: 'https://img.elo7.com.br/product/original/1B76B87/painel-hulk-2-00-x-1-00m-artigos-de-festa-infantil.jpg',
  },
  {
    name: 'Homem Formiga',
    image: 'https://www.defatoonline.com.br/wp-content/uploads/2018/07/homem-formiga.jpg?w=800%&h=400',
  },
  {
    name: 'Homem de Ferro',
    image: 'https://i.pinimg.com/originals/52/08/ac/5208ac301eb3fb378dc6b69a5e94c6ec.jpg',
  },
  {
    name: 'Homem Aranha',
    image: 'https://img.elo7.com.br/product/original/1483425/painel-de-festa-homem-aranha-adesivo-marvel.jpg',
  },
  {
    name: 'Hulk',
    image: 'https://img.elo7.com.br/product/original/1B76B87/painel-hulk-2-00-x-1-00m-artigos-de-festa-infantil.jpg',
  },
  {
    name: 'Homem Formiga',
    image: 'https://www.defatoonline.com.br/wp-content/uploads/2018/07/homem-formiga.jpg?w=800%&h=400',
  },
  {
    name: 'Homem de Ferro',
    image: 'https://i.pinimg.com/originals/52/08/ac/5208ac301eb3fb378dc6b69a5e94c6ec.jpg',
  },
  {
    name: 'Homem Aranha',
    image: 'https://img.elo7.com.br/product/original/1483425/painel-de-festa-homem-aranha-adesivo-marvel.jpg',
  },
  {
    name: 'Hulk',
    image: 'https://img.elo7.com.br/product/original/1B76B87/painel-hulk-2-00-x-1-00m-artigos-de-festa-infantil.jpg',
  },
  {
    name: 'Homem Formiga',
    image: 'https://www.defatoonline.com.br/wp-content/uploads/2018/07/homem-formiga.jpg?w=800%&h=400',
  },
  {
    name: 'Homem de Ferro',
    image: 'https://i.pinimg.com/originals/52/08/ac/5208ac301eb3fb378dc6b69a5e94c6ec.jpg',
  },
  {
    name: 'Homem Aranha',
    image: 'https://img.elo7.com.br/product/original/1483425/painel-de-festa-homem-aranha-adesivo-marvel.jpg',
  },
  {
    name: 'Hulk',
    image: 'https://img.elo7.com.br/product/original/1B76B87/painel-hulk-2-00-x-1-00m-artigos-de-festa-infantil.jpg',
  },
  {
    name: 'Homem Formiga',
    image: 'https://www.defatoonline.com.br/wp-content/uploads/2018/07/homem-formiga.jpg?w=800%&h=400',
  },
  {
    name: 'Homem de Ferro',
    image: 'https://i.pinimg.com/originals/52/08/ac/5208ac301eb3fb378dc6b69a5e94c6ec.jpg',
  },
  {
    name: 'Homem Aranha',
    image: 'https://img.elo7.com.br/product/original/1483425/painel-de-festa-homem-aranha-adesivo-marvel.jpg',
  },
  {
    name: 'Hulk',
    image: 'https://img.elo7.com.br/product/original/1B76B87/painel-hulk-2-00-x-1-00m-artigos-de-festa-infantil.jpg',
  },
  {
    name: 'Homem Formiga',
    image: 'https://www.defatoonline.com.br/wp-content/uploads/2018/07/homem-formiga.jpg?w=800%&h=400',
  },
  {
    name: 'Homem de Ferro',
    image: 'https://i.pinimg.com/originals/52/08/ac/5208ac301eb3fb378dc6b69a5e94c6ec.jpg',
  },
  {
    name: 'Homem Aranha',
    image: 'https://img.elo7.com.br/product/original/1483425/painel-de-festa-homem-aranha-adesivo-marvel.jpg',
  },
  {
    name: 'Hulk',
    image: 'https://img.elo7.com.br/product/original/1B76B87/painel-hulk-2-00-x-1-00m-artigos-de-festa-infantil.jpg',
  },
  {
    name: 'Homem Formiga',
    image: 'https://www.defatoonline.com.br/wp-content/uploads/2018/07/homem-formiga.jpg?w=800%&h=400',
  },
]
characters.sort(() => 0.5 - Math.random())
const ListCharacters = () => (
  <Grid>
    {
      characters.map((character, index) => (
        <CharacterItem name={character.name} image={character.image} id={index} />
      ))
    }
  </Grid>
)

export default ListCharacters
