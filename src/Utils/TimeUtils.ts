export namespace TimeUtils{

    export function ToYYYYMMDD(mDate:Date):String
    {
        var year = mDate.toLocaleString("default", { year: "numeric" });
        var month = mDate.toLocaleString("default", { month: "2-digit" });
        var day = mDate.toLocaleString("default", { day: "2-digit" });
        return `${year}-${month}-${day}`
    }
}