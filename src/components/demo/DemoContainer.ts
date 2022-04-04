import React, { Dispatch } from "react"
import { Demo } from "./Demo"
import { compose } from "redux"
import { connect } from "react-redux"
import { withAuth } from "./../../hoc/auth"
import type { State } from "./../../types"

const mapStateToProps = (state: State) => {
    return ({
        /* Place your dispatch fields */
    })
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return ({
        /* Place your dispatch functions */
    })
}

export default compose(withAuth, connect(mapStateToProps, mapDispatchToProps))(Demo)