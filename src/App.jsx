import React from 'react'
import Card from './Component/card'


const App = (props) => {

  const Data  = {

        cards: [
        {
            type: 'FREE',
            cost: '$0/month',
            features: [
              '✓ Single User',
              '✓ 50GB Storage',
              '✓ Unlimited Public Projects',
              '✓ Community Access',
              '✘ Unlimited Private Projects',
              '✘ Dedicated Phone Support',
              '✘ Free Subdomain',
              '✘ Monthly Status Reports'
            ]
        },
        {
            type: 'PLUS',
            cost: '$9/month',
            features: [
              '✓ 5 User',
              '✓ 50GB Storage',
              '✓ Unlimited Public Projects',
              '✓ Community Access',
              '✓ Unlimited Private Projects',
              '✓ Dedicated Phone Support',
              '✓ Free Subdomain',
              '✘ Monthly Status Reports'
            ]
        },
        {
            type: 'PRO',
            cost: '$49/month',
            features: [
              '✓ Unlimited User',
              '✓ 50GB Storage',
              '✓ Unlimited Public Projects',
              '✓ Community Access',
              '✓ Unlimited Private Projects',
              '✓ Dedicated Phone Support',
              '✓ Free Subdomain',
              '✓ Monthly Status Reports'
            ]
        },
        ]
    };

  return (

    <div className='row justify-content-around my-4'>
      {Data.cards.map((card, index) => (
        <div key={index} className='col'>
          <Card cardData={card} />
        </div>
      ))}
    </div>

);
}

export default App