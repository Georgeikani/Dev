const GetUniqueID = () => {
    const uniqueID = localStorage.getItem('uniqueID');

    if (uniqueID == undefined) {
        const newUniqueID = crypto.randomUUID();
        localStorage.setItem('uniqueID', newUniqueID);
        return newUniqueID;
    }else{
        return uniqueID;
    }
}
console.log(GetUniqueID());


const BetUniqueID = () => {
    const unique = localStorage.getItem('uniqueID');

    if (unique == undefined) {
        const newUniqueID = crypto.randomUUID();
        localStorage.setItem('uniqueID', newUniqueID);
        return newUniqueID;
    }else{
        return unique;
    }
}
console.log(BetUniqueID());