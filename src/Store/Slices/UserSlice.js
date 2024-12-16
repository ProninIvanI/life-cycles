import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: '',
  tokenAuthorization: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccessAddToken(state, action) {
      state.tokenAuthorization = action.payload;
    },
    loginSuccessAddUsername(state, action) {
      state.user = action.payload;
    }
  }
});

export const { loginSuccessAddToken, loginSuccessAddUsername } = userSlice.actions;

export default userSlice.reducer;