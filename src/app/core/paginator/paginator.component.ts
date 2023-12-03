import { Component, Input } from '@angular/core';
import { QueryParams } from "../../models/query-params";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  public firstPage = 1;

  @Input()
  public lastPage = 1;

  @Input()
  public currentPage = 1;

  @Input()
  public queryParams: QueryParams = {};

  public getQueryParams(targetPage: number | undefined): QueryParams {
    return {...this.queryParams, page: targetPage ? targetPage : 1};
  }
}
