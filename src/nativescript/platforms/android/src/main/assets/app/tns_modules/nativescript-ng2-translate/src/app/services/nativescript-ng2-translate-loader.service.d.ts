import { TranslateLoader } from 'ng2-translate/ng2-translate';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
export declare class TNSTranslateLoader implements TranslateLoader {
    private _currentLang;
    private _currentTranslation;
    private _loaderParams;
    constructor(prefix: string, suffix?: string);
    configure(prefix: string, suffix: string): void;
    getTranslation(lang: string): Observable<any>;
}
