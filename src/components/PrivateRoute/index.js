import { navigate } from 'gatsby-link';
import React, { useState,useEffect } from 'react'


function PrivateRoute({ children }) {

    const [showChildren, setShowChildren] = useState(false);

    useEffect(() => {
        if (!sessionStorage.getItem("isLoged"))
            navigate('/admin/awtq-login')
        else
            setShowChildren(true);
    }, [])

    return showChildren ? <>{children}</> : <></>


}

export default PrivateRoute;