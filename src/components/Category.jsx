import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiCroissant} from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'

function Category() {
  return (
    <List>
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Thai'}>
            <GiNoodles />
            <h4>Thai</h4>
        </SLink>
        <SLink to={'/cuisine/French'}>
            <GiCroissant />
            <h4>French</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 1.5rem 0; 
`

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 1.3rem;
    background: linear-gradient(35deg, #494949, #313131);
    width: 4rem; 
    height: 4rem; 
    cursor: pointer;
    transform: scale(0.8);

    h4 {
        color: white;
        font-size: 0.6rem;  
    }

    svg {
        color: white;
        font-size: 1rem;    
    }
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);

        svg, h4 {
            color: white;
        }
    }
`

export default Category