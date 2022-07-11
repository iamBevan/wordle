import React, { createContext, Dispatch, ReactNode, useReducer } from "react";

export enum ActionTypes {
    SetGuess = "SET_GUESSES",
    SetCurrentGuess = "DELETE_PRODUCT",
    SetGameover = "ADD_PRODUCT",
}

type ContextProviderProps = {
    children: ReactNode;
};

type InitialState = {
    guesses: string[];
    currentGuess: string;
    gameOver: boolean;
};

const initialState = {
    currentGuess: "",
    guesses: Array(5).fill(null),
    gameOver: false,
};

export const AppContext = createContext<{
    state: InitialState;
    dispatch: Dispatch<any>;
}>({
    state: initialState,
    dispatch: () => null,
});

const reducer = (
    state: InitialState,
    action: { type: ActionTypes; payload: any }
) => {
    switch (action.type) {
        case ActionTypes.SetGuess:
            return {
                ...state,
                guesses: action.payload,
            };
        case ActionTypes.SetCurrentGuess:
            return {
                ...state,
                currentGuess: action.payload,
            };
        case ActionTypes.SetGameover:
            return {
                ...state,
                gameOver: action.payload,
            };
        default:
            throw new Error();
    }
};

export const ContextProvider: React.FC<ContextProviderProps> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};
