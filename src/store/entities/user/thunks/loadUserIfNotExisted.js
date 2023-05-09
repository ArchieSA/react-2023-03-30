import { selectUserIds } from "@/store/entities/user/selectors";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (userId, {getState, rejectWithValue}) => {

  if (selectUserIds(getState()).length) {
    return rejectWithValue;
  }

  const responce = await fetch("http://localhost:3001/api/users/")
    
  return await responce.json();
  }
); 
