"use client";

import React from "react";
import Button from "../shared/Button";
import Input from "../shared/Input";

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
      <div className="p-4 bg-blue-900/30 rounded-lg border border-blue-500/30">
        <h3 className="text-blue-200 font-semibold mb-2">Day Phase</h3>
        <p className="text-blue-100/80 text-sm">Discuss with other players. Share information and suspicions.</p>
      </div>

      {/* Chat Messages */}
      <div className="bg-slate-800/60 rounded-lg p-3 h-64 overflow-y-auto space-y-2">
        {chatMessages.length === 0 ? (
          <p className="text-gray-400 text-sm text-center">No messages yet. Start the discussion!</p>
        ) : (
          chatMessages.map((msg) => (
            <div
              key={msg.id}
              className={`p-2 rounded ${
                msg.playerId === currentPlayerId ? "bg-blue-900/40 ml-4" : "bg-slate-700/40 mr-4"
              }`}
            >
              <p className="text-orange-300 text-xs font-semibold">{msg.playerName}</p>
              <p className="text-orange-50 text-sm">{msg.message}</p>
            </div>
          ))
        )}
      </div>

      {/* Chat Input */}
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Type your message..."
          value={chatInput}
          onChange={(e) => onChatInputChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              onSendChat();
            }
          }}
          className="flex-1 text-white bg-slate-800/60 border-b-2 border-b-orange-500"
        />
        <Button className="px-6 py-2 text-sm" onClick={onSendChat}>
          Send
        </Button>
      </div>
    </div>
  );
}
