import {Component, OnDestroy, OnInit} from '@angular/core';

import {DataService} from '../services/data.service';
import {FormControl, Validators} from "@angular/forms";
import {Subscription} from 'rxjs'

@Component({
    selector: 'aim-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit, OnDestroy {

    /**
     * search control
     */
    public search: FormControl;


    private searchSubscribtion: Subscription;

    constructor(
        public dataService: DataService
    ) {
        this._controlInit()._searchInit();

    }

    ngOnInit() {
        this.dataService.getElements();
    }

    ngOnDestroy(): void {
        this.searchSubscribtion.unsubscribe();
    }

    /**
     * Init search control
     * @private
     */
    private _controlInit() {
        this.search = new FormControl('', [
            Validators.required,
            Validators.minLength(2)
        ]);
        return this
    }

    /**
     * Search and emitting to search subject on DataService
     * @private
     */
    private _searchInit() {
        this.searchSubscribtion = this.search.valueChanges.subscribe((value: string) => {
                this.dataService.query$$.next(value)
        })
    }


    public searchReset() {
        this.search.patchValue('')
    }
}
