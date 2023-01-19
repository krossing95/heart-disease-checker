import { Dialog, DialogContent, DialogTitle, DialogContentText, Slide } from '@mui/material'
import * as React from 'react'

const Popup = ({ sentProps }) => {
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />
    })
    return (
        <Dialog open={sentProps?.open} TransitionComponent={Transition} keepMounted onClose={() => sentProps?.setStates(prev => ({ ...prev, open: false }))}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle sx={{ fontSize: { xs: '17px', md: '20px' } }}>{"Heart Disease Status Checker"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    {sentProps?.message}
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}
export default Popup