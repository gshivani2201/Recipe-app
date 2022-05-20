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
      <div>
        <h3>{details.title}</h3>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
        <Button className={activeTab === 'ingrediants' ? 'active' : ''} onClick={() => setActiveTab('ingrediants')}>Ingrediants</Button>
        <div>
          <h4 dangerouslySetInnerHTML={{__html: details.summary}}></h4>
          <h4 dangerouslySetInnerHTML={{__html: details.instructions}}></h4>
        </div>
      </Info>
    </DetailWarpper>
  )
}

const DetailWarpper = styled.div`
  margin-top: 6rem;
  margin-bottom: 3rem;
  display: flex;
  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 1rem;
  }
  li {
    font-size: 1rem;
    line-height: 2rem;
  }
  ul {
    margin-top: 1rem;
  }
`

const Button = styled.button`
  padding: 0.8rem 1rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 1rem;
  font-weight: 600;
`

const Info = styled.div`
  margin-left: 4rem;
`

export default Recipe