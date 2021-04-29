import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
    showProfileData: boolean
}

export function Profile({ showProfileData }: ProfileProps) {
    return (
        <Flex
            align="center"
        >
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Pedro Lucas</Text>
                    <Text
                        color="gray.300"
                        fontSize="small"
                    >
                        pedro.lucas4431@gmail.com
                    </Text>
                </Box>
            )}
            <Avatar size="md" name="Pedro Lucas" src="https://github.com/pdrolucasz.png" />
        </Flex>
    )
}