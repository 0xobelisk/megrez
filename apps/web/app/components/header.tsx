
import React, { useState } from 'react';
import { ConnectButton, useCurrentAccount } from '@mysten/dapp-kit';

export default function Header() {

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-blue-600 text-white">
      <div className="flex items-center space-x-4">
        <span className="font-bold text-lg">Your Logo</span>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => {}}
          className="text-sm font-medium hover:text-blue-200"
        >
          ZK-Login
        </button>
        <ConnectButton className="bg-white text-blue-600 hover:bg-blue-100 font-medium py-2 px-4 rounded" />
      </div>
    </header>
  );
}
