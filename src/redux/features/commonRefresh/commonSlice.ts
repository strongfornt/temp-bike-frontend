import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type TInitialState = {
    refreshObj: any;
}
const initialState:TInitialState = {
    refreshObj: {}
}


const commonSlice = createSlice({
    name:'common',
    initialState,
    reducers: {
        setRefreshObj: (state, action) => {
            state.refreshObj = action.payload;
        }
    }
}) 

export const { setRefreshObj,  } = commonSlice.actions;

export default commonSlice.reducer;

export const useRefreshObj = (state: RootState) => state.common.refreshObj