import Image from 'next/image'
import styles from './page.module.css'
import type { Metadata } from 'next'


import { Flex, Box, Container, Heading, WrapItem, Center, Text, Wrap } from '@chakra-ui/react'

export const metadata: Metadata = {
  title: 'Caos Mental Geral',
  description: 'organização de aleatoriedades',
}

export default function Home() {
  return (
    <>


      <Flex w={'100%'} bg={'gainsboro'}>
        <Flex flexDir={'column'} justify={'space-between'} w="250px" h="100vh" bg="white" p="2em">
          <Box>
            <Flex>
              <Heading fontSize={'2.5em'}>CMG</Heading>
            </Flex>
            <Flex flexDir={'column'}>
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
            </Flex>
          </Box>

          <Box>
            <Box>
              {/* subscribe */}
            </Box>
            <Box>
              <Text fontSize={'1.5em'} fontWeight={'bold'}>
                &copy; {new Date().getFullYear()}
              </Text>
            </Box>
          </Box>
        </Flex>
        <Box>
          <Wrap w={'100%'} display={'grid'} m="2em">
            <WrapItem>
              <Center w={'15em'} h='250px' bg='red.200'>
                Box 1
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w={'25em'} h='250px' bg='green.200'>
                Box 2
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w={'30em'} h='250px' bg='tomato'>
                Box 3
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w={'30em'} h='250px' bg='blue.200'>
                Box 4
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w={'35em'} h='250px' bg='blue.200'>
                Box 4
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w={'15em'} h='250px' bg='blue.200'>
                Box 4
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w={'25em'} h='250px' bg='blue.200'>
                Box 4
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w={'25em'} h='250px' bg='blue.200'>
                Box 4
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w={'30em'} h='250px' bg='blue.200'>
                Box 4
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w={'25em'} h='250px' bg='blue.200'>
                Box 4
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w={'35em'} h='250px' bg='blue.200'>
                Box 4
              </Center>
            </WrapItem>
          </Wrap>
        </Box>
      </Flex>
    </>
  )
}
