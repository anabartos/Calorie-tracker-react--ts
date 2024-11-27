import { useMemo, Dispatch } from "react"
import { Activity } from "../types"
import { categories } from "../data/categories"
import { PencilSquareIcon, XCircleIcon, } from "@heroicons/react/24/outline"
import { ActivityActions } from "../reducer/activityReducer"

type ActivitiListProps = {
  activities: Activity[],
  dispatch: Dispatch<ActivityActions>
}

export default function ActivityList({ activities, dispatch }: ActivitiListProps) {

  const categoryName = useMemo(() =>
    (category: Activity["category"]) => categories.map(cat => cat.id === category ? cat.name : "")
    , [activities])

  const isEmptyActivities = useMemo(() => activities.length === 0, [activities])
  return (
    <>
      <h2 className="text-3xl font-bold text-stone-800 text-center">FOOD & ACTIVITIES</h2>
      {isEmptyActivities ?
        <p className=" text-stone-700 text-center my-5">No activies yet</p> :
        activities.map(activity => (
          <div key={activity.id}
            className="px-5 py-10  mt-5 flex justify-between shadow-sm">
            <div className="space-y-2 relative">
              <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${activity.category === 1 ? "bg-rose-400" : "bg-yellow-600"}`}>
                {categoryName(+activity.category)}
              </p>
              <p className="text-2xl text-stone-700 font-bold pt-5">{activity.name}</p>
              <p className="font-black  text-stone-700 text-3xl">
                {activity.calories}{""} <span>Calories</span>
              </p>
            </div>
            <div className="flex-gap-5 items-center">
              <button
                onClick={() => dispatch({ type: "set-activeId", payload: { id: activity.id } })}
              >
                <PencilSquareIcon
                  className="h-8 w-8 text-stone-700"
                />
              </button>
              <button
                onClick={() => dispatch({ type: "delete-activity", payload: { id: activity.id } })}
              >
                <XCircleIcon
                  className="h-8 w-8 text-rose-400
                      "
                />
              </button>
            </div>
          </div>
        ))}
    </>
  )
}

