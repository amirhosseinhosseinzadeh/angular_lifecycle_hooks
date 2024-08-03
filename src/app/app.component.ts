import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styles: []
})
export class AppComponent implements OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
    ngOnDestroy(): void {
        console.log("ngOnDestroy")
    }
    ngAfterViewChecked(): void {
        console.log("ngAfterViewChecked")
    }
    ngAfterViewInit(): void {
        console.log("ngAfterViewInit")
    }
    ngAfterContentChecked(): void {
        console.log("ngAfterContentChecked")
    }
    ngAfterContentInit(): void {
        console.log("ngAfterContentInit")
    }
    ngDoCheck(): void {
        console.log("ngDoCheck")
    }
    ngOnInit(): void {
        console.log("ngOnInit")
    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log("ngOnChanges")
    }
    title = 'LifeCycleHooksSample';
}
