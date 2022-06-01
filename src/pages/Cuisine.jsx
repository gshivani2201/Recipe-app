import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link, useParams} from 'react-router-dom'

function Cuisine() {

  const [cuisine, setCuisine] = useState([])
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.RECIPE_APP_API_KEY}&cuisine=${name}`)
    const recipes = await data.json();
    setCuisine(recipes.results)
  }

  useEffect(() => {
    getCuisine(params.type)
  }, [params.type])

  return (
    <Grid animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} transition={{duration: 0.5}}>
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={'/recipe/'+item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        )
      })}
    </Grid>
  )
}

const Grid = styled(motion.div)`
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

export default Cuisine