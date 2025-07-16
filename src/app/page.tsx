"use server";

import {auth} from "@/auth";
import SignInButton from "./components/SignInButton";
//import Image from "next/image";
//import Link from "next/link";

export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <main>
      <h1>You are not signed in</h1>
      <SignInButton/>

      {/*<Link href="/users">users</Link>*/}
    </main>
  );
}
