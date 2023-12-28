import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Comment, CommentsState } from '../types/comments';

export const initialState: CommentsState = {
  handling: false,
  data: {},
};

const userSlice = createSlice({
  name: 'commentStore',
  initialState,
  reducers: {
    fetchComments(state, action: PayloadAction<CustomObject<Comment[]>>) {
      state.handling = false;
      state.data = {
        ...state.data,
        ...action.payload,
      };
    },
    getComments(state, _action: PayloadAction<string>) {
      state.handling = true;
    },
    addComment(state, _action: PayloadAction<Comment>) {
      state.handling = true;
    },
  },
});

export const { actions, reducer } = userSlice;
