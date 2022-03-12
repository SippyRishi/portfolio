import Icon from '@chakra-ui/icon'
import { HStack } from '@chakra-ui/layout'
import React from 'react'
import { FaFacebookF, FaGoogle, FaSpotify, FaShopify, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

function Social() {
    return (
        <HStack spacing="24">
            <Icon as={FaFacebookF} boxSize="50" />
            <Icon as={FaInstagram} boxSize="50" />
            <Icon as={FaLinkedin} boxSize="50" />
            <Icon as={FaGithub} boxSize="50" />
        </HStack>
    )
}

export default Social