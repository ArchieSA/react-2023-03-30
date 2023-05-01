import { createSlice } from "@reduxjs/toolkit";
import { initSlice } from '@/libs/back-actions.js'

export const restaurantSlice = createSlice(initSlice('restaurant'));
