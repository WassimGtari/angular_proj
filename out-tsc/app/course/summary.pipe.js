import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class SummaryPipe {
    transform(value, limit) {
        if (!value)
            return null;
        let defaultlimit = limit ? limit : 50;
        return (value.substring(0, 1).toUpperCase() +
            value.substring(1, defaultlimit) +
            '@gmail.com');
    }
    static { this.ɵfac = function SummaryPipe_Factory(t) { return new (t || SummaryPipe)(); }; }
    static { this.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "summary", type: SummaryPipe, pure: true }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SummaryPipe, [{
        type: Pipe,
        args: [{
                name: 'summary',
            }]
    }], null, null); })();
//# sourceMappingURL=summary.pipe.js.map