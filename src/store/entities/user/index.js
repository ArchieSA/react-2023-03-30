import { createSlice } from "@reduxjs/toolkit";
import { initSlice } from '@/libs/back-actions.js'

export const userSlice = createSlice(initSlice('user'));
