import type { AppProps } from "next/app";
import { ThirdwebProvider, metamaskWallet, walletConnect, safeWallet, lightTheme, } from "@thirdweb-dev/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Zkatana } from "@thirdweb-dev/chains";
import Navbar from "../components/Navbar";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={Zkatana}
      supportedWallets={[
        metamaskWallet({ recommended: true }),
        walletConnect({ recommended: true }),
        safeWallet({
          personalWallets: [
            metamaskWallet({ recommended: true }),
            walletConnect({ recommended: true }),
          ],
        }),
      ]}>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
