import React from 'react'

const UpdatedComp = OriginalComp => {

    class HigherOrderComp extends React.Component {
        render() {
          return (
            <OriginalComp name="The User" /> 
          )
        }
    }
    return HigherOrderComp;
}

export default UpdatedComp