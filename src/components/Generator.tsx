"use client"

import { generatePassword } from "@/utils/generatePass";
import { useEffect, useState } from "react";

const Generator = () => {

    const [password, setPassword] = useState<string>();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPassword(generatePassword())
    }

    const copyToClipboard = () => {
        password && navigator.clipboard.writeText(password)
    }

    useEffect(() => {
        setPassword(generatePassword());
    }, [])

    return (
        <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto" onSubmit={handleSubmit}>
            {/* <input type="text" id="password" name="password" placeholder={password} readOnly className="flex-1 rounded-xl text-xl py-4 px-6 border shadow-md" /> */}
            <div className="flex items-center flex-1 rounded-xl text-xl py-4 px-6 border shadow-md">
                <input type="text" id="password" name="password" placeholder={password} readOnly className="flex-1 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
                <svg onClick={copyToClipboard} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-copy cursor-pointer"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
            </div>
            <button type="submit" className="rounded-xl border-1 bg-primary py-4 px-6 text-xl text-secondary font-semibold">
                Generate
            </button>
        </form>
    )
}

export default Generator