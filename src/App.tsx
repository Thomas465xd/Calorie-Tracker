import { useEffect, useMemo } from 'react'
import Form from './components/Form'
import ActivityList from './components/ActivityList'
import CalorieTracker from './components/CalorieTracker'
import { useActivity } from './hooks/useActivity'

function App() {

    const { state, dispatch } = useActivity()

    useEffect(() => {
        localStorage.setItem('activities', JSON.stringify(state.activities))
    }, [state.activities])

    const canRestartApp = () => useMemo(() => state.activities.length > 0 , [state.activities])

    return (
        <>
            <header className="bg-lime-600 py-3">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <h1 className="text-center text-lg font-bold text-white uppercase mx-5">Calorie Tracker 💪</h1>

                    <button 
                        className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mx-5 disabled:opacity-10 disabled:cursor-not-allowed'
                        disabled={!canRestartApp()}
                        onClick={() => dispatch({type: 'restart-app'})}
                    >
                        Reset App
                    </button>
                </div>
            </header>

            <section className="bg-lime-500 py-20 px-5">
                <div className="max-w-4xl mx-auto">
                    <Form />
                </div>
            </section>

            <section className="bg-gray-800 py-10">
                <div className='max-w-4xl mx-auto'>
                    <CalorieTracker />
                </div>
            </section>

            <section className='p-10 mx-auto max-w-4xl'>
                <ActivityList />
            </section>

            <footer className='bg-gray-800 py-3'>
                <p className="text-center text-sm text-white font-bold">Created By Thomas Schrödinger</p>
            </footer>
        </>
    )
}

export default App
