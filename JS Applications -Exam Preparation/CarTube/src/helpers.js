export function checkCarForm(carData){
    return Object.values(carData).every(x => x);
}