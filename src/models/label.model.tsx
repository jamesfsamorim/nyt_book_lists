import { ReactNode } from "react"

export enum LabelDirection {
    Right
} 

export interface LabelProps {
    color?: string
    backgroundColor?: string
    direction?: LabelDirection
    children: ReactNode
}