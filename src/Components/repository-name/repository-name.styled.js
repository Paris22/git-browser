import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
`

export const Title = styled.h1`
  display: flex;
  justify-content: start;
  text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
  margin-bottom: 30px;
`
export const Subtitle = styled.h2`
  text-align: center;
  margin-bottom: 50px;
`
export const User = styled.div`
  display: flex;
  align-items: center;
`
export const UserAvatar= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px 0 5px;
  padding-bottom: 10px;
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 0 10px 0 10px;
  height: 50%;
  width: 50%;
`