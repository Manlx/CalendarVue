
import type AssignmentObj from "./AssignmentObj";
import type { ClassTime } from "./ClassTimeObj";
import type { Link } from "./LinkObj";

export interface Module {
    ModuleName: string;
    Assignments: AssignmentObj[];
    Classes: any[];
    Links: Link[];
    ClassOnceOff: any[];
    ClassTimes: ClassTime[];
    ClassCancelations: any[];
}