export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectUser = state => state.user.user;

export const selectIsLoggedIn = state => state.user.isLoggedIn;

export const selectRefreshing = state => state.user.isRefreshing;
