import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type IAuthorization = {
  email: string;
  password: string;
};
export type IResume = {
  name: string;
  avatar: string;
  profession: string;
  description: string;
  file: string;
}
export type IPost = {
  header: string;
  date: string;
  category: string;
  description: string;
}
export type IWorks = {
  header: string;
  image: string;
  date: string;
  category: string;
  description: string;
}
export type IData = {
  resume: IResume;
  posts: IPost[];
  works: IWorks[];
}

export interface IInitialState {
  transition: boolean;
  success: boolean;
  message: string;
  token: string | null;  
  showModal: boolean;
  user: IAuthorization;
  data: IData;
}
const state: IInitialState = {
  transition: false,
  success: false,
  message: "",
  token: localStorage.getItem("access_token"),
  showModal: false,
  user: { email: "", password: "" },
  data: {
    resume: {
      name: "",
      avatar: "",
      profession: "",
      description: "",
      file: ""
    },
    posts: [],
    works: []
  },
};
export const REGISTR_USER = createAsyncThunk<
  { success: boolean, message: string },
  IAuthorization,
  {
    rejectValue: string;
  }
>("page/REGISTR_USER", async ({ email, password }, { rejectWithValue }) => {
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
  { token: string },
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
export const FETCH_ALL_DATA = createAsyncThunk<
  IData,
  {
    rejectValue: string;
  }
>("page/FETCH_ALL_DATA", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch("http://localhost:5000/auth/login", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await response.json();
    if (data) {
      return data.data as IData;
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
    },
    SET_USER_DATA: (state, action) => {
      state.transition = true
      state.user = { email: action.payload.email, password: action.payload.password }
    },
    SET_TRANSISION: (state, action) => {
      state.transition = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(REGISTR_USER.fulfilled, (state, action) => {
      return {
        ...state,
        success: true,
        message: action.payload.message,
        showModal: true,
      };
    });
    builder.addCase(REGISTR_USER.rejected, (state, action) => {
      return {
        ...state,
        success: false,
        message: action.payload as string,
        showModal: true,
      };
    });
    builder.addCase(AUTH_USER.fulfilled, (state, action) => {
      localStorage.setItem("access_token", action.payload.token)
      return {
        ...state,
        success: true,
        token: action.payload.token,
        message: "Success",
        showModal: true
      };
    });
    builder.addCase(AUTH_USER.rejected, (state, action) => {
      return {
        ...state,
        success: false,
        message: action.payload as string,
        showModal: true,
      };
    });
    builder.addCase(FETCH_ALL_DATA.fulfilled, (state, action) => {
      return {
        ...state,
        success: true,
        data: action.payload
      };
    });
  }
})

export const { SET_SHOWMODAL, SET_USER_DATA, SET_TRANSISION } = slice.actions;
export default slice.reducer;

