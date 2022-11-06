import { Metaplex } from '@metaplex-foundation/js';
import { clusterApiUrl, Connection } from '@solana/web3.js';
import axios from 'axios';

import { JsonMetadata, Metadata } from '@metaplex-foundation/js';

const connection = new Connection(clusterApiUrl('devnet'));
const mx = Metaplex.make(connection);

export const fetchNft = async () => {
  const asset = await mx
    .nfts()
    .findAllByOwner({ owner: mx.identity().publicKey });

  const firstMetaData = asset[5] as Metadata<JsonMetadata<string>>;
  const secondMetaData = asset[1] as Metadata<JsonMetadata<string>>;
  const thirdMetaData = asset[82] as Metadata<JsonMetadata<string>>;

  const img1 = (await axios.get(firstMetaData.uri)).data.image;
  const img2 = (await axios.get(secondMetaData.uri)).data.image;
  const img3 = (await axios.get(thirdMetaData.uri)).data.image;

  const nft1 = await mx.nfts().load({ metadata: firstMetaData });
  const nft2 = await mx.nfts().load({ metadata: secondMetaData });
  const nft3 = await mx.nfts().load({ metadata: thirdMetaData });

  return [
    {
      name: nft1.name,
      mintAddress: nft1.mint.address.toString(),
      tokenAddress: nft1.metadataAddress.toString(),
      owner: mx.identity().publicKey.toString(),
      imgUrl: img1,
    },
    {
      name: nft2.name,
      mintAddress: nft2.mint.address.toString(),
      tokenAddress: nft2.metadataAddress.toString(),
      owner: mx.identity().publicKey.toString(),
      imgUrl: img2,
    },
    {
      name: nft3.name,
      mintAddress: nft3.mint.address.toString(),
      tokenAddress: nft3.metadataAddress.toString(),
      owner: mx.identity().publicKey.toString(),
      imgUrl: img3,
    },
  ];
};
