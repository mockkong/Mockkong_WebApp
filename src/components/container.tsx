import { styled } from "@stitches/react";

const ContainerStyled = styled('div', {
  display: 'flex',
})

export default function Container({ children }) {
  return (
    <ContainerStyled>
      {children}
    </ContainerStyled>
  )
}