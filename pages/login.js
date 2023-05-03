import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const login = () => {
    const {data:session} = useSession();
    if(session){
        return(
            <div>
                <p> Welcome, {session.user.name},  {session.user.email} </p>
                <button onClick={()=> signOut() } className="btn btn-success">SignOut</button>
                <Link href={'/'} > Back to Home Page</Link>
            </div>
        )
    }else{
        return(
            <div>
                <p> You are not signIn</p>
                <button onClick={()=> signIn('google') } className="btn btn-success mr-4"> SignIn with google </button>
                <button onClick={()=> signIn('github') } className="btn btn-success mr-4"> SignIn with GitHub </button>
                <Link href={'/'} > Back to Home Page</Link>
            </div>
        )
    }
};

export default login;