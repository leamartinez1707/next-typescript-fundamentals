'use client'

import { useState } from "react"
import { setCookie } from "cookies-next";

interface TabBarProps {
    currentTab?: number
    tabOptions?: number[]
}
export const TabBar = ({ currentTab = 1, tabOptions = [1, 2, 3, 4] }: TabBarProps) => {
    const [setselected, setSetselected] = useState(currentTab)

    const handleTabChange = (tab: number) => {
        setSetselected(tab);
        setCookie('selectedTab', tab.toString());
    }

    return (
        <div className={`grid w-full ${'grid-cols-' + tabOptions.length} space-x-2 rounded-xl bg-gray-800 p-2 text-white`}>
            {
                tabOptions.map((tab) => (
                    <div key={tab}>
                        <input
                            type="radio"
                            onChange={() => { }}
                            checked={setselected === tab}
                            id={tab.toString()} className="peer hidden" />
                        <label
                            onClick={() => handleTabChange(tab)}
                            className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white transition-all duration-200">
                            {tab}
                        </label>
                    </div>
                ))
            }

        </div>
    )
}