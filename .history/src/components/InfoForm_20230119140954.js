import { Box, Button, CircularProgress, Grid, Paper } from '@mui/material'
import axios from 'axios'
import * as React from 'react'
import useValidate from '../hooks/useValidate'
import DataInference from './DataInference'
import Popup from './Popup'

const InfoForm = ({ setShowForm }) => {
    const [states, setStates] = React.useState({
        age: '', sex: '', chestPain: '', restingBP: '', serumCholesterol: '', fbs: '',
        restingEcg: '', maxHr: '', angina: '', oldPeak: '', slope: '', majorVessels: '',
        thalassemia: '', message: '', open: false, loading: false
    })
    const { validator } = useValidate()
    const inputBoxes = [
        { id: 1, state: 'age', placeholder: 'Age in years', setter: { func: setStates } }, { id: 2, state: 'sex', placeholder: 'Gender (m = 1, f = 0)', setter: { func: setStates } }, { id: 3, state: 'chestPain', placeholder: 'Chest Pain Type', setter: { func: setStates } }, { id: 4, state: 'restingBP', placeholder: 'Resting Blood Pressure (mmHg)', setter: { func: setStates } },
        { id: 5, state: 'serumCholesterol', placeholder: 'Serum Cholesterol in mg/dl', setter: { func: setStates } }, { id: 6, state: 'fbs', placeholder: 'FBS >120mg/dl (T =1, F =0)', setter: { func: setStates } }, { id: 7, state: 'restingEcg', placeholder: 'Resting ECG', setter: { func: setStates } }, { id: 8, state: 'maxHr', placeholder: 'Maximum Heart Rate', setter: { func: setStates } },
        { id: 9, state: 'angina', placeholder: 'Exercise Induced Angina (T =1, F =0)', setter: { func: setStates } }, { id: 10, state: 'oldPeak', placeholder: 'Old Peak', setter: { func: setStates } }, { id: 11, state: 'slope', placeholder: 'Slope', setter: { func: setStates } }, { id: 12, state: 'majorVessels', placeholder: 'Major vessels (0 - 4)', setter: { func: setStates } }, { id: 13, state: 'thalassemia', placeholder: 'Degree of Thalassemia', setter: { func: setStates } }
    ]
    const send = async () => {
        const { age, sex, chestPain, restingBP, serumCholesterol, fbs, restingEcg, maxHr, angina, oldPeak, slope, majorVessels, thalassemia } = states
        const data = {
            age, sex, chest_pain: chestPain, restingBP, serum_cholesterol: serumCholesterol, fbs, resting_ecg: restingEcg, max_heart_rate: maxHr, exercise_induced_angina: angina, old_peak: oldPeak, slope, major_vessels: majorVessels, thalassemia
        }
        const checkForValidity = validator(data)
        if (checkForValidity !== '') {
            return setStates(prev => ({ ...prev, message: checkForValidity, open: true }))
        }
        setStates(prev => ({ ...prev, loading: true }))
        await axios({
            method: 'POST',
            url: 'https://heart-disease-checker.onrender.com/heart_disease/check-status',
            headers: {
                'Content-Type': 'application/json'
            },
            data
        }).then((res) => {
            setStates(prev => ({ ...prev, loading: false }))
            if (res?.status === 200) {
                if (res?.data?.error !== undefined) return setStates(prev => ({ ...prev, message: res?.data?.error, open: true }))
                return setStates(prev => ({ ...prev, message: `The person ${res?.data?.heart_disease_status === '1' ? 'has a heart disease' : 'does not have a heart disease'}`, open: true }))
            }
        }).catch(err => {
            setStates(prev => ({ ...prev, loading: false, message: 'Whoops! Something went wrong', open: true }))
        })
    }
    return (
        <Box component={Paper} sx={{ padding: { xs: '20px', md: '35px' }, marginTop: { xs: '20px', md: '10px' }, marginBottom: { xs: '20px', md: '10px' } }}>
            <DataInference />
            <Grid container spacing={2}>
                {
                    inputBoxes.map(inputBox => (
                        <Grid key={inputBox.id} className='inputBox' item xs={12} sm={6} md={4} lg={3}>
                            <input onChange={(e) => inputBox.setter.func(prev => ({ ...prev, k: e.target.value }))} type='number' placeholder={inputBox.placeholder} />
                        </Grid>
                    ))
                }
                <Grid className='inputBox' item xs={12} sm={8} md={6} lg={4}>
                    <Button disabled={loading} onClick={send} sx={{ mr: '10px' }} variant='contained'> {loading ? <CircularProgress color='inherit' /> : 'send request'}</Button>
                    <Button onClick={() => setShowForm(false)} variant='contained'>go back</Button>
                </Grid>
            </Grid>
            {states.open ? (
                <Popup sentProps={{ open: states.open, message: states.message, setStates }} />
            ) : null}
        </Box>
    )
}
export default InfoForm