import { v4 as uuidv4 } from 'uuid';

let myuuid = uuidv4();

console.log('my UUID is' + myuuid)



var jobuuid = uuidv4();
console.log('my uuid is:' + jobuuid);


const GetUniqueID = () => {
    const uniqueID = localStorage.getItem('uniqueID')
    
    if (uniiqueID == undefined) {
        const newuniqueID = crypto.randomUUID();
        localStorage.setItem('uniqueID', newuniqueID);
        return newuniqueID;
    }
    else {
        return uniqueID;
    }
}
console.log(GetUniqueID());