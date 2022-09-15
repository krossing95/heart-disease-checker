import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn import svm
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

data = pd.read_csv('./source/heart_disease_data.csv')

x = data.drop(columns = 'target', axis = 1)
y = data['target']

scaler = StandardScaler()
scaler.fit(x)
transformed_x = scaler.transform(x)

xTrain, xTest, yTrain, yTest = train_test_split(transformed_x, y, test_size = 0.20)

classifier = svm.SVC( kernel = 'rbf' )
classifier.fit(xTrain, yTrain)
# yPred = classifier.predict(xTest)
# print(confusion_matrix(yTest, yPred))
# print(classification_report(yTest, yPred)) f1-score = 0.86
# predictionAccuracy_trained = accuracy_score(classifier.predict(xTrain), yTrain) 92%
def determinant(age, sex, chestPain, restingBP, serumCholesterol, fbs, restingECG, maxHR, exerciseInducedAngina, oldPeak, slope, majorVessels, thalassemia ):
    inputData = np.asarray((
        int(age), int(sex), float(chestPain), float(restingBP), float(serumCholesterol),
        float(fbs), int(restingECG), int(maxHR), float(exerciseInducedAngina), float(oldPeak), 
        float(slope), int(majorVessels), int(thalassemia)
    ))
    reshapedData = inputData.reshape(1, -1)
    stdData = scaler.transform(reshapedData)
    return classifier.predict(stdData)