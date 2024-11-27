import { useReducer, useEffect, useMemo } from "react"
import Form from "./components/Form"
import ActivityList from "./components/ActivityList"
import { activityReducer, initialState } from "./reducer/activityReducer"
import CalorieTracker from "./components/CalorieTracker"

function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(state.activities))
  }, [state.activities])

  const canRestartApp = () => useMemo(() => state.activities.length > 0, [state.activities])

  return (
    <>
      <header className="bg-offWhite  py-5 px-3 shadow-2xl">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-center text-xl font-extrabold text-stone-700 uppercase">CALORIE TRACKERr</h1>
          <button className="bg-yellow-600 hover:bg-stone-800 p-2 font-bold uppercase text-white cursor-pointer rounded-lg text-sm disabled:opacity-10"
            disabled={!canRestartApp()}
            onClick={() => dispatch({ type: "restart-app" })}>Restart App</button>
        </div>
      </header>
      <section 
  className="h-screen w-full bg-no-repeat bg-center bg-cover"
  style={{
    backgroundImage: "url('/bg-tracker.jpg')",
  }}
>
  <div className="max-w-4xl mx-auto">
          <Form
            dispatch={dispatch}
            state={state}
          />
        </div>
      </section>
      <section className="bg-yellow-700 py-10">
        <div className="max-w-4xl mx-auto">
          <CalorieTracker
            activities={state.activities}
          />
        </div>
      </section>
      <section className="bg-offWhite p-10 mx-auto max-w-4xl">
        <ActivityList
          activities={state.activities}
          dispatch={dispatch}
        />
      </section>
    </>
  )
}

export default App
