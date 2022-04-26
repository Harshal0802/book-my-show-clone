import React from "react";
import { Route } from 'react-router-dom';

//Layout
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({component: Components, ...rest}) => {
    return (
        <>
            <Route 
            {...rest}
            component={(props) => (
                <DefaultLayout>
                    <Components {...props}/>
                </DefaultLayout>
            )}
          />
        </>
    );      
};

export default DefaultHOC;