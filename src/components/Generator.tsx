"use client";

import { useEffect, useState } from "react";
import { cn } from "@/libs/utils";
import Password from "@/utils/generatePass";

const Generator = () => {
  const [password, setPassword] = useState<string>();
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const [hasLowercase, setHasLowercase] = useState<boolean>(true);
  const [hasUppercase, setHasUppercase] = useState<boolean>(true);
  const [hasNumbers, setHasNumbers] = useState<boolean>(true);
  const [hasSymbols, setHasSymbols] = useState<boolean>(true);

  const generatePassword = () => {
    const options = {
      length: 12,
      lowercase: hasLowercase,
      uppercase: hasUppercase,
      numbers: hasNumbers,
      symbols: hasSymbols,
    };
    let password = new Password({ ...options });

    setPassword(password.generate());
    setIsCopied(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    generatePassword();
  };

  const copyToClipboard = async () => {
    if (password) {
      await navigator.clipboard.writeText(password);
      setIsCopied(true);
    }
  };

  useEffect(() => {
    generatePassword();
  }, [hasLowercase, hasUppercase, hasNumbers, hasSymbols]);

  return (
    <>
      <form
        className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto"
        onSubmit={handleSubmit}
      >
        <div
          className={cn(
            "flex items-center flex-1 rounded-xl text-xl py-4 px-6 border shadow-md",
            isCopied ? "border-green-500" : ""
          )}
        >
          <input
            type="text"
            id="password"
            name="password"
            placeholder={password}
            readOnly
            className={cn("flex-1 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none", isCopied ? "placeholder:text-green-500" : "")}
          />
          <svg
            onClick={copyToClipboard}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn(
              "lucide lucide-copy cursor-pointer",
              isCopied ? "text-green-500" : ""
            )}
          >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
        </div>
        <button
          type="submit"
          className="rounded-xl border-1 bg-primary py-4 px-6 text-xl text-white font-semibold"
        >
          Generate
        </button>
      </form>
      <div className="flex flex-wrap mx-auto justify-center gap-4">
        <div className="space-x-1 flex items-center">
          <input
            type="checkbox"
            name="uppercase"
            id="uppercase"
            defaultValue={1}
            defaultChecked
            className="w-4 h-4"
            onChange={() => setHasUppercase(!hasUppercase)}
          />
          <label htmlFor="uppercase" className={cn("cursor-pointer font-base", hasUppercase ? "text-primary" : "text-gray-500/70")}>Uppercase</label>
        </div>
        <div className="space-x-1 flex items-center">
          <input
            type="checkbox"
            name="lowercase"
            id="lowercase"
            defaultValue={1}
            defaultChecked
            className="w-4 h-4"
            onChange={() => setHasLowercase(!hasLowercase)}
          />
          <label htmlFor="lowercase" className={cn("cursor-pointer font-base", hasLowercase ? "text-primary" : "text-gray-500/70")}>Lowercase</label>
        </div>
        <div className="space-x-1 flex items-center">
          <input
            type="checkbox"
            name="numbers"
            id="numbers"
            defaultValue={1}
            defaultChecked
            className="w-4 h-4"
            onChange={() => setHasNumbers(!hasNumbers)}
          />
          <label htmlFor="numbers" className={cn("cursor-pointer font-base", hasNumbers ? "text-primary" : "text-gray-500/70")}>Numbers</label>
        </div>
        <div className="space-x-1 flex items-center">
          <input
            type="checkbox"
            name="symbols"
            id="symbols"
            defaultValue={1}
            defaultChecked
            className="w-4 h-4"
            onChange={() => setHasSymbols(!hasSymbols)}
          />
          <label htmlFor="symbols" className={cn("cursor-pointer font-base", hasSymbols ? "text-primary" : "text-gray-500/70")}>Symbols</label>
        </div>
      </div>
    </>
  );
};

export default Generator;
