import * as React from 'react';
// import Web3 from 'web3';

//
export interface MyDappProps {}

//
function MyDapp({}: MyDappProps) {
    //
    // const ref_web3 = React.useRef<null | Web3>(null);
    // const ref_accounts = React.useRef<string[]>([]);

    //
    React.useEffect(() => {
        getWeb3();
    }, []);

    // -----

    // get web3
    function getWeb3() {
        // ref_web3.current = new Web3(
        //     // new Web3.providers.HttpProvider('http://localhost:8545')
        // );
        // console.log(ref_web3.current);
    }

    // get accounts
    async function getAccounts() {
        // if (!ref_web3.current) {
        //     return;
        // }
        // const accounts = await ref_web3.current.eth.getAccounts();
        // ref_accounts.current = accounts;
        // console.log(ref_accounts.current);
    }

    // get balance

    // make instanceContract + get metaCoin

    // sendCoin

    // getBalance

    //
    return (
        <div>
            <div>Dapp</div>
        </div>
    );
}

export default MyDapp;
