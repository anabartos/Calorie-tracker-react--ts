import { useMemo, Dispatch} from "react"
import { Activity } from "../types"
import { categories } from "../data/categories"
import { PencilSquareIcon, XCircleIcon, } from "@heroicons/react/24/outline"
import { ActivityActions } from "../reducer/activityReducer"

type ActivitiListProps = {
    activities: Activity[],
    dispatch:Dispatch<ActivityActions>
}

export default function ActivityList({activities, dispatch} : ActivitiListProps) {

  const categoryName = useMemo(() => 
    (category: Activity["category"]) => categories.map( cat => cat.id === category ? cat.name : "") 
  , [activities])

  const isEmptyActivities = useMemo(() => activities.length === 0, [activities])
  return (
    <>
        <h2 className="text-3xl font-bold text-center">Food and Activities</h2>
        {isEmptyActivities ? 
          <p className="text-center my-5">No activies yet</p> : 
          activities.map(activity => (
            <div key={activity.id}
                 className="px-5 py-10 bg-white mt-5 flex justify-between shadow-sm">
                 <div className="space-y-2 relative">
                    <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${activity.category === 1 ? "bg-sky-950" : "bg-fuchsia-900"}`}>
                      {categoryName(+activity.category)}
                    </p>
                    <p className="text-2xl font-bold pt-5">{activity.name}</p>
                    <p className="font-black text-3xl text-fuchsia-500">
                        {activity.calories}{""} <span>Calories</span>
                    </p>
                 </div>
                 <div className="flex-gap-5 items-center">
                    <button
                      onClick={() => dispatch({ type: "set-activeId", payload: {id: activity.id}})}
                    >
                      <PencilSquareIcon
                      className="h-8 w-8 text-sky-950"
                      />
                    </button>
                    <button
                      onClick={() => dispatch({ type: "delete-activity", payload: {id: activity.id}})}
                    >
                      <XCircleIcon
                      className="h-8 w-8 text-fuchsia-800"
                      />
                    </button>
                 </div>
            </div>
        ))}
    </>
  )
}

