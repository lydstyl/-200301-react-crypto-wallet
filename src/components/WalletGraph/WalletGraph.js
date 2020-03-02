import React, { useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

import { useStoreState, useStoreActions } from 'easy-peasy';

export const WalletGraph = () => {
  const assets = useStoreState(state => state.wallet.assets);

  const sortedAssets = useStoreState(state => state.wallet.sortedAssets);

  let walletGraphData = useStoreState(state => state.wallet.walletGraphData);
  walletGraphData = {
    datasets: [
      {
        data: walletGraphData.numbers
      }
    ],

    labels: walletGraphData.labels
  };

  const updateAssetsWithPrices = useStoreActions(
    actions => actions.wallet.updateAssetsWithPrices
  );

  useEffect(() => {
    updateAssetsWithPrices(assets); // this is a thunk
  }, []);

  return (
    <div className='wallet-graph'>
      <div className='not-counted'>
        <h2>Not counted</h2>
      </div>
      <div className='counted'>
        <h2>Counted</h2>
        <Doughnut data={walletGraphData} />
      </div>
    </div>
  );
};
