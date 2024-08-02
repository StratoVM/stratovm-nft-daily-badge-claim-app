import Image from "next/image";

export const NFTImage = () => {
  return (
    <Image
      src="/nft-image.png"
      alt="StratoVM NFT Image"
      width={400}
      height={400}
    />
  );
};
