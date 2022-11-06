import { Metaplex } from '@metaplex-foundation/js';
import { Connection, clusterApiUrl, PublicKey } from '@solana/web3.js';

const connection = new Connection(clusterApiUrl('mainnet-beta'));

const mintAddress = new PublicKey(
  'ATe3DymKZadrUoqAMn7HSpraxE4gB88uo1L9zLGmzJeL'
);

const nft = await metaplex.nfts().findByMint({ mintAddress });
