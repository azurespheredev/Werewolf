"use client";

import React from "react";
import Button from "../shared/Button";
import Input from "../shared/Input";

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
  if (submitted) {
    return (
      <div className="space-y-3">
        <div className="p-4 bg-green-900/30 rounded-lg border border-green-500/30">
          <p className="text-green-200 text-sm">✓ Vote submitted. Waiting for other players...</p>
        </div>

        {/* Chat during voting */}
        <div className="bg-slate-800/60 rounded-lg p-3 h-48 overflow-y-auto space-y-2">
          {chatMessages.map((msg) => (
            <div
              key={msg.id}
              className={`p-2 rounded ${
                msg.playerId === currentPlayerId ? "bg-blue-900/40 ml-4" : "bg-slate-700/40 mr-4"
              }`}
            >
              <p className="text-orange-300 text-xs font-semibold">{msg.playerName}</p>
              <p className="text-orange-50 text-sm">{msg.message}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="p-4 bg-red-900/30 rounded-lg border border-red-500/30">
        <h3 className="text-red-200 font-semibold mb-2">Voting Phase</h3>
        <p className="text-red-100/80 text-sm">
          {target !== null
            ? `Vote to eliminate Player ${target + 1}. Click submit to confirm.`
            : `Select a player to vote for elimination.`}
        </p>
      </div>

      <Button className="w-full px-4 py-3" onClick={onSubmitVote} disabled={target === null}>
        Submit Vote
      </Button>

      {/* Quick chat during voting */}
      <div className="bg-slate-800/60 rounded-lg p-3 h-32 overflow-y-auto space-y-2">
        {chatMessages.slice(-5).map((msg) => (
          <div key={msg.id} className="text-xs">
            <span className="text-orange-300 font-semibold">{msg.playerName}:</span>
            <span className="text-orange-50 ml-1">{msg.message}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Quick message..."
          value={chatInput}
          onChange={(e) => onChatInputChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onSendChat();
            }
          }}
          className="flex-1 text-white bg-slate-800/60 border-b-2 border-b-orange-500 text-sm"
        />
        <Button className="px-4 py-2 text-xs" onClick={onSendChat}>
          Send
        </Button>
      </div>
    </div>
  );
}
