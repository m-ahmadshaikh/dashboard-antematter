import { Connection, clusterApiUrl, PublicKey } from '@solana/web3.js';
const connection = new Connection(clusterApiUrl('mainnet-beta'));
const metaplex = new metaplex(connection);
export default metaplex;
