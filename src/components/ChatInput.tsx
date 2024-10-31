import React from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  handleSend: (e: React.FormEvent) => Promise<void>;
}

export function ChatInput({ input, setInput, handleSend }: ChatInputProps) {
  return (
    <form
      onSubmit={handleSend}
      className="bg-[#1A1A1A] rounded-b-2xl p-4 flex gap-2 items-center border-t border-[#262626]"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 bg-[#0D0D0D] text-white rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0066FF] transition-all placeholder-[#666666]"
      />
      <button
        type="submit"
        className="bg-[#0066FF] text-white p-2 rounded-xl hover:bg-[#0052CC] transition-colors"
      >
        <Send className="w-5 h-5" />
      </button>
    </form>
  );
}