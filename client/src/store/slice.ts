import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type IAuthorization = {
  email: string;
  password: string;
};
export interface IInitialState {
  success: boolean;
  message: string;
  token: string | null;
  user: IAuthorization;
  showModal: boolean;
  color: string;
}
const state: IInitialState = {
  success: false,
  message: "",
  token: localStorage.getItem("access_token"),
  user: {email: "", password: ""},
  showModal: false,
  color: "green"
};
export const REGISTR_USER = createAsyncThunk<
  {success: boolean, message: string},
  IAuthorization,
  {
    rejectValue: string;
  }
>("page/REGISTR_USER", async ({email, password} , { rejectWithValue }) => {
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
    const data = await response.json();
    if (data.success) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    return rejectWithValue(`${error}`);
  }
});
export const AUTH_USER = createAsyncThunk<
  {token: string},
  IAuthorization, 
  {
    rejectValue: string;
  }
>("page/AUTH_USER", async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
      const data = await response.json();
    if (data.token) {
      return data;
    } else {
      throw new Error(data.message);
    }   
  } catch (error) {
    return rejectWithValue(`${error}`);
  }
});

const slice = createSlice({
  name: "Page",
  initialState: state,
  reducers: {
    SET_SHOWMODAL: (state, action) => {
      state.showModal = action.payload
    }
    
  },
  extraReducers: (builder) => {
    builder.addCase(REGISTR_USER.fulfilled, (state, action) => {
      return {
        ...state,
        success: true,
        message: action.payload.message,
        color: "green",
        showModal: true
      };
    });
    builder.addCase(REGISTR_USER.rejected, (state, action) => {
      return {
        ...state,
        success: false,
        message: action.payload as string,
        showModal: true,
        color: "red"
      };
    });
    builder.addCase(AUTH_USER.fulfilled, (state, action) => {
      localStorage.setItem("access_token", action.payload.token)
      return {
        ...state,
        success: true,
        token: action.payload.token,
        message: "Success",
        color: "green",
        showModal: true
      };
    });
    builder.addCase(AUTH_USER.rejected, (state, action) => {
      return {
        ...state,
        success: false,
        message: action.payload as string,
        showModal: true,
        color: "red"
      };
    });
  }
})  

export const { SET_SHOWMODAL } = slice.actions;
export default slice.reducer;

