import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, {bindTrigger, bindMenu} from 'material-ui-popup-state';

export default function MenuPopupState(props) {
    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <Button variant="contained" {...bindTrigger(popupState)}>
                        Menu
                    </Button>
                    <Menu anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                          transformOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                          }}{...bindMenu(popupState)}>
                        <MenuItem onClick={() => window.location.href = "/"}>Main Menu</MenuItem>
                        <MenuItem onClick={() => window.location.href = "/profile"}>Profile</MenuItem>
                        <MenuItem onClick={() => window.location.href = "/logWorkout"}>Log Workout</MenuItem>
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}


/* main, profile, log workout */