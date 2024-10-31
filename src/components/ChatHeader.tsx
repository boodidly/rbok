import React from 'react';
import { Gem } from 'lucide-react';

export function ChatHeader() {
  return (
    <div className="bg-[#1A1A1A] rounded-t-2xl p-4 flex items-center gap-3 border-b border-[#262626]">
      <div className="bg-[#0D0D0D] p-2 rounded-lg">
        <Gem className="w-6 h-6 text-[#0066FF]" />
      </div>
      <div>
        <h1 className="text-xl font-semibold text-white">Rubyok</h1>
        <p className="text-sm text-[#666666]">Powered by Llama 2</p>
      </div>
    </div>
  );
}