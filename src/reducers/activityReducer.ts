import { Activity } from "../types";

// Define las posibles acciones que se pueden realizar sobre las actividades
export type ActivityActions = 
    // Aquí puedes definir diferentes tipos de acciones, como ADD_ACTIVITY, REMOVE_ACTIVITY, etc.
    // Por ejemplo:
    // type: 'ADD_ACTIVITY';
    // payload: Activity;

    { type: 'save-activity', payload: { newActivity: Activity } } |
    { type: 'set-activeId', payload: { id: Activity["id"] } } 


// Define el tipo de estado que manejará el reducer
type ActivityState = {
    activities: Activity[],  // Lista de actividades
    activeId: Activity["id"]
}

// Estado inicial del reducer, comienza con una lista vacía de actividades
export const initialState: ActivityState = {
    activities: [],
    activeId: ''
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

    if(action.type === 'save-activity') {
        // Este código maneja la lógica para actualizar el state
        
        
        return {
            ...state, // state.activities.push(action.payload.newActivity)
            activities: [...state.activities, action.payload.newActivity]
        }
    }

    if(action.type === "set-activeId") {

        return {
            ...state, 
            activeId: action.payload.id
        }
    }

    return state
}
