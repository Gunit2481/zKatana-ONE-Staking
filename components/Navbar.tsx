import { Container, Flex, Heading } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import { ConnectWallet, lightTheme } from "@thirdweb-dev/react";

export default function Navbar(){
    return (
        <Container maxW={"1200px"} py={4}>
            <Flex direction={"row"} justifyContent={"space-between"}>
                <Heading style={{ position: "absolute", top: "12%", left: "48%"}} >One Piece Staking</Heading>
                <img style={{borderRadius: 20, width: 500, height: 175,}} src='/images/luffy_banner.png'/>
                <ConnectWallet
                    btnTitle="Connect"
                    style={{ position: "absolute", top: "12%", left: "77%"}}
                    className={styles.connectButton}
                    theme={lightTheme({
                        colors: {
                          accentText: "#c4351c",
                          accentButtonBg: "#c4351c",
                          modalBg: "#f5e7db",
                          dropdownBg: "#f5e7db",
                          primaryButtonBg: "#eb5800",
                          primaryButtonText: "#fafafa",
                          secondaryIconHoverColor: "#de175d",
                          connectedButtonBg: "#f0c600",
                          secondaryText: "#3f1803",
                        },
                      })}
                      switchToActiveChain={true}
                      modalSize={"compact"}
                      welcomeScreen={{}}
                />
            </Flex>
        </Container>
    )
}