import { Box, Button, Typography } from '@mui/material'
import * as React from 'react'
import { motion } from 'framer-motion'
import InfoForm from './InfoForm'

const System = () => {
    const [showForm, setShowForm] = React.useState(false)
    return (
        <Box component='div' className='system-box' sx={{ paddingLeft: { xs: '20px', md: '100px' }, paddingRight: { xs: '20px', md: '100px' }, background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/background.jpg')", backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
            {
                !showForm ? (
                    <React.Fragment>
                        <Typography gutterBottom variant='h2' sx={{ fontSize: { xs: '23px', sm: '28px', md: '40px' } }} className='app-title'>heart disease checker</Typography>
                        <Typography sx={{ textAlign: 'center' }} gutterBottom>This application checks the heart disease status of individuals using machine learning. By providing the individual's age, gender, fasting blood sugar result, information about electrocardiograph, serum cholesterol and other relevant health information, the software is able to indicate if the individual has heart disease or not. </Typography>
                        <Button onClick={() => setShowForm(true)} sx={{ marginTop: '20px' }} variant='contained'>click to check status</Button>
                    </React.Fragment>
                ) : (
                    <motion.div 
                        initial={{ y: '100vh' }} animate={{ y: '0vh', transition: { duration: 1 } }}
                    >
                        <InfoForm setShowForm={setShowForm} />
                    </motion.div>
                )
            }
        </Box>
    )
}
export default System