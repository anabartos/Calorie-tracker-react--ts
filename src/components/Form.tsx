import { useState, ChangeEvent, FormEvent, Dispatch, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import { Activity } from "../types"
import { categories } from "../data/categories"
import { ActivityActions, ActivityState } from "../reducer/activityReducer"

type FormProps = {
  dispatch: Dispatch<ActivityActions>,
  state: ActivityState
}

const initialState : Activity = {
  id: uuidv4(),
  category:1,
  name:"",
  calories:0
}

export default function Form({ dispatch, state }: FormProps) {

  const [activity, setActivity] = useState<Activity>(initialState)

  useEffect(() => {
    if (state.activeId) {
      const selectedActivity = state.activities.filter(stateActivity => stateActivity.id === state.activeId)[0]
      setActivity(selectedActivity)
    }
  }, [state.activeId])


  const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
    const isNumberField = ["category", "calories"].includes(e.target.id)
    setActivity({
      ...activity,
      [e.target.id]: isNumberField ? +e.target.value : e.target.value
    })
  }

  const isValidActivity = () => {
    const { name, calories } = activity
    return name.trim() !== "" && calories > 0
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({ type: "save-activity", payload: { newActivity: activity } })

    setActivity({
      ...initialState,
      id: uuidv4()
    })
  }

  return (
    <div>
      <form
        className="space-y-8 p-10 rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="category" className="font-extrabold">CATEGORY:</label>
          <select
            className="p-2 rounded-lg w-full"
            id="category"
            value={activity.category}
            onChange={handleChange}
          >
            {categories.map(category => (
              <option
                key={category.id}
                value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="name" className="font-extrabold">ACTIVITY:</label>
          <input id="name"
            type="text"
            className="border border-slate-300 p-2 rounded-lg"
            placeholder="ej. Food, juice, salad, exersice, bike "
            value={activity.name}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="calories" className="font-extrabold">CALORIES:</label>
          <input id="calories"
            type="text"
            className="border border-slate-300 p-2 rounded-lg"
            placeholder="Calories. ej. 300 o 500"
            value={activity.calories}
            onChange={handleChange}
          />
        </div>
        <input
          type="submit"
          className="mx-auto block w-full sm:w-64 bg-yellow-600 hover:bg-stone-800 p-2 font-bold uppercase text-white rounded-md cursor-pointer disabled:opacity-10"
          value={activity.category === 1 ? "Save Food" : "Save Exercise"}
          disabled={!isValidActivity()} />
      </form>
    </div>
  )
}
