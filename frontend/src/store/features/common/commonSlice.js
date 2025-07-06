import { createSlice } from "@reduxjs/toolkit";
import { commomInitialState } from "./initialState";
import * as Actions from "./actions";

export * from "./selectors";

const commonSlice = createSlice({
  name: "teacher-common",
  initialState: commomInitialState,
  reducers: {
    toggleSidebar: Actions.toggleSidebarAction,
    setCommonKey: Actions.setCommonKeyAction,
  },
});

export const { toggleSidebar, setCommonKey } = commonSlice.actions;

export default commonSlice.reducer;