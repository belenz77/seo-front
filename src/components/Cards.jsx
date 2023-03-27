import React from 'react'
import { Card, CardBody, CardFooter, Image, Button, Stack, Heading, Text, Box } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
// import { extendTheme } from "@chakra-ui/react";
// import "@chakra-ui/react/styles.css";
// import alpino from '../img/Acentor-alpino.jpg'

function Cards() {
    return (
        <ChakraProvider>
        <div>
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' centerContent>
                <Card
                    maxW='sm'
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    border-width='1px'
                    border-radius='12px'
                    overflow-x='auto'
                >
                    <CardBody>
                        <Image
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '200px' }}
                            src='https://seo.org/wp-content/uploads/2013/10/Acentor-alpino_%C2%A9Txanbelin_-shutterstock_97649951-scaled.jpg'
                            alt='Caffe Latte'
                            boxSize='150px'
                        />
                    </CardBody>
                    <Stack>
                        <CardBody>
                            <Heading size='md'>The perfect latte</Heading>

                            <Text py='2'>
                                Caffè latte is a coffee beverage of Italian origin made with espresso
                                and steamed milk.
                            </Text>
                        </CardBody>

                        <CardFooter>
                            <Button variant='solid' colorScheme='blue'>
                                Buy Latte
                            </Button>
                        </CardFooter>
                    </Stack>
                </Card>
            </Box>

            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                    alt='Caffe Latte'
                />

                <Stack>
                    <CardBody>
                        <Heading size='md'>The perfect latte</Heading>

                        <Text py='2'>
                            Caffè latte is a coffee beverage of Italian origin made with espresso
                            and steamed milk.
                        </Text>
                    </CardBody>

                    <CardFooter>
                        <Button variant='solid' colorScheme='blue'>
                            Buy Latte
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>

        </div>

        </ChakraProvider>
    )
}

export default Cards
