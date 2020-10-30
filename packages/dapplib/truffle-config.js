require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast food ski stomach dash rural smile half knife equal general'; 
let testAccounts = [
"0x7aa3cb744c5670d168ebe7be7e78ef48f846680249be1bdfe99150b1accc8ca1",
"0x2cfdf12b07d1c5da2182d18494a961d9e373f41a579cc4a5fe3d5991592ccfd6",
"0xc3dde3ff6760737bc95a901fdfe59ba9161df83c5576e155f9710177062bfbd9",
"0x0e78577e93d1ba16879b4a63f45b8196e686a2d8a83d02e73d1054600f0f265c",
"0x27371fcaa02827f9585ce4bf178aa88a8035291921e96e70bd41fb646a815742",
"0x25ad27859d757e416a29ec895d91a36633939aaa76f5ea54ab7e87d9722d2bc6",
"0xc785a05f8687ba1be2e5cec72b2ed00b8f13092692a70a0616b142507d29de91",
"0xdaae9e6f957cf632a92779c82dac24d778f24c14d154431b5ba4159efb36c6ab",
"0x1e26ec9d30dad44a77fadadc338a3532bed68ebf47d7463651973d9b972f5351",
"0x353406c51b48b45442832f8f8adb182a8c63c0a72be8fa8288f491cc2d890653"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
