import React from 'react';
import { UserContext } from '../../userContext';


const ProtectedRoute = ({children}) => {
  const { login } = React.useContext(UserContext);

  

  if(login === true) {
    return children
  } else {
    return <> </>
  }
}

export default ProtectedRoute
