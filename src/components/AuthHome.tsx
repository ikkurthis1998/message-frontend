import { useAuth0 } from "@auth0/auth0-react";
import ChatBox from "./ChatBox";


const AuthHome = () => {

    const { logout, user } = useAuth0();

    // const [nameProcess, setNameProcess] = useState(false);
    // const [userName, setuserName] = useState("");

    // const setName = () => {
    //     setNameProcess(true);
    // }

    // const saveName = () => {
        
    //     setNameProcess(false);
    // }

    if (user) {
        return (
            <div className="flex flex-col justify-start items-center w-screen h-screen rounded-lg py-10 box-border bg-blue">
                {/* {nameProcess ? <input type="text" defaultValue={user.name} onChange={(e) => setuserName(e.target.value)} /> : <p>{user.name}</p>}
                {nameProcess ? <button onClick={() => saveName()}>Save</button> : <button onClick={() => setName()}>update name</button>} */}
                <p className="font-bold text-2xl">{user.name}</p>
                <button onClick={() => logout({ returnTo: "http://localhost:3001" })}>Log Out</button>
                {/* <div className="bg-white flex flex-col justify-start items-center mobile-sm:w-full tablet:w-3/12 rounded-lg">
                    <div>
                        <img src={user.picture} alt={user.name} />
                        <h2>{user.nickname}</h2>
                        <p>{user.email}</p>
                        <button onClick={() => logout({ returnTo: "http://localhost:3001" })}>Log Out</button>
                    </div>
                    <div className="flex flex-col">
                        <div>
                            <img
                                alt="pg"
                                src='https://firebasestorage.googleapis.com/v0/b/roc8-careers.appspot.com/o/07-Leadership.png?alt=media&token=aaf3da73-f680-47b6-b5da-11894f6a27d9'
                            />
                            <h1 className="text-5xl cursor-pointer">Public</h1>
                        </div>
                    </div>
                </div> */}
                {/* <div className="bg-white tablet:flex flex-col justify-start rounded-lg tablet:w-8/12 mobile-sm:hidden">
                    <input type="text" />
                    <button>send</button>
                </div> */}
                <ChatBox />
            </div>
        );
    }
    
    return null

}

export default AuthHome;