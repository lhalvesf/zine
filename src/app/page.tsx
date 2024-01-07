import styles from './page.module.css'
import type { Metadata } from 'next'


import { Divider, Image, Flex, Box, Container, Heading, WrapItem, Center, Text, Wrap } from '@chakra-ui/react'

export const metadata: Metadata = {
  title: 'Caos Mental',
  description: 'organização de aleatoriedades',
}

export default function Home() {
  return (
    <>


      <Flex w={'100%'} bg={'gainsboro'} h="100vh">
        <Flex position={'fixed'} flexDir={'column'} justify={'space-between'} w="250px" h="100vh" bg="white" p="2em">
          <Box>
            <Flex>
              <Image
                src='/caos.png'
                alt='Caos Mental'
                boxSize='70px'
                objectFit='cover'
              />
              {/* <Heading pl={'5px'} fontSize={'2.3em'}>CM</Heading> */}
            </Flex>
            <Flex flexDir={'column'}>
              <br />
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


        <Flex p="2em" w={'100%'} flexDir={'column'} ml="250px">


          <Box minW={'100%'}>
            <Flex w={'100%'} justify={'space-between'} alignContent={'end'} >
              <Heading>Dense tundra stories</Heading>
              <Text>Lil Satyr, 6/6/6</Text>
            </Flex>
            <Divider borderColor={'black'}></Divider>
            <Flex pt={'1em'} >
              <Text>Turumpa, Turumpa ..</Text>
            </Flex>
          </Box>

          {/* 

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
          </Box> */}

        </Flex>


      </Flex>
    </>
  )
}
