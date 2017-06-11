import { Component, OnInit      } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location               } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Work in progress...';

  public constructor(
    private router : Router,
    private route : ActivatedRoute
  ) {
    //
  }

  private redirectIfNeeded(queryParams : Params) : void {
    if (queryParams['goto'] !== undefined) {
      let query : string = location.search.replace('?', '');
      let targetLocation : string = `goto=${queryParams['goto']}`;
      let parsedLocation : string = targetLocation.split('/').join('%2F');
      let newParams : {[k: string]: any} = {};
      query.split('&').forEach(element => {
        if (element != targetLocation && element != parsedLocation) {
          let key : string = element.split('=')[0];
          let val : string = element.split('=')[1];
          newParams[key] = val;
        }
      });

      // TODO: Log this via telemetry
      console.log('Go To:' + location.search);
      
      this.router.navigate([queryParams['goto']], { queryParams: newParams });
    }

  }

  public ngOnInit() {
    this.route.queryParams.subscribe(queryParams => this.redirectIfNeeded(queryParams));
  }
}
