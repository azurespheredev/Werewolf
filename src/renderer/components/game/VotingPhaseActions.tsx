import React from 'react';
import ChatPanel from './ChatPanel';

interface VotingPhaseActionsProps {
  submitted: boolean;
  target: number | null;
  chatMessages: Array<{
    id: string;
    playerId: number;
    playerName: string;
    message: string;
  }>;
  chatInput: string;
  currentPlayerId: number;
  onSubmitVote: () => void;
  onChatInputChange: (value: string) => void;
  onSendChat: () => void;
}

export default function VotingPhaseActions({
  submitted,
  target,
  chatMessages,
  chatInput,
  currentPlayerId,
  onSubmitVote,
  onChatInputChange,
  onSendChat,
}: VotingPhaseActionsProps) {
  return (
    <div className="space-y-3">
      {submitted ? (
        <div className="p-3 bg-green-900/30 rounded-lg border border-green-500/30">
          <p className="text-green-200 text-sm">
            Vote submitted. Waiting for others...
          </p>
        </div>
      ) : (
        <>
          <p className="text-orange-100/80 text-sm">
            Select a player to vote out
          </p>
          <button
            type="button"
            onClick={onSubmitVote}
            disabled={target === null}
            className="w-full px-4 py-3 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
          >
            Cast Vote
          </button>
        </>
      )}
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
