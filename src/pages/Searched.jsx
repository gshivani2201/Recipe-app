import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'

function Searched() {

    const [searchedRecipe, setSearchedRecipe] = useState(([]))

    let params = useParams()

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const recipes = await data.json();
        setSearchedRecipe(recipes.results)
    }

    useEffect (() => {
        getSearched(params.search)
    }, [params.search])

  return (
    <div>
        <Grid>
            {searchedRecipe.map((item) => {
                return (
                    <Card key={item.id}>
                        <img src={item.image} alt="/" />
                        <h4>{item.title}</h4>
                    </Card>
                )
            })}
        </Grid>
    </div>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 2rem;
`

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 1rem;
  }

  h4 {
    text-align: center;
    padding: 0.8rem;
  }
`

export default Searched