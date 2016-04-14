import { ElementRef, AfterContentInit } from 'angular2/core';
import { Angulartics2 } from './angulartics2';
export declare class Angulartics2On implements AfterContentInit {
    angulartics2On: string;
    angularticsEvent: string;
    angularticsCategory: string;
    angularticsIf: string;
    angularticsProperties: any;
    private elRef;
    private el;
    private angulartics2;
    constructor(elRef: ElementRef, angulartics2: Angulartics2);
    ngAfterContentInit(): void;
    eventTrack(event: any): void;
    private isCommand();
    private inferEventName();
}
