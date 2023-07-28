"use client";
import React, {createContext, useState} from "react";
import {Alert, AlertColor, AlertTitle, Snackbar} from "@mui/material";
import {AlertSubtitle, Content} from "./response.handler.context.style";

interface ResponseHandlerContextProps {
    setErrorMessage(title: string, message: string, subtitle?: string): void

    setWarningMessage(title: string, message: string, subtitle?: string): void
}

interface Props {
    children: React.ReactNode
}

const ResponseHandlerContext = createContext({} as ResponseHandlerContextProps)

const ResponseHandlerProvider = ({children}: Props) => {
    const [message, setMessage] = useState<string>();
    const [title, setTitle] = useState<string>();
    const [subtitle, setSubtitle] = useState<string>();
    const [isOpen, setIsOpen] = useState(false);
    const [severity, setSeverity] = useState<AlertColor>();

    const setToast = (title: string, message: string, subtitle?: string) => {
        setTitle(title)
        setMessage(message)
        subtitle && setSubtitle(subtitle)

        setIsOpen(true)
    }

    const setErrorMessage = (title: string, message: string, subtitle?: string) => {
        setToast(title, message, subtitle)
        setSeverity('error')
    }

    const setWarningMessage = (title: string, message: string, subtitle?: string) => {
        setToast(title, message, subtitle)
        setSeverity('warning')
    }

    const handleClose = (event: React.SyntheticEvent<any> | Event, reason: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setIsOpen(false);
    };

    return (
        <ResponseHandlerContext.Provider value={{setErrorMessage, setWarningMessage}}>
            <Snackbar open={isOpen} autoHideDuration={5000} key={`alert-${title}`} onClose={handleClose}
                      anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}>
                <Alert onClose={(event) => handleClose(event, event.type)} severity={severity}>
                    <AlertTitle>{title}</AlertTitle>
                    {subtitle && <AlertSubtitle>{subtitle}</AlertSubtitle>}
                    <Content>{message}</Content>
                </Alert>
            </Snackbar>
            {children}
        </ResponseHandlerContext.Provider>
    )
}

export {ResponseHandlerProvider, ResponseHandlerContext}