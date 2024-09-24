import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline"
import { useActivity } from "../hooks/useActivity"

export default function ActivityList() {

    const { state, dispatch, categoryName, isEmptyActivities } = useActivity()

    return (
        <>
            <h2 className="text-4xl font-bold text-slate-600 text-center">Activities & Food List</h2>

            {isEmptyActivities ? (
                <p className="text-center">No activities yet...</p>
            ) : (
                state.activities.map(activity => (
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
                            <button onClick={() => dispatch({ type: "set-activeId", payload: { id: activity.id } })}>
                                <PencilSquareIcon className="w-8 h-8 text-yellow-500" />
                            </button>

                            <button onClick={() => dispatch({ type: "remove-activity", payload: { id: activity.id } })}>
                                <XCircleIcon className="w-8 h-8 text-red-800" />
                            </button>
                        </div>
                    </div>
                ))
            )}
        </>
    )
}
