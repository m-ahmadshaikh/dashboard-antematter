import {
  Metaplex,
  keypairIdentity,
  bundlrStorage,
} from '@metaplex-foundation/js';
import { Connection, clusterApiUrl, Keypair } from '@solana/web3.js';

const connection = new Connection(clusterApiUrl('mainnet-beta'));
const wallet = Keypair.generate();

const metaplex = Metaplex.make(connection)
  .use(keypairIdentity(wallet))
  .use(bundlrStorage());
export default metaplex;
