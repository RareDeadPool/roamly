"use client";

import React, { useState } from "react";
import { MessageSquare, Send } from "lucide-react";
import { Comment } from "../../types/comment";
import Button from "../shared/Button";
import { Card, CardContent } from "../shared/Card";

interface CommentSectionProps {
  itineraryId: string;
}

export default function CommentSection({ itineraryId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "c-1",
      itineraryId,
      userId: "user-99",
      userName: "Alex Johnson",
      userImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop",
      content: "Thank you for the early-morning warning about Fushimi Inari! We arrived at 6:45 AM and it was practically empty. Best advice ever.",
      createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: "c-2",
      itineraryId,
      userId: "user-88",
      userName: "Sophie Dubois",
      userImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
      content: "How much cash do you recommend bringing for a 5-day stay? Do most restaurants accept IC cards or just cash?",
      createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
    }
  ]);

  const [newCommentText, setNewCommentText] = useState("");

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const newComment: Comment = {
      id: `c-new-${Date.now()}`,
      itineraryId,
      userId: "user-current",
      userName: "You (Traveler)",
      userImage: "/images/placeholder-user.jpg",
      content: newCommentText,
      createdAt: new Date().toISOString()
    };

    setComments([...comments, newComment]);
    setNewCommentText("");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 border-b border-sand-300 pb-3">
        <MessageSquare className="w-5 h-5 text-brand-teal-600" />
        <h3 className="text-lg font-extrabold text-deep-navy-900">
          Comments ({comments.length})
        </h3>
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmitComment} className="flex gap-3">
        <input
          type="text"
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          placeholder="Ask a question or leave a tip..."
          className="flex-1 px-4 py-2.5 text-sm bg-white border border-sand-300 rounded-xl focus:outline-none focus:border-brand-orange-500 transition-colors"
        />
        <Button variant="primary" type="submit" size="sm">
          <Send className="w-4 h-4" />
          Send
        </Button>
      </form>

      {/* Comment List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-3">
            {comment.userImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={comment.userImage}
                alt={comment.userName}
                className="w-8 h-8 rounded-full object-cover border border-sand-200 shrink-0"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-sand-300 flex items-center justify-center text-xs font-bold shrink-0">
                {comment.userName.charAt(0)}
              </div>
            )}
            <div className="flex-1 bg-white border border-sand-250 p-3.5 rounded-2xl space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-deep-navy-900">{comment.userName}</span>
                <span className="text-[10px] text-deep-navy-400 font-bold">
                  {new Date(comment.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className="text-xs text-deep-navy-600 leading-relaxed">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
