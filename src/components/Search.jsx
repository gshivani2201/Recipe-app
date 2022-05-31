import styled from 'styled-components'
import {useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

function Search() {

    const [input, setInput] = useState("")
    const navigate = useNavigate()
  
    const submitHandler = (e) => {
        e.preventDefault()
        navigate("/searched/" + input)
    }

  return (
      <FormStyle onSubmit={submitHandler}>
          <div>
              <FaSearch />
              <input 
              onChange={(e) => setInput(e.target.value)} 
              type="text" 
              value={input}
              />
          </div>
      </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 0 11rem;       //0 10rem;
    div {
        width: 100%;
        position: relative;
    }
    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 0.9rem;   //1rem
        color: white;
        padding: 0.6rem 2rem;   //0.8rem 3rem;
        border-radius: 0.6rem;  //0.8rem
        outline: none;
        width: 100%;
    }
    svg {
        position: absolute;
        top: 50%;
        left: -1%;   //0%;
        transform: translate(100%, -50%);
        color: white;
        width: 0.9rem;
        height: 0.9rem;
    }
`

export default Search