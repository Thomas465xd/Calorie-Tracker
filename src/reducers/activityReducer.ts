import { Activity } from "../types";

// Define las posibles acciones que se pueden realizar sobre las actividades
export type ActivityActions = 
    // Aquí puedes definir diferentes tipos de acciones, como ADD_ACTIVITY, REMOVE_ACTIVITY, etc.
    // Por ejemplo:
    // type: 'ADD_ACTIVITY';
    // payload: Activity;

    { type: 'save-activity', payload: { newActivity: Activity } } |
    { type: 'set-activeId', payload: { id: Activity["id"] } } |
    { type: 'remove-activity', payload: { id: Activity["id"] } } |
    { type: 'restart-app'}


// Define el tipo de estado que manejará el reducer
export type ActivityState = {
    activities: Activity[],  // Lista de actividades
    activeId: Activity["id"]
}

const localStorageActivities = () : Activity[] => {
    const activities = localStorage.getItem('activities')
    return activities ? JSON.parse(activities) : []
}

// Estado inicial del reducer, comienza con una lista vacía de actividades
export const initialState: ActivityState = {
    activities: localStorageActivities(),
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
        let updatedActivities : Activity[] = []

        if(state.activeId) {
            
            updatedActivities = state.activities.map( 
                activity => activity.id === state.activeId ? action.payload.newActivity : activity
            )

        } else {
            updatedActivities = [...state.activities, action.payload.newActivity]
        }
        
        return {
            ...state, // state.activities.push(action.payload.newActivity)
            activities: updatedActivities,
            activeId: ''
        }
    }

    if(action.type === "set-activeId") {

        return {
            ...state, 
            activeId: action.payload.id
        }
    }

    if(action.type == "remove-activity") {

        return {
            ...state, 
            activities: state.activities.filter(activity => activity.id !== action.payload.id)
        }
    }

    if(action.type === "restart-app") {
        return {
            activities: [],
            activeId: ''
        }
    }

    return state
}
