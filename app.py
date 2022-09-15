from flask import Flask, jsonify, request
from main import determinant
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route('/')
@cross_origin(supports_credentials=True)
def index():
    return "Hello And Welcome To Heart Disease Status Predictor API"
@app.route('/heart_disease/check-status', methods = ['POST'])
def heartDiseaseChecker():
    data = request.get_json()
    age, sex, chestPain, restingBP, serumCholesterol, fbs, restingECG, maxHR, exerciseInducedAngina, oldPeak, slope, majorVessels, thalassemia = data['age'], data['sex'], data['chest_pain'], data['restingBP'], data['serum_cholesterol'], data['fbs'], data['resting_ecg'], data['max_heart_rate'], data['exercise_induced_angina'], data['old_peak'], data['slope'], data['major_vessels'], data['thalassemia']
    if ( len(age) == 0 or len(sex) == 0 or len(chestPain) == 0 or len(restingBP) == 0 or len(serumCholesterol) == 0 or len(fbs) == 0 or len(restingECG) == 0 or len(maxHR) == 0 or len(exerciseInducedAngina) == 0 or len(oldPeak) == 0 or len(slope) == 0  or len(majorVessels) == 0  or len(thalassemia) == 0 ):
        return jsonify({ "error": "All fields are required" })
    resultant = determinant(age, sex, chestPain, restingBP, serumCholesterol, fbs, restingECG, maxHR, exerciseInducedAngina, oldPeak, slope, majorVessels, thalassemia)
    return jsonify({ "heart_disease_status": str(resultant[0]) })
if __name__ == "__main__":
   app.run()
