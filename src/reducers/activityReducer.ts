import { Activity } from "../types";

// Define las posibles acciones que se pueden realizar sobre las actividades
export type ActivityActions = {
    // Aquí puedes definir diferentes tipos de acciones, como ADD_ACTIVITY, REMOVE_ACTIVITY, etc.
    // Por ejemplo:
    // type: 'ADD_ACTIVITY';
    // payload: Activity;
}

// Define el tipo de estado que manejará el reducer
type ActivityState = {
    activities: Activity[];  // Lista de actividades
}

// Estado inicial del reducer, comienza con una lista vacía de actividades
export const initialState: ActivityState = {
    activities: [],
}

// Reducer que maneja el estado de las actividades
export const activityReducer = (
    state: ActivityState = initialState,  // El estado inicial por defecto es `initialState`
    action: ActivityActions               // Acción que define cómo modificar el estado
) => {
    // Aquí es donde implementarás la lógica para actualizar el estado
    // basado en el tipo de acción. Por ejemplo:

    // switch (action.type) {
    //     case 'ADD_ACTIVITY':
    //         return {
    //             ...state,
    //             activities: [...state.activities, action.payload],
    //         };
    //     case 'REMOVE_ACTIVITY':
    //         return {
    //             ...state,
    //             activities: state.activities.filter(activity => activity.id !== action.payload.id),
    //         };
    //     default:
    //         return state;
    // }

    // Por ahora, el reducer no hace nada y devuelve el estado actual
    return state;
}
