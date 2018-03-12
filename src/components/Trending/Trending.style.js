import styled from 'styled-components'

export const TrendingWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const GifList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 2100px;
  width: 1000px;
  padding: 5px;
  margin: auto;
`

export const GifItemWrapper = styled.div`
  margin: 5px;
  width: fit-content;
  height: fit-content;
`
export const StyledTitle = styled.h1`
  color: white;
  margin: 0 0 10px 23%;
  padding: 10px;
  width: 300px;
`
export const StyledButton = styled.div`
  position: absolute;
  color: ${props => props.isFavorite ? 'red' : 'white'};
  cursor: pointer;

  :hover {
    color:red;
  }
`
