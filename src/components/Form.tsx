import { useState, ChangeEvent, FormEvent, Dispatch, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import type { Activity } from "../types"
import { categories } from "../data/categories"
import { ActivityActions, ActivityState } from "../reducers/activityReducer"

type FormProps = {
    dispatch: Dispatch<ActivityActions>
    state: ActivityState
}

const initialState: Activity = {
    id: uuidv4(),
    category: 1,
    name: '',
    calories: 0
}

export default function Form({dispatch, state} : FormProps) {

    const [activity, setActivity] = useState<Activity>(initialState)

    useEffect(() => {
        if(state.activeId) {
            const selectedActivity = state.activities.filter( stateActivity => stateActivity.id === state.activeId)[0]
            setActivity(selectedActivity)
        }
    }, [state.activeId])

    const handleChange = (evento: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {

        const { id, value } = evento.target;

        const isNumberField = ['category', 'calories'].includes(evento.target.id)

        setActivity({
            ...activity,
            [id]: isNumberField ? (value === '' ? '' : +value) : value,
        })
    }

    const isValidActivity = () => {
        const { name, calories} = activity
        return name.trim() !== '' && calories > 0
    }

    const handleSubmit = (evento: FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        dispatch({type: "save-activity", payload: {newActivity: activity}})

        setActivity({
            ...initialState, 
            id: uuidv4()
        })
    }

    return (
        <form 
            className="space-y-5 bg-white shadow p-10 rounded-lg"
            onSubmit={handleSubmit}
        >
            <div className="gird grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Category: </label>
                <select 
                    name="" 
                    id="category" 
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    value={activity.category}
                    onChange={handleChange}
                >
                    {categories.map(category => (
                        <option 
                            key={category.id} 
                            value={category.id}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-bold">Activity: </label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white" 
                    placeholder="Example: Apple, Banana, Exercise, Volleyball, ..."
                    value={activity.name}
                    onChange={handleChange}
                />
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold">Calories: </label>
                <input 
                    type="number" 
                    name="calories" 
                    id="calories" 
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white" 
                    placeholder="Calories. Example 300 or 500"
                    value={activity.calories === 0 ? '' : activity.calories}
                    onChange={handleChange}
                />
            </div>

            <input 
                type="submit" 
                className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white disabled:opacity-10"
                value={activity.category === 1 ? 'Add Food' : 'Add Exercise'}
                disabled={!isValidActivity()}
            />
        </form>
    )
}
