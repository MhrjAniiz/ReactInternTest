import { v4 as uuidv4 } from "uuid";

export const InfoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_INFO":
      return [
        ...state,
        {
          name: action.info.name,
          email: action.info.email,
          phone: action.info.phone,
          dob: action.info.dob,
          city: action.info.city,
          district: action.info.district,
          province: action.info.province,
          country: action.info.country,
          id: uuidv4(),
        },
      ];
    case "REMOVE_INFO":
      return state.filter((result) => result.id !== action.id);

    case "EDIT_USER":
      const updateUser = action.payload;

      const updateUsers = state.map((user) => {
        if (user.id === updateUser.id) {
          return updateUser;
        }
        return user;
      });
      return {
        ...state,
        users: updateUsers,
      };

    default:
      return state;
  }
};
