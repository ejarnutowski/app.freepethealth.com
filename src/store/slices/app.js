import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// =============================================== //
//                     ACTIONS                     //
// =============================================== //

export const setUser = user => async (dispatch) => {
  dispatch(slice.actions.setUser(user));
};

// =============================================== //
//                    SELECTORS                    //
// =============================================== //

export default slice.reducer;
