import react, { useState } from 'react'
import GameOver from './GameOver';
import Card from './Card';
import "./game.css";
import Players from './Players';

const GameBoard = () => {


    const setPoints = () => {

    }

    const dispatch = (settings) => {

    }

    const handleCancel = () => {

    }

    const styles = {
        width: "35vw",
        minWidth: "300px",
    };
    return (
        <>
            <div className="fixed top left p-2 flex gap-2" >
                <input type="text" id="share"
                    className="block flex-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    readonly />

                <button type="button" id="newgame"
                    className="flex justify-center items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                    <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true">
                        <path
                            d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg>

                    New Game
                </button>
            </div>

            <div className="mx-auto max-w-7xl py-12 sm:px-6 lg:px-8 min-h-screen flex gap-3 flex-col items-center justify-center">
                <Players showCards={false} user={{ vote: 32, username: "usman" }} />
                <div className="rounded p-10 bg-blue-100">
                    <button type="button" className="
                    inline-flex items-center rounded-md border border-transparent 
                    bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm 
                    hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                    bg-blue-300 hover:bg-blue-300
                " id="showCards" disabled>
                        Waiting for a vote...
                    </button>
                </div>

                <div className="flex gap-3">
                    <b>Average:</b>
                    <span id="average" className="text-md font-bold">0</span>
                </div>
            </div>

            <div x-data class="w-screen p-2 bg-gray-200 gap-3 fixed bottom-0 flex items-center justify-center">
                <div className="gap-3 flex items-center justify-center" id="points">
                    <span>Loading...</span>
                </div>

                <i role="button" className="fa-solid fa-gear" onClick={dispatch('settings')}></i>
            </div >

            <div className="relative z-10 hidden" x-data="{open: false}" aria-labelledby="modal-title" role="dialog" aria-modal="true"
                ll >
                <div x-show="open" className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div x-show="open" className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div
                            className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                            <div>
                                <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-title">
                                    Points
                                </h3>
                                <div className="mt-2">
                                    <div className="mt-1">
                                        <input type="text" nameName="points" id="points"
                                            class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            x-ref="points" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                                <button type="button"
                                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                                    onClick={setPoints}
                                >Save</button>
                                <button type="button"
                                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                                    onClick={handleCancel}>Cancel</button>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        </>
    );

}

export default GameBoard;