import React from 'react';

const alert=(props)=>{
    const assignedClasses = ["alert", props.class]
    return(
        <div className={assignedClasses.join(" ")}>
            {props.children}
        </div>
  )
}

export default alert;
