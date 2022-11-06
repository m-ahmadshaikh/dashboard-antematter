import {
  Metaplex,
  keypairIdentity,
  bundlrStorage,
} from '@metaplex-foundation/js';
import { Connection, clusterApiUrl, Keypair, PublicKey } from '@solana/web3.js';

const connection = new Connection(clusterApiUrl('mainnet-beta'));
const wallet = Keypair.generate();

const metaplex = Metaplex.make(connection)
  .use(keypairIdentity(wallet))
  .use(bundlrStorage());

const mintAddress = new PublicKey(
  'ATe3DymKZadrUoqAMn7HSpraxE4gB88uo1L9zLGmzJeL'
);

const abortController = new AbortController();
setTimeout(() => abortController.abort(), 100);

const nft = await metaplex.nfts().findByMint(
  { mintAddress },
  {
    signal: abortController.signal,
  }
);
