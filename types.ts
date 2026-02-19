export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface SymptomAnalysisResult {
  analysis: string;
  recommendations: string[];
  disclaimer: string;
}

export interface Comment {
  id: number;
  author: string;
  timeAgo: string;
  content: string;
  likes: number;
  avatarUrl: string;
}