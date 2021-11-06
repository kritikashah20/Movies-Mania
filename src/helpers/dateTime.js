import { defaultYearFilter } from "../constants/constants"

export const getYearList = (from=1990, to=new Date().getFullYear()) => {
    let yearsList = Array.from({ length: to-from+1 }, (_, i) => from + i)

    // -1 represents when no year is selected
    return [defaultYearFilter, ...yearsList]
}