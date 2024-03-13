import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
type IAuthorization = {
  email: string;
  password: string;
};

export interface IInitialState {
  success: boolean;
}
const state: IInitialState = {
  success: false,
};
export const REGISTR_USER = createAsyncThunk<
  IAuthorization,
  IAuthorization,
  {
    rejectValue: string;
  }
>("page/REGISTR_USER", async ({email, password} , { rejectWithValue }) => {
  try {
    await fetch("http://localhost:5000/auth/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    return { email, password };
  } catch (error) {
    return rejectWithValue(`${error}`);
  }
});
export const AUT_USER = createAsyncThunk<
  string,
  IAuthorization, 
  {
    rejectValue: string;
  }
>("page/AUT_USER", async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await fetch("http://localhost:5000/auth/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    return response.json();
  } catch (error) {
    return rejectWithValue(`${error}`);
  }
});

const slice = createSlice({
  name: "Page",
  initialState: state,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(AUT_USER.pending, (state) => {
      return {
        ...state,
        loading: "LOADING",
      };
    });
  }
})   

export default slice.reducer;

