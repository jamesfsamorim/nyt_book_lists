import { ReactNode } from "react"

export interface MenuOption {
    title: string
    callbackFunction: () => void
}

export interface MenuProps {
    options: MenuOption[]
    title: string
    icon?: ReactNode
}