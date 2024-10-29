
import React, { useState } from 'react';

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
      </div>
    </header>
  );
}
