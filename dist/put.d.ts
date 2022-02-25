import { UltimakerClient } from ".";
import * as it from "./interfaces";
export declare const putJobState: (this: UltimakerClient, target: it.UltimakerJobTargetState) => Promise<any>;
export declare const putLED: (this: UltimakerClient, hsv: it.HSV) => Promise<any>;
