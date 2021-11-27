import getWeb3 from "../getWeb3";
import PetShopContract from "../contracts/PetShop.json";

const client = {
    web3: null,
    networkId: null,
    activeAccount: null,
    accounts: {},
    contracts: {},

    init: async function() {
        try {
            const web3 = await getWeb3();
        
            const accounts = await web3.eth.getAccounts();
        
            const networkId = await web3.eth.net.getId();
            const deployedNetwork = PetShopContract.networks[networkId];
            if(!deployedNetwork)
            {
                alert("Please select the correct network");
                return false;
            }
            const instance = new web3.eth.Contract(
                PetShopContract.abi,
                deployedNetwork && deployedNetwork.address,
            );
            client.web3 = web3;
            client.networkId = networkId;
            client.activeAccount = accounts[0];
            client.accounts = accounts;
            client.contracts.PetShop = instance;
        } catch (error) {
            alert(
                `Failed to load web3, accounts, or contract. Check console for details.`,
            );
            console.error(error);
        }
    }
};

export default client;