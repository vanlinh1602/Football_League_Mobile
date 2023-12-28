export type Comment = {
  path: string;
  user: string;
  content: string;
  avatar: string;
};

export type CommentsState = {
  handling: boolean;
  data?: CustomObject<Comment[]>;
};
