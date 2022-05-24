const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3,
     invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


//function validateCards - will check checksum of given array


function validateCards(arr){
    let newArr= [];
    let str1 = 0;
    newArr.push(arr[arr.length-1]);
    arr.pop();
    let arr1 = arr.reverse();

    for (let i = 0; i < arr1.length; i++){
        if (i%2 == 0){
            if (arr1[i] > 4){
                newArr.push(arr1[i]*2- 9);
            } else {
                newArr.push(arr1[i]*2);
            }
        } else {
        newArr.push(arr1[i]);}
    }
    for (let j = 0; j<newArr.length; j++){
        str1 += newArr[j];
    }
    
    if (str1 % 10 === 0){
        return true;
    } else { return false;}
}

//here function creates array of invalid credit card numbers

function findInvalidCards(arrayOfArrays){
    let invalidCards = [];
    for (let k = 0; k < arrayOfArrays.length; k++){
     if (validateCards(arrayOfArrays[k]) !== true){
         invalidCards.push(arrayOfArrays[k]);
     } 
}
return invalidCards;
}

function invalidCardCompanies(companyList){
    let companies = [];
    let companiesNames =[];
    let uniqueCompaniesNames =[];
    const validatedCard = findInvalidCards(companyList);
    //here I reverse the array and collect first digit
    for (let k = 0; k < validatedCard.length; k++ ){
        let c =  validatedCard[k].reverse();
        companies.push(c[0]);
    }
    //here I assign the name of companies with invalid creditcards
    for (let l = 0; l < companies.length; l++){
        switch(companies[l]){
            case 3:
                companiesNames.push('Amex');
                break;
            case 4:
                companiesNames.push('Visa');
                break;
            case 5:
                companiesNames.push('MasterCard');
                break;
           case 6:
                companiesNames.push('Discover');
                break;
            default:
                companiesNames.push('Unknown')
        }

    }

    //check if element allready exist in a new array, if not pushes given element to it
    companiesNames.forEach((element) => {
        if (!uniqueCompaniesNames.includes(element)) {
            uniqueCompaniesNames.push(element);
        }
    });

    return uniqueCompaniesNames;
 
    }

// console.log(invalidCardCompanies(batch));
