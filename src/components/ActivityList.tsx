import { Activity } from "../types"
import { categories } from "../data/categories"
import { useMemo } from "react"
import { PencilSquareIcon } from "@heroicons/react/24/outline"

type ActivityListProps = {
    activities: Activity[]
}

export default function ActivityList({activities}: ActivityListProps) {

    const categoryName = useMemo(() => (
        category: Activity["category"]) => categories.map( cat => cat.id === category ? cat.name : '') , [activities]
    )

    return (
        <>
            <h2 className="text-4xl font-bold text-slate-600 text-center">Activity and Food List</h2>

            {activities.map( activity => (
                <div key={activity.id} className="px-5 py-10 bg-white mt-5 flex justify-between">
                    <div className="space-y-2 relative">
                        <p className={`rounded absolute -top-8 -left-8 px-10 py-2 mx-6 text-white uppercase font-bold ${activity.category === 1 ? "bg-lime-500" : "bg-orange-500"}`}>
                            {categoryName(+activity.category)}
                        </p>

                        <p className="text-3xl font-bold py-5 capitalize">
                            {activity.name}
                        </p>

                        <p className="font-black text-4xl text-lime-500">
                            <span>
                                {activity.calories} Calories
                            </span>
                        </p>
                    </div>

                    <div className="flex gap-5 items-center">
                        <button>
                            <PencilSquareIcon 
                                className="w-8 h-8 text-gray-800" 
                            />
                        </button>
                    </div>
                </div>
            ))}
        </>
    )
}
