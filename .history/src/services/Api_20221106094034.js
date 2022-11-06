import { Metaplex } from '@metaplex-foundation/js-next';
import { Connection, clusterApiUrl, PublicKey } from '@solana/web3.js';
const connection = new Connection(clusterApiUrl('mainnet-beta'));
const metaplex = new Metaplex(connection);
export default metaplex;
