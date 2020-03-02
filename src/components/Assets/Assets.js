import React from 'react';

import { useStoreState, useStoreActions } from 'easy-peasy';

export const Assets = () => {
  const sortedAssets = useStoreState(state => state.wallet.sortedAssets);

  const assets = useStoreState(state => state.wallet.assets);

  const removeAsset = useStoreActions(actions => actions.wallet.removeAsset);

  const handleRemoveAsset = event => {
    removeAsset(event.target.parentNode.querySelector('.symbol').innerText);
  };

  const domAssets = Object.keys(assets).map(symbol => (
    <li key={symbol}>
      <span className='remove-asset' onClick={handleRemoveAsset}>
        X
      </span>{' '}
      <span className='symbol'>{symbol}</span>
      <span className='balance'>: {assets[symbol].balance}</span>
    </li>
  ));

  return (
    <>
      <pre>{JSON.stringify(sortedAssets, null, 4)}</pre>
      <ul className='assets'>{domAssets}</ul>
    </>
  );
};
