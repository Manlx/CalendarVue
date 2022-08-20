export interface ClassTime {
    StartsOn: string;
    EndsOn: string;
    Time: string;
    RepeatsWeakly: boolean;
    Delivery: string;
}
export class ClassTimeDisplay{
    Delivery: string;
    Time: String;
    Date:Date;
    ModuleName:String
    constructor(Delivery:string,Time:String,Date:Date,ModuleName:String)
    {
        this.Delivery = Delivery;
        this.Time = Time;
        this.Date = Date;
        this.ModuleName = ModuleName;
    }
}
