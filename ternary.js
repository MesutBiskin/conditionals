let firstName ='Gamze'
//  A basic ternary
console.log((firstName) ? // if firstName is truthy
firstName : // Console log firsrtName
'Who are you?' // otherwise ask 'Who are you?'
)

// using a templated literal
console.log(`Hello ${
    (firstName) ? //If firstName is truthy
    ',' + firstName : //add their name 
    '' //otherwise , don't add anything
}`)

function showData(data){
    console.log((data) ? //If we have data
    data : //Console log the data
    'Loading ...' // Otherwise console log loading
    )
}

let ourData = undefined; //Our page loads
showData(ourData)

ourData = ['Apple', 'Oranges']// Console page finishes loading the data
showData(ourData)
