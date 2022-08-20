import type { HolidayTime } from "./HolidayTimeObj";
import type { Module } from "./ModuleObj";
export class DataObj {
    Modules: Module[];
    HolidayTimes: HolidayTime[];
    constructor(Modules:Module[] = [],HolidayTimes:HolidayTime[] = [])
    {
        this.Modules = Modules;
        this.HolidayTimes = HolidayTimes;
    }
}