const useValidate = () => {
    const validator = (data) => {
        const { age, sex, chest_pain, restingBP, serum_cholesterol, fbs, resting_ecg, max_heart_rate, exercise_induced_angina, old_peak, slope, major_vessels, thalassemia } = data
        let message = ''
        if (age.length ===0 || sex.length ===0 || chest_pain.length ===0 || restingBP.length ===0 || serum_cholesterol.length ===0 || fbs.length === 0 || resting_ecg.length ===0 
            || max_heart_rate.length ===0 || exercise_induced_angina.length ===0 || old_peak.length ===0 || slope.length ===0 || major_vessels.length ===0 || thalassemia.length ===0) {
            message = 'Please enter all the fields'
            return message
        } if (age === 0) {
            message = 'Please enter a right age'
            return message
        } if (![0, 1].includes(Number(sex))) {
            message = 'Indicate the right gender value'
            return message
        } if (![0, 1, 2, 3].includes(Number(chest_pain))) {
            message = 'Indicate the right value for chest pain type.  Choose between 0, 1, 2 and 3'
            return message
        } if (![0, 1].includes(Number(fbs))) {
            message = 'Enter the appropriate value to indicate if the person has FBS count > 120mg/dl'
            return message
        } if (![0, 1, 2].includes(Number(resting_ecg))) {
            message = 'Resting ECG value is wrong. Choose between 0, 1, and 2'
            return message
        } if (![0, 1].includes(Number(exercise_induced_angina))) {
            message = 'Exercise induced angina status is wrong. Choose between 0 and 1'
            return message
        } if (![0, 1, 2].includes(Number(slope))) {
            message = 'Value for slope is incorrect. Choose between 0, 1 and 2'
            return message
        } if (![0, 1, 2, 3, 4].includes(Number(major_vessels))) {
            message = 'Value for major vessels is incorrect. Choose between 0, 1, 2, 3 and 4'
            return message
        } if (![0, 1, 2].includes(Number(thalassemia))) {
            message = 'Value representing thalassemia degree is incorrect. Choose between 0, 1 and 2'
            return message
        }
        return message
    }
    return { validator }
}
export default useValidate