export namespace SentData {}

export namespace ReceivedData {}

export namespace Utils {}

export namespace StateComponenents {
    export interface App {
        initialized: boolean
    }
}

export interface State {
    app: StateComponenents.App
}

export namespace Components {
    export namespace App {
        export interface AppType {
            initialized: boolean
            initialize: () => void
        }
    }
}

export namespace Reducers {
    export namespace AppReducer {
        export interface IAppReducer {
            type: string
        }

        export const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";
    }
}

export namespace HOCs {
    export interface WithAuth {
        isAuthed: boolean
    }
}