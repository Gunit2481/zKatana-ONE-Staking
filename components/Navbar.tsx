import { Container, Flex, Heading } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Navbar(){
    return (
        <Container maxW={"1200px"} py={4}>
            <Flex direction={"row"} justifyContent={"space-between"}>
                <img style={{borderRadius: 20, width: 500, height: 175,}} src='/images/luffy_banner.png'  />
                <Heading style={{ position: "absolute", top: "12%", left: "50%"}} >One Piece Staking</Heading>
                <ConnectWallet/>
            </Flex>
        </Container>
    )
}