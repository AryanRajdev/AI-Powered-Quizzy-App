export const toggleSidebarAction = (state, { payload }) => {
  state.isSidebarOpen = payload === undefined ? (!state.isSidebarOpen) : (payload);
};