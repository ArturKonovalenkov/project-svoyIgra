import store from '../store';

export interface IUserObj {
  login: string,
  id: number
}
export interface IUser {
  user: IUserObj,
  authUser: boolean
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
