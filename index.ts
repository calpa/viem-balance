import { http, createPublicClient } from 'viem';
import { mainnet } from 'viem/chains';

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
});

// NOTE: You can also change your address here
const address = '0xdD0EF5299A7fd6801230140b7469f19F28421b64';

const balance = await client.getBalance({
  address: address,
});

export default [`Balance of ${address}: ${Number(balance) / 1e18}`];
