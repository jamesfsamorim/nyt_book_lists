import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuItem from '@mui/material/MenuItem';
import { MenuOption, MenuProps } from '@/models/menu.model';
import { MenuButton, MenuComponent } from "./menu.style";

export const Menu = ({ options, title, icon = <KeyboardArrowDownIcon />}: MenuProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const isOpen = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (callbackFunction: () => void | any) => {
        setAnchorEl(null);
        typeof callbackFunction === 'function' && callbackFunction()
    };

    return (
        <>
            <MenuButton
                aria-haspopup="true"
                onClick={handleClick}
            >
                {title} {icon}
            </MenuButton>
            <MenuComponent
                anchorEl={anchorEl}
                open={isOpen}
                disableScrollLock
                onClose={handleClose}
            >
                {options.map((item: MenuOption, index) =>
                    <MenuItem key={`menu-item-${index}`} onClick={() => handleClose(item.callbackFunction)}>
                        {item.title}
                    </MenuItem>
                )}
            </MenuComponent>
        </>
    )
}