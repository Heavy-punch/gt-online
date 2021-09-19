export const randomNumber = (min, max) => {
    return min + Math.trunc(Math.random() * (max - min));
}

export const generateSchoolSelectOption = (arr) => {
    let options
    if (Array.isArray(arr)) {
        options = [...Array(arr.length)];
        arr.map((item, index) => options[index] = { "value": item.school_name, "label": item.school_name })
    }
    else return []
    return options;
}

export const generateEmployerSelectOption = (arr) => {
    let options
    if (Array.isArray(arr)) {
        options = [...Array(arr.length)];
        arr.map((item, index) => options[index] = { "value": item.employer_name, "label": item.employer_name })
    }
    else return []
    return options;
}

//check object properties is not fullfilled
export const checkDisable = (arrayOfObject) => {
    for (let i = 0; i < arrayOfObject.length; i++) {
        // if (values[name][i].school === '' || values[name][i].graduate === '') return true
        for (let prop in arrayOfObject[i]) {
            if (arrayOfObject[i][prop] === '') return true
        }
    } return false
}

export const checkEducationDisable = (arrayOfObject) => {
    for (let i = 0; i < arrayOfObject.length; i++) {
        if (arrayOfObject[i].school === '') return true
    } return false
}

//check touched
export const checkFieldTouched = (obj, keyWord) => {
    for (let prop in obj) {
        // console.log(prop)
        // console.log(keyWord)
        // console.log(prop.match(keyWord))
        if (obj[prop] && Boolean(prop.match(keyWord))) return true
    }
    return false
}
// export const checkFieldTouched = (obj, keyWord = "") => {
//     for (let prop in obj) {
//         if (obj[prop] && prop.indexOf(keyWord) >= 0) return true
//     }
//     return false
// }