// #1
const num1 = new Set([1,1,2,2,3,4]); 
// Returns {1,2,3,4}, a set of unique values

// #2
const referee = [...new Set('referee')].join('');
// Returns 'ref' the string "referee" as a set, with only unique values, joined together.  

// #3
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// {[1,2,3] => true, [1,2,3] => false} A map where the key/value pair both have the same array as a key but one has a value of true and the other of false.

// hasDuplicate
const hasDuplicate = arr => new Set(arr).size !== arr.length
// Return true if the array has duplicates because turning the array into a set removes duplicate values, which will change the arrays length.

// vowelCount
let vowels = 'aeiou';

function vowelCount (str){    
    let maps = new Map();
    
    for(let letter of str){
        let letterLowerCased = letter.toLowerCase();
        if(vowels.indexOf(letterLowerCased) !== -1){
            if(maps.has(letterLowerCased)){
                maps.set(letterLowerCased, maps.get(letterLowerCased) + 1);
            } else {
                maps.set(letterLowerCased, 1);
            }
        }
    }
    return maps;
}
