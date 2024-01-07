import Image from 'next/image'
import styles from './page.module.css'
import type { Metadata } from 'next'

import { Flex, Box, Container, Heading, WrapItem, Center, Text } from '@chakra-ui/react'

export const metadata: Metadata = {
  title: 'Caos Mental Geral',
  description: 'organização de aleatoriedades',
}

export default function Post() {
  return (
    <>
      <Flex w={'100%'} bg={'gainsboro'}>
        <Box w="250px" h="100vh" bg="white" p="2em">
          <Container>
            <Flex>
              <Heading fontSize={'1.5em'}>Caos Mental Geral</Heading>
            </Flex>
            <Flex>Cultura</Flex>
            <Flex>Saúde</Flex>
            <Flex>Tecnologia</Flex>
            <Flex>Cinema</Flex>
            <Flex>Música</Flex>
            <Flex>Receitas</Flex>
            <Flex>Arte</Flex>
            <Flex>Random</Flex>
            <Flex>Humor</Flex>
            <Flex>Pensamentos</Flex>
          </Container>
        </Box>
      </Flex>
      <Flex w={'100%'} bg={'gainsboro'} justify={'space-around'}>
        <Flex>Cinema</Flex>
        <Flex>Música</Flex>
        <Flex>Receitas</Flex>
        <Flex>Arte</Flex>
        <Flex>Pensamentos</Flex>
      </Flex>

    </>
  )
}
