let transFormData = (req, res) => {
    try {
        let {payload, referenceData} = req.body;

        let outputData = dataManipulation(payload, referenceData)

        res.status(200).send({"name": "subscriber", "valueType": "array", "value":outputData})
    } catch (error) {
        res.status(400).send(error)
    }
    
}

let dataManipulation = (payload, referenceData) => {
    let referenceKey = Object.keys(referenceData);

    if(payload.valueType === "array"){
        payload.value.forEach(elementData => {
            elementData = dataManipulation(elementData, referenceData)
        });
    } else {
        referenceKey.forEach(key => {
            payload.value = payload.value.replace(`{${key}}`, referenceData[key]);
        })
    }
    return payload.value;
}

module.exports = {transFormData}