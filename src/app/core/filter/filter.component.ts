import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";
import { QueryParams } from "../../models/query-params";
import { charGenderOptions, charStatusOptions } from "../../models/character";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  public readonly statusOptions: string[] = charStatusOptions;
  public readonly genderOptions: string[] = charGenderOptions;

  @Input()
  public queryParams: QueryParams = {};

  constructor(private router: Router) {
  }

  public filter(filterType: 'gender' | 'status', choice: string): void {
    const filters: QueryParams = this.queryParams;

    if (!this.queryParams[filterType]) { // there is no filter choice
      (filters[filterType] as string) = choice;
    } else { // there is a choice already for the filter
      // if choice and existing filter value are the same then remove the field next filter state
      if (this.queryParams[filterType] === choice) {
        delete filters[filterType];
      } else { // else overwrite on that filter
        (filters[filterType] as string) = choice;
      }
    }

    this.router.navigate(
      ['/characters'],
      {
        queryParams: {
          ...filters,
          page: 1
        }
      }
    );
  }
}
