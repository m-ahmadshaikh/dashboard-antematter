import { Connection, clusterApiUrl, PublicKey } from '@solana/web3.js';
import {
  Metaplex,
  keypairIdentity,
  bundlrStorage,
} from '@metaplex-foundation/js';
const connection = new Connection(clusterApiUrl('mainnet-beta'));
const metaplex = new Metaplex(connection);
export default metaplex;
