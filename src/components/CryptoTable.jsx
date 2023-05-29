import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Icon from "react-crypto-icons";

const CryptoTable = () => {
//const [cryptos, setCryptos] = useState([]);

// useEffect(() => {
//     // Fetch cryptocurrency data from API

//     const apiKey = 'ea2cba61-1482-422e-959e-720b8aa6e0e1';

//     // Fetch cryptocurrency data from API
//     fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${apiKey}&limit=10`, {
//         mode: 'no-cors' // 'cors' by default
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Request failed with status ' + response.status);
//         }
//         return response.json();
//     })
//     .then(data => {
//         // Store the data in the component's state
//         setCryptos(Object.values(data.data));
//     })
//     .catch(error => {
//         console.log(error);
//     });
// }, []);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 600) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }, []); 


    const cryptos = [
        {
            number: 1,
            icon: <Icon name="btc" size={25} />,
            name: 'Bitcoin BTC',
            price: '544,714.00',
            change: 0.5
        },
        {
            number: 2,
            icon: <Icon name="eth" size={25} />,
            name: 'Ethereum ETH',
            price: '37,219.45',
            change: 2.4
        },
        {
            number: 3,
            icon: <Icon name="usdt" size={25} />,
            name: 'Tether USDT',
            price: '19.66',
            change: '0.6'
        },
        {
            number: 4,
            icon: <Icon name="bnb" size={25} />,
            name: 'BNB BNB',
            price: '6,158.27',
            change: 1.3
        },
        {
            number: 5,
            icon: <Icon name="usdc" size={25} />,
            name: 'USD Coin USDC',
            price: '19.67',
            change: -0.4
        }
    ]
    //, position: 'sticky', left: 0
    return (
        <div style={{textAlign: 'left', width: '100%', paddingLeft: isMobile? 20 : 50, marginTop: 50, overflowX: 'auto', paddingBottom: 100}}>
            <table style={{width: isMobile? '90%' : 550, paddingRight: 20, fontFamily: 'Montserrat'}}>
                <thead>
                    <tr>
                        <th style={{marginRight: 10}}>#</th>
                        <th style={{textAlign: 'left', paddingLeft: 20}}>Name</th>
                        <th style={{textAlign: 'right', paddingLeft: 20}}>Price</th>
                        <th style={{textAlign: 'right', whiteSpace: 'nowrap', paddingLeft: 20,}}>Change (24h)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="4" style={{borderTop: '1px solid grey'}}></td>
                    </tr>
                    {cryptos.map(crypto => (                                                    
                        <tr key={crypto.name}>                                
                            <td style={{marginRight: 10, paddingBottom: 10, paddingTop: 10}}>{crypto.number}</td>
                            <td style={{textAlign: 'left', display: 'flex', alignItems: 'center', paddingLeft: 20, whiteSpace: 'nowrap', paddingBottom: 10, paddingTop: 10}}>
                                {crypto.icon}<p style={{marginRight: 10}}/>{crypto.name}
                            </td>
                            <td style={{textAlign: 'right', whiteSpace: 'nowrap', marginRight: 10, paddingBottom: 10, paddingTop: 10}}>R {crypto.price}</td>
                            <td style={{textAlign: 'right', color: crypto.change > 0 ? 'green' : 'red', paddingBottom: 10, paddingTop: 10}}>{crypto.change}%</td>
                        </tr>                        
                    ))}
                    <tr>
                        <td colSpan="4" style={{borderTop: '1px solid grey'}}></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

    export default CryptoTable;
