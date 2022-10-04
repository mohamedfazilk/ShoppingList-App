import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


function AddItem(props) {
    const [open, setOpen] = useState(false);
    const[item, setItem] = useState({
        product:'',
        amount:''
    })
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (

        <div>
            <Button onClick={handleOpen}>
                Add Item
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    New Item
                </DialogTitle>

                <DialogContent>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        Cancel
                    </Button>

                    <Button onClick={addItem}>
                        Add
                    </Button>

                </DialogActions>
            </Dialog>

        </div>
    );
}
export default AddItem;