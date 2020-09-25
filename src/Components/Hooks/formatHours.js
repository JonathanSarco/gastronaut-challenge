
export function formatHours(days, index, hour, restaurantId) {

    let newDate = new Date();
    newDate.setDate(newDate.getDate() + index);

    let day = days.weekdays[newDate.getDay()];
    let date = newDate.getDate();
    let month = newDate.getMonth();
    let year = newDate.getFullYear().toString().substr(-2);

    if (index === 0) {
        return {
            formatedHour: days.today,
            queryHour: `${newDate.getFullYear()}-${month < 10 ? `0${month}` : `${month}`}-${newDate.getDate()}`
        }
    }

    if (index === 1) {
        return {
            formatedHour: days.tomorrow,
            queryHour: `${newDate.getFullYear()}-${month < 10 ? `0${month}` : `${month}`}-${newDate.getDate()}`
        }
    }

    return {
        formatedHour: `${day} the ${date}.${month < 10 ? `0${month}` : `${month}`}.${year}`,
        queryHour: `${newDate.getFullYear()}-${month < 10 ? `0${month}` : `${month}`}-${newDate.getDate()}`
    }
}

export default formatHours;