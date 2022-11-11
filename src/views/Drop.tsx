import { Drops } from "@liqnft/candy-shop";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { candyShop } from "../utils/candy-shop";
import styled from "styled-components";

const Drop: React.FC = () => {
  const wallet = useAnchorWallet();

  return (
    <DesContainer>
      <h1 style={{ marginTop: 40, marginBottom: 15 }}>NFT Drops</h1>
      <p>
        View NFTs dropping on our marketplace.
      </p>
      <p style={{ marginBottom: 40 }}>
       
        <a
          href="https://candy.liqnft.com/shop/drops"
          target="_blank"
          rel="noreferrer noopener"
        >
          admin panel
        </a>
        .
      </p>
      <Drops
        candyShop={candyShop}
        wallet={wallet}
        walletConnectComponent={<WalletMultiButton />}
        filter
        search
      />
    </DesContainer>
  );
};

export default Drop;
const DesContainer = styled.div`
  width: 100%;

  p > a {
    color: #fff;
    text-decoration: underline;
  }
`;
