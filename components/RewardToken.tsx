import { Card, Heading, Skeleton, Stack, Text } from "@chakra-ui/react";
import { useAddress, useContract, useTokenBalance } from "@thirdweb-dev/react";
import { REWARD_TOKEN_ADDRESS } from "../constants/addresses";

export default function RewardToken() {
    const address = useAddress();
    const { contract: rewardTokenContract, isLoading: loadingRewardToken } = useContract(REWARD_TOKEN_ADDRESS);

    const { data: tokenBalance, isLoading: loadingTokenBalance } = useTokenBalance(rewardTokenContract, address);

    return (
        <Card p={5}>
            <Stack>
                <Heading color={'#F3C808'} >Monkey D. Luffy</Heading>
                <Skeleton h={4} w={"50%"} isLoaded={!loadingRewardToken && !loadingTokenBalance}>
                    <Text fontSize={"large"} fontWeight={"bold"}>${tokenBalance?.symbol}</Text>
                </Skeleton>
                <Skeleton h={4} w={"100%"} isLoaded={!loadingRewardToken && !loadingTokenBalance}>
                    <Text>{tokenBalance?.displayValue}</Text>
                </Skeleton>
            </Stack>
        </Card>
    )
}