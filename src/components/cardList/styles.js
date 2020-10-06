import styled from 'styled-components'

export const CardContainer = styled.div`
margin: 200px auto 0;
display:flex;
max-width: 1200px;
flex-wrap: wrap;
justify-content: space-around;
`

export const Image = styled.img`

width: 1000px;

@media (max-width: 1000px) {
    max-width: 900px;
  }
`