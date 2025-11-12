import React from 'react';

interface ChatMessage {
  id: string;
  playerId: number;
  playerName: string;
  message: string;
}

interface ChatPanelProps {
  messages: ChatMessage[];
  currentPlayerId: number;
  inputValue: string;
  onInputChange: (value: string) => void;
  onSendMessage: () => void;
}

export default function ChatPanel({
  messages,
  currentPlayerId,
  inputValue,
  onInputChange,
  onSendMessage,
}: ChatPanelProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSendMessage();
    }
  };

  return (
    <div className="space-y-3">
      <div className="bg-slate-800/50 rounded-lg p-3 max-h-48 overflow-y-auto">
        {messages.length === 0 ? (
          <p className="text-gray-400 text-xs text-center py-2">
            No messages yet...
          </p>
        ) : (
          <div className="space-y-2">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`p-2 rounded ${
                  msg.playerId === currentPlayerId
                    ? 'bg-blue-900/40'
                    : 'bg-slate-700/40'
                }`}
              >
                <p className="text-orange-300 text-xs font-semibold">
                  {msg.playerName}
                  {msg.playerId === currentPlayerId ? ' (You)' : ''}
                </p>
                <p className="text-white text-sm">{msg.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          className="flex-1 px-3 py-2 bg-slate-700 text-white rounded border border-slate-600 focus:outline-none focus:border-orange-500 text-sm"
          maxLength={200}
        />
        <button
          type="button"
          onClick={onSendMessage}
          disabled={!inputValue.trim()}
          className="px-4 py-2 bg-orange-600 hover:bg-orange-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded transition-colors text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
}
