import { useRef } from "react";
import { CandyShop } from "@liqnft/candy-shop-sdk";
import { Orders, Stat } from "@liqnft/candy-shop";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import {
  CANDY_SHOP_CREATOR_ADDRESS,
  CANDY_SHOP_TREASURY_MINT,
  CANDY_SHOP_PROGRAM_ID,
  NETWORK,
} from "../utils/candy-shop";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import styled from "styled-components";

const CustomTokenMarketplace: React.FC = () => {
  const wallet = useAnchorWallet();

  const candyShopRef = useRef<CandyShop>(
    new CandyShop({
      candyShopCreatorAddress: CANDY_SHOP_CREATOR_ADDRESS,
      treasuryMint: CANDY_SHOP_TREASURY_MINT,
      candyShopProgramId: CANDY_SHOP_PROGRAM_ID,
      env: NETWORK,
      // pass additional settings param to configure shop display
      settings: {
        currencySymbol: "MHCNFT",
        currencyDecimals: 3,
        priceDecimals: 3,
        volumeDecimals: 1,
      },
    })
  );

  return (
    <DesContainer>
      <Stat
        candyShop={candyShopRef.current}
        title={"MHC NFT Marketplace"}
        description={
          "The official marketplace to trade NFTs with $MHCNFT"
        }
        style={{ paddingBottom: 50 }}
      />
      <Orders
        wallet={wallet}
        candyShop={candyShopRef.current}
        walletConnectComponent={<WalletMultiButton />}
      />
    </DesContainer>
  );
};

export default CustomTokenMarketplace;

const DesContainer = styled.div`
  width: 100%;
`;
