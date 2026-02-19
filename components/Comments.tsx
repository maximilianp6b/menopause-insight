import React from 'react';
import { ThumbsUp, MessageCircle } from 'lucide-react';
import { Comment } from '../types';

const MOCK_COMMENTS: Comment[] = [
  {
    id: 1,
    author: "Jennifer M.",
    timeAgo: "2 hours ago",
    content: "I literally cried reading this. I've been to 4 doctors about my joint pain and anxiety. They all said I was just getting old. Ordered the MenoBalance immediately.",
    likes: 45,
    avatarUrl: "https://picsum.photos/seed/user1/50/50"
  },
  {
    id: 2,
    author: "Rebecca S.",
    timeAgo: "5 hours ago",
    content: "The 4 hours stat is terrifying but explains so much. Thank you for this article. I felt like I was going crazy.",
    likes: 122,
    avatarUrl: "https://picsum.photos/seed/user2/50/50"
  },
  {
    id: 3,
    author: "Dr. K. Lewis",
    timeAgo: "1 day ago",
    content: "As a GP, I admit this is true. We simply aren't taught enough. I've started recommending supplements like these to my patients alongside lifestyle changes.",
    likes: 310,
    avatarUrl: "https://picsum.photos/seed/user3/50/50"
  }
];

export const Comments: React.FC = () => {
  return (
    <div className="bg-slate-50 border-t border-slate-200 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
          Discussion <span className="ml-2 text-sm bg-slate-200 text-slate-600 px-2 py-1 rounded-full">124</span>
        </h3>
        
        <div className="space-y-8">
          {MOCK_COMMENTS.map((comment) => (
            <div key={comment.id} className="flex space-x-4">
              <img 
                src={comment.avatarUrl} 
                alt={comment.author} 
                className="w-10 h-10 rounded-full border border-slate-200"
              />
              <div className="flex-1">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-800 text-sm">{comment.author}</span>
                    <span className="text-xs text-slate-400">{comment.timeAgo}</span>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">{comment.content}</p>
                </div>
                <div className="flex items-center space-x-4 mt-2 ml-1">
                  <button className="flex items-center space-x-1 text-slate-500 text-xs font-medium hover:text-brand-600">
                    <ThumbsUp className="w-3 h-3" />
                    <span>{comment.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-slate-500 text-xs font-medium hover:text-brand-600">
                    <MessageCircle className="w-3 h-3" />
                    <span>Reply</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="w-full mt-8 py-3 bg-slate-200 text-slate-600 font-bold rounded hover:bg-slate-300 transition-colors">
          Load more comments
        </button>
      </div>
    </div>
  );
};