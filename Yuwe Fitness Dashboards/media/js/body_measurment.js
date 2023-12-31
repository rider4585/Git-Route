let hideElements = false;

function fillDummyData() {
    document.getElementById('name').value = 'John Doe';
    document.getElementById('mid').value = '123456';
    document.getElementById('gender').value = 'male';
    document.getElementById('age').value = '30';
    document.getElementById('height').value = '175';
    document.getElementById('bodyFat').value = '15';
    document.getElementById('visceralFat').value = '10';
    document.getElementById('bmr').value = '1800';
    document.getElementById('bmi').value = '24';
    document.getElementById('bodyAge').value = '28';
    document.getElementById('subcutaneousWholeBody').value = '20';
    document.getElementById('subcutaneousTrunk').value = '15';
    document.getElementById('subcutaneousArm').value = '12';
    document.getElementById('subcutaneousLeg').value = '18';
    document.getElementById('muscleWholeBody').value = '30';
    document.getElementById('muscleTrunk').value = '25';
    document.getElementById('muscleArm').value = '20';
    document.getElementById('muscleLeg').value = '28';
    document.getElementById('chest').value = '95';
    document.getElementById('waist').value = '80';
    document.getElementById('lowerAbs').value = '85';
    document.getElementById('hip').value = '100';
    document.getElementById('thigh').value = '60';
    document.getElementById('calf').value = '40';

    // ... (fill other fields with dummy data)
}

function handleField(fieldId, fieldData, disableAllInputs, hideElementsWithData, disableInput) {
    const fieldInput = document.getElementById(fieldId);

    if (fieldData && fieldData !== '') {
        fieldInput.value = fieldData;

        if (disableAllInputs || (disableInput && fieldData !== '')) {
            fieldInput.disabled = true;
        }
    } else {
        if (hideElementsWithData) {
            fieldInput.closest('.form-group').style.display = 'none';
        }
    }
}

function setData(jsonData) {
    const data = jsonData;

    let disableAllInputs = false;
    let hideElementsWithData = false;
    let disableInput = false;
    let isKeyExists = 'hideElements' in data;

    if (!isKeyExists || data['hideElements'] == true) {
        disableAllInputs = true;
        hideElementsWithData = true;
        document.querySelector('.form-submit-btn').style.display = 'none';
    } else if (data['hideElements'] == false) {
        disableInput = true;
    }

    // Personal Information
    if (data['personal-information']) {
        const personalInfo = data['personal-information'];

        handleField('name', personalInfo.name, disableAllInputs, hideElementsWithData, disableInput);
        handleField('MID', personalInfo.MID, disableAllInputs, hideElementsWithData, disableInput);
        handleField('gender', personalInfo.gender ? personalInfo.gender.toLowerCase() : '', disableAllInputs, hideElementsWithData, disableInput);
        handleField('age', personalInfo.age, disableAllInputs, hideElementsWithData, disableInput);
        handleField('height', personalInfo.height, disableAllInputs, hideElementsWithData, disableInput);
        handleField('weight', personalInfo.weight, disableAllInputs, hideElementsWithData, disableInput);
    }

    // Body Fat Section
    if (data['Body-Fat']) {
        const bodyFatInfo = data['Body-Fat'];
        const bodyFatSection = document.getElementById('bodyFatSection');
        if (bodyFatInfo && Object.values(bodyFatInfo).every(val => val === '' || val === null)) {
            bodyFatSection.style.display = 'none';
        } else {
            bodyFatSection.style.display = 'block';
            handleField('Body-Fat-Percentage', bodyFatInfo['Body-Fat-Percentage'], disableAllInputs, hideElementsWithData, disableInput);
            handleField('Visceral-Fat', bodyFatInfo['Visceral-Fat'], disableAllInputs, hideElementsWithData, disableInput);
            handleField('BMR', bodyFatInfo.BMR, disableAllInputs, hideElementsWithData, disableInput);
            handleField('BMI', bodyFatInfo.BMI, disableAllInputs, hideElementsWithData, disableInput);
            handleField('Body-Age', bodyFatInfo['Body-Age'], disableAllInputs, hideElementsWithData, disableInput);
        }
    }

    // Subcutaneous Fat Section
    if (data['Subcutaneous-Fat']) {
        const subcutaneousFatInfo = data['Subcutaneous-Fat'];
        const subcutaneousFatSection = document.getElementById('subcutaneousFatSection');
        if (subcutaneousFatInfo && Object.values(subcutaneousFatInfo).every(val => val === '' || val === null)) {
            subcutaneousFatSection.style.display = 'none';
        } else {
            subcutaneousFatSection.style.display = 'block';
            handleField('subcutaneous-Whole-Body', subcutaneousFatInfo['Whole-Body'], disableAllInputs, hideElementsWithData, disableInput);
            handleField('subcutaneous-Trunk', subcutaneousFatInfo['Trunk'], disableAllInputs, hideElementsWithData, disableInput);
            handleField('subcutaneous-Arm', subcutaneousFatInfo.Arm, disableAllInputs, hideElementsWithData, disableInput);
            handleField('subcutaneous-Leg', subcutaneousFatInfo.Leg, disableAllInputs, hideElementsWithData, disableInput);
        }
    }

    // Muscle Section
    if (data['Muscle']) {
        const muscleInfo = data['Muscle'];
        const muscleSection = document.getElementById('muscleSection');
        if (muscleInfo && Object.values(muscleInfo).every(val => val === '' || val === null)) {
            muscleSection.style.display = 'none';
        } else {
            muscleSection.style.display = 'block';
            handleField('muscle-Whole-Body', muscleInfo['Whole-Body'], disableAllInputs, hideElementsWithData, disableInput);
            handleField('muscle-Trunk', muscleInfo['Trunk'], disableAllInputs, hideElementsWithData, disableInput);
            handleField('muscle-Arm', muscleInfo.Arm, disableAllInputs, hideElementsWithData, disableInput);
            handleField('muscle-Leg', muscleInfo.Leg, disableAllInputs, hideElementsWithData, disableInput);
        }
    }

    // Body Measurement Section
    if (data['Body-Measurement']) {
        const bodyMeasurementInfo = data['Body-Measurement'];
        const bodyMeasurementSection = document.getElementById('bodyMeasurementSection');
        if (bodyMeasurementInfo && Object.values(bodyMeasurementInfo).every(val => val === '' || val === null)) {
            bodyMeasurementSection.style.display = 'none';
        } else {
            bodyMeasurementSection.style.display = 'block';
            handleField('Chest', bodyMeasurementInfo['Chest'], disableAllInputs, hideElementsWithData, disableInput);
            handleField('Waist', bodyMeasurementInfo['Waist'], disableAllInputs, hideElementsWithData, disableInput);
            handleField('Lower-Abs', bodyMeasurementInfo['Lower-Abs'], disableAllInputs, hideElementsWithData, disableInput);
            handleField('Hip', bodyMeasurementInfo.Hip, disableAllInputs, hideElementsWithData, disableInput);
            handleField('Thigh', bodyMeasurementInfo.Thigh, disableAllInputs, hideElementsWithData, disableInput);
            handleField('Calf', bodyMeasurementInfo.Calf, disableAllInputs, hideElementsWithData, disableInput);
            handleField('Arm', bodyMeasurementInfo.Arm, disableAllInputs, hideElementsWithData, disableInput);
        }
    }
}

function sendData() {
    const formData = {
        'personal-information': {
            'name': document.getElementById('name').value,
            'MID': document.getElementById('MID').value,
            'gender': document.getElementById('gender').value,
            'age': document.getElementById('age').value,
            'height': document.getElementById('height').value,
            'weight': document.getElementById('weight').value
        },
        'Body-Fat': {
            'Body-Fat-Percentage': document.getElementById('Body-Fat-Percentage').value,
            'Visceral-Fat': document.getElementById('Visceral-Fat').value,
            'BMR': document.getElementById('BMR').value,
            'BMI': document.getElementById('BMI').value,
            'Body-Age': document.getElementById('Body-Age').value
            // ... (add other Body Fat related fields)
        },
        'Subcutaneous-Fat': {
            'Whole-Body': document.getElementById('subcutaneous-Whole-Body').value,
            'Trunk': document.getElementById('subcutaneous-Trunk').value,
            'Arm': document.getElementById('subcutaneous-Arm').value,
            'Leg': document.getElementById('subcutaneous-Leg').value
            // ... (add other Subcutaneous Fat related fields)
        },
        'Muscle': {
            'Whole-Body': document.getElementById('muscle-Whole-Body').value,
            'Trunk': document.getElementById('muscle-Trunk').value,
            'Arm': document.getElementById('muscle-Arm').value,
            'Leg': document.getElementById('muscle-Leg').value
            // ... (add other Muscle related fields)
        },
        'Body-Measurement': {
            'Chest': document.getElementById('Chest').value,
            'Waist': document.getElementById('Waist').value,
            'Lower-Abs': document.getElementById('Lower-Abs').value,
            'Hip': document.getElementById('Hip').value,
            'Thigh': document.getElementById('Thigh').value,
            'Calf': document.getElementById('Calf').value,
            'Arm': document.getElementById('Arm').value
            // ... (add other Body Measurement related fields)
        }
    };

    // console.log(JSON.stringify(formData));
    SendDataToFlutter.postMessage(JSON.stringify(formData));
    // return JSON.stringify(formData);
    // return formData;
}

function isThisYuWeWebPage() {
    return true;
}

let dummyData = {
    'personal-information': {
        'name': null,
        'MID': null,
        'gender': null,
        'age': "20",
        'height': null,
        'weight': null
    }
};

// let dummyData = {
//     "personal-information": {
//         "name": "Omkar Kshirsagar",
//         "MID": null,
//         "gender": "Male",
//         "age": "5",
//         "height": null
//     }
// }


// setData(dummyData);