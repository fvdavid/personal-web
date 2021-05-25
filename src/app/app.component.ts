import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fv-web';

  everDones = [
    {
      nameTags: `Simple Code For Preview`,
      url: '#'
    },
    {
      nameTags: '#angular, #tailwind',
      url: 'https://jegess-kopi.web.app/links'
    },
    {
      nameTags: '#angular, #highcharts',
      url: 'https://github.com/fvdavid/fv-highcharts'
    },
    {
      nameTags: '#nestJS, #graphQL',
      url: 'https://github.com/fvdavid/fv-nestv7-starter/tree/graphql-code'
    },
    {
      nameTags: '#nestJS, #excel',
      url: 'https://github.com/fvdavid/fv-nestv7-starter/tree/exportToExcel'
    },
    {
      nameTags: '#nestJS, #stripe, #twilio',
      url: 'https://gitlab.com/fvdavid/nest-custom-payment'
    },
    {
      nameTags: '#expressJS, #ts, #solidprinciple',
      url: 'https://github.com/fvdavid/FvExpress'
    },
  ];

  onChange(everDone: any) {
    this.goToLink(everDone.target.value);
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
