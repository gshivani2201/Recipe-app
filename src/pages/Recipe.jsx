import {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

function Recipe() {

  let params = useParams()
  const [details, setDetails] = useState({})
  const [activeTab, setActiveTab] = useState('instructions')

  const fetchDetails = async() => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const detailData = await data.json();
    setDetails(detailData)
  }

  useEffect(() => {
    fetchDetails()
  }, [params.name])

  return (
    <DetailWarpper>
      <Box>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </Box>
      <Info>
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
        {activeTab === 'instructions' && (
          <div>
            <h1 dangerouslySetInnerHTML={{__html: details.summary}}></h1>
            <h1 dangerouslySetInnerHTML={{__html: details.instructions}}></h1>
          </div>
        )}

        {activeTab === 'ingredients' && (
          <ul>
          {details.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
        )}
      </Info>
    </DetailWarpper>
  )
}

const DetailWarpper = styled.div`
  margin-top: 5rem;  
  margin-bottom: 2.5rem;   
  display: flex;

  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h1 {
  font-size: 0.9rem;    
  color: rgb(56, 56, 56);
  line-height: 1.75rem;   
  margin: 1rem 0rem; 
  }

  li {
    font-size: 0.9rem;      
    line-height: 2rem;
  }

  ul {
    margin-top: 2rem;
  }
`;

const Box = styled.div`
  min-width: 20rem;
  max-width: 20rem;

  img {
    width: 100%;
  }

  h2 {
    margin-bottom: 1rem;    
    font-size: 1rem;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;   
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;  
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 5rem; 
`

export default Recipe