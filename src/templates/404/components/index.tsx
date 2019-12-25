import React from 'react'

import { Box, Flex, Image, Text } from '@chakra-ui/core'
import styled from '@emotion/styled'

const BorderedCard = styled(Box)`
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  overflow: hidden;
`

const WidthImage = styled(Image)`
  width: 100%;
`

const NotFoundComponent: React.FC = () => {
  return (
    <Box pt={3}>
      <Flex justifyContent='center'>
        <Box width={[20 / 24, 16 / 24, 12 / 24, 8 / 24]}>
          <BorderedCard>
            <WidthImage
              m={0}
              src='https://media.giphy.com/media/uS1hYCwTrW3ks/giphy.gif'
            />
            <Box p={3}>
              <Text fontSize={[18, 20, 22, 24]} fontWeight={600}>
                Not found
              </Text>
              <Text fontSize={[14, 15]} pt={2}>
                The page your're looking for is not found
              </Text>
            </Box>
          </BorderedCard>
        </Box>
      </Flex>
    </Box>
  )
}

export default NotFoundComponent
