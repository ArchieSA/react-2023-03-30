import { createSlice } from "@reduxjs/toolkit";
import { initSlice } from '@/libs/back-actions.js'

export const dishSlice = createSlice(initSlice('dish'));
