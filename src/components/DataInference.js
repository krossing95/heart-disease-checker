import { Accordion, AccordionSummary, AccordionDetails, Grid, Typography } from '@mui/material'
import * as React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const DataInference = () => {
    const [expanded, setExpanded] = React.useState(false)
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }
    const data = [
        { id: 1, header: 'chest pain type', subtitles: [{ value: 0, desc: 'Typical angina pain' }, { value: 1, desc: 'Atypical angina pain' }, { value: 2, desc: 'Non-anginal pain' }, { value: 3, desc: 'Asymtomatic pain' }], header2: '', subtitles2: [] },
        { id: 2, header: 'resting electrocardiographic results', subtitles: [{ value: 0, desc: 'Normal' }, { value: 1, desc: 'Having ST-T wave abnormality' }, { value: 2, desc: "Showing probable or definite left ventricular hypertrophy by Estes' criteria" }], header2: '', subtitles2: [] },
        { id: 3, header: 'slope: the slope of the peak exercise ST segment', subtitles: [{ value: 0, desc: 'Upsloping' }, { value: 1, desc: 'Flat' }, { value: 2, desc: 'Downsloping' }], header2: 'Degree of thalassemia', subtitles2: [{ value: 0, desc: 'Normal' }, { value: 1, desc: 'Fixed defect' }, { value: 2, desc: 'Reversable defect' }] },
        { id: 4, header: 'abbreviations and info', subtitles: [{ value: 'T', desc: 'True (1)' }, { value: 'F', desc: 'False (0)' }, { value: 'FBS', desc: 'Fasting Blood Sugar' }, { value: 'm', desc: 'Male' }, { value: 'f', desc: 'Female' }, { value: 'Old peak', desc: 'ST depression induced by exercise' }], header2: '', subtitles2: [] }
    ]
    return (
        <Accordion elevation={0} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header" >
                <Typography variant='overline' sx={{ color: 'text.secondary' }}>Open to view more information about the form</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container spacing={1} sx={{ mb: 2 }}>
                    {
                        data.map(datum => (
                            <Grid key={datum.id} item xs={12} md={4} lg={3}>
                                <Typography variant='overline'>{datum.header}</Typography>
                                {
                                    datum.subtitles.map((item, i) => (
                                        <Typography key={i + 1} variant='body2'>{`${item.value} =  ${item.desc}`}</Typography>
                                    ))
                                }
                                {
                                    datum.header2.length > 0 && (
                                        <React.Fragment>
                                            <Typography variant='overline'>{datum?.header2}</Typography>
                                            {
                                                datum.subtitles2.map((item, i) => (
                                                    <Typography key={i + 1} variant='body2'>{`${item.value} =  ${item.desc}`}</Typography>
                                                ))
                                            }
                                        </React.Fragment>
                                    )
                                }
                            </Grid>
                        ))
                    }
                </Grid>
            </AccordionDetails>
        </Accordion>

    )
}
export default DataInference