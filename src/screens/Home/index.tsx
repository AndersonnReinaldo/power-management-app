import React from 'react'
import { Container,Title,Card } from './styles'

const Home:React.FC = (): JSX.Element => {
  return (
    <Container>
      <Card>
        <Title>Consumo de energia em reais R$</Title>
      </Card>
    </Container>
  )
}

export default Home