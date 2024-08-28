import { categories } from "../data/categories"

export default function Form() {
    return (
        <form action="" className="space-y-5 bg-white shadow p-10 rounded-lg">
            <div className="gird grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Category: </label>
                <select name="" id="category" className="border border-slate-300 p-2 rounded-lg w-full bg-white">
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
                <label htmlFor="activity" className="font-bold">Activity: </label>
                <input 
                    type="text" 
                    name="activity" 
                    id="activity" 
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white" 
                    placeholder="Example: Apple, Banana, Exercise, Volleyball, ..."
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
                />
            </div>

            <input 
                type="submit" 
                className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white"
                value="Save Food or Exercise"
            />
        </form>
    )
}
