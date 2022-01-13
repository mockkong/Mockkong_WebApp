import { styled } from "@stitches/react";

const ContainerStyled = styled('div', {
  display: 'flex',
  margin: '45px auto',
  maxWidth: '1300px',
})

export default function Container({ children }) {
  return (
    <ContainerStyled className="Container">
      {children}
    </ContainerStyled>
  )
}