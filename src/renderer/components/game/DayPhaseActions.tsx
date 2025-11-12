import React from 'react';
import ChatPanel from './ChatPanel';

interface DayPhaseActionsProps {
  chatMessages: Array<{
    id: string;
    playerId: number;
    playerName: string;
    message: string;
  }>;
  chatInput: string;
  currentPlayerId: number;
  onChatInputChange: (value: string) => void;
  onSendChat: () => void;
}

export default function DayPhaseActions({
  chatMessages,
  chatInput,
  currentPlayerId,
  onChatInputChange,
  onSendChat,
}: DayPhaseActionsProps) {
  return (
    <div className="space-y-3">
      <div className="p-3 bg-yellow-900/30 rounded-lg border border-yellow-500/30">
        <p className="text-yellow-200 text-sm font-semibold mb-2">
          Day Discussion
        </p>
        <p className="text-yellow-200/80 text-xs">
          Discuss with other players. Voting begins next.
        </p>
      </div>
      <ChatPanel
        messages={chatMessages}
        currentPlayerId={currentPlayerId}
        inputValue={chatInput}
        onInputChange={onChatInputChange}
        onSendMessage={onSendChat}
      />
    </div>
  );
}
