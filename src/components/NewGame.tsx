import { useNavigate } from "react-router-dom";

const NewGame = () => {


    const navigate = useNavigate();
    const handleNewGameClick = () => {
        navigate("/game");

    }

    return (

        <div className="mx-auto max-w-7xl py-12 sm:px-6 lg:px-8 min-h-screen flex items-center">
            <form className="mx-auto max-w-2xl" action="game.html">
                <input type="text" name="room" id="room" className="hidden" />

                <div className="overflow-hidden bg-blue-100 sm:rounded-lg p-10 flex flex-col gap-3">
                    <label className="sr-only">Name</label>
                    <input type="text" id="username"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter your name" />

                    <button type="button" id="newgame"
                        onClick={handleNewGameClick}
                        className="flex justify-center items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor" aria-hidden="true">
                            <path
                                d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>

                        New Game
                    </button>
                </div>
            </form>

        </div>
    )
}

export default NewGame;