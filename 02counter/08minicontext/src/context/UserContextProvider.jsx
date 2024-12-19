import React, { Children, useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({Children}) => {
    const [user, setUSer] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUSer}}>
            {Children}
            </UserContext.Provider>
    )
}

export default UserContextProvider;