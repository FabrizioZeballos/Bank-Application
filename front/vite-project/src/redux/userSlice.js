import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  userAppointments: [],
  intendedRoute: null,
  selectedAction: null,
  selectedDate: null,
  selectedTime: null,
  welcome: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authenticateUser: (state, action) => {
      state.userData = action.payload;
    },
    logOut: (state, action) => {
      state.userData = {};
    },
    setAppointments: (state, action) => {
      state.userAppointments = action.payload;
    },
    cancelAppointment: (state, action) => {
      const appointmentIndex = state.userAppointments.findIndex(
        (appointment) => appointment.id === action.payload
      );

      if (appointmentIndex !== -1) {
        state.userAppointments[appointmentIndex].status = "cancelled";
      }
    },
    setUserPicture: (state, action) => {
      state.userData.user.profilePicture = action.payload;
    },
    setIntendedRoute: (state, action) => {
      state.intendedRoute = action.payload;
    },
    setSelectedAction: (state, action) => {
      state.selectedAction = action.payload;
    },
    setDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    setTime: (state, action) => {
      state.selectedTime = action.payload;
    },
    setWelcome: (state, action) => {
      state.welcome = action.payload;
    },
  },
});

export const {
  authenticateUser,
  logOut,
  setIntendedRoute,
  setAppointments,
  cancelAppointment,
  setUserPicture,
  setSelectedAction,
  setDate,
  setTime,
  setWelcome,
} = userSlice.actions;
export default userSlice;
