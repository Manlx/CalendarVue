import { TimeUtils } from "@/Utils/TimeUtils";

class AssignmentObj
{
    Module: String;
    DueDate:Date;
    Description: String;
    ShouldDisp: boolean;
    TimeLeft:String;
    NormalizedDate:String;
    constructor(Module:String= "",DueDate:Date = new Date(),Description:String="")
    {
        this.Module = Module;
        this.DueDate = DueDate;
        this.Description = Description;
        this.ShouldDisp = this.DueDate.valueOf() < (new Date()).valueOf()
        this.TimeLeft = this.CalcDaysLeft()
        this.NormalizedDate = TimeUtils.ToYYYYMMDD(this.DueDate)
    }

    CalcDaysLeft():String
    {
        let Today = new Date()
        let Temp = this.DueDate.valueOf() - Today.valueOf();
        let DaysLeft = Math.floor(Temp/86400000)
        return (DaysLeft > 1)?`Days Left: ${DaysLeft}`:(DaysLeft == 1)?"1 Day Left":"Last Day";
    }
}
export default AssignmentObj;