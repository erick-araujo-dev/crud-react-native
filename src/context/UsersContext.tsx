import React, { Children, createContext, ReactNode, useReducer } from "react"
import user from "../data/user"

const UsersContext = createContext({})

interface UsersProviderProps {
    children: ReactNode
}

const initialState = { users: user };

const ActionTypes = {
    UPDATE_USER: "UPDATE_USER",
    ADD_USER: "ADD_USER",
    DELETE_USER: "DELETE_USER",
  };

export const UsersProvider: React.FC<UsersProviderProps> = ({ children }) => {
    const reducer = (state: any, action: any) => {
        console.warn(action);
      
        switch (action.type) {
          case ActionTypes.ADD_USER:
            const user = action.payload;
            user.id = Math.random()
            return { ...state, users: [...state.users, user] };
      
          case ActionTypes.DELETE_USER:
            const userIdToDelete = action.payload.userId;
            const updatedUsers = state.users.filter((u: any) => u.id !== userIdToDelete);
            return { ...state, users: updatedUsers };
      
            case ActionTypes.UPDATE_USER:
              const updatedUser = action.payload;
              const updatedUsersList = state.users.map((u: any) =>
                u.id === updatedUser.id ? updatedUser : u
              );
              return { ...state, users: updatedUsersList };

          default:
            return state;
        }
      };
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <UsersContext.Provider value={{
            state, dispatch
        }}>
            {children}
        </UsersContext.Provider>
    )
}
export default UsersContext;
