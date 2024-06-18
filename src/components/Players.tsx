import { User } from "../types/user";



type PlayersProps = {
    showCards: Boolean,
    user: User
}

const Players = ({ showCards, user }: PlayersProps) => {


    const color = user.vote != 0 && !showCards ? "bg-blue-500" : "bg-gray-300";
    const NoPlayer = () => {
        return (

            <div className="flex flex-col gap-3 items-center">
                <div className="
        p-2 rounded bg-gray-100 outline-gray-200 outline-dashed flex 
        items-center justify-center font-bold card">
                </div>

                <span className="text-xs text-gray-200">...</span>
            </div>
        )
    }
    return (

        <>
            <div className="grid gap-3 auto-cols-auto grid-flow-col ">
                <div className="flex flex-col gap-3 items-center">
                    <div className={"p-2 rounded " + color + " flex items-center justify-center font-bold card"}>
                        {<span className="text-xl">{showCards ? user.vote : ""}</span>}

                    </div>

                    <span className="text-xs text-ellipsis overflow-hidden whitespace-nowrap name">
                        {user.username}
                    </span>
                </div>
            </div >
        </>

    )
}


export default Players;