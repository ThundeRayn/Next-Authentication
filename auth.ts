//all of our next configuration is going to exist
import NextAuth from "next-auth";
import Github from 'next-auth/providers/github';

export const {auth,handlers,signIn,signOut} = NextAuth({
    providers:[
        Github,
    ]
    //will automatically infer all the configuration varaibles
    //that we created in out environment file 
})