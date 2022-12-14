import React from "react";
import { Box } from '@chakra-ui/react';
import { Link } from "react-router-dom";


export default function Item({ imgid, nombre, descripcion, precio, id }) {
    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        {/* <Image src={title.img} alt={title.img} /> */}
  
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            {/* <Badge borderRadius='full' px='2' colorScheme='teal'>
              New
            </Badge> */}
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
            </Box>
          </Box>
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >

          </Box>
  
          <Box>
            <Box as='span' color='gray.600' fontSize='sm'>
              / wk
            </Box>
          </Box>
  
          <Box display='flex' mt='2' alignItems='center'>

            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }
  