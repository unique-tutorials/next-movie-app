"use client"
import React, { useState, useEffect } from 'react'
import { CiDark, CiLight } from 'react-icons/ci'
import { useTheme } from 'next-themes'

const ThemeComp = () => {
    const [mounted, setMounted] = useState(false)
    const { systemTheme, theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    const themeMode = theme === "system" ? systemTheme : theme
    console.log(themeMode, "themeMode")

    return (
        <div>
            {
                mounted && (
                    themeMode === "dark" ?
                        <CiLight onClick={() => setTheme('light')} className='cursor-pointer' size={25} /> :
                        <CiDark onClick={() => setTheme('dark')} className='cursor-pointer' size={25} />
                )
            }
        </div>
    )
}

export default ThemeComp
