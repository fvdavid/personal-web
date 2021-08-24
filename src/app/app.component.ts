import { Component } from '@angular/core';
import { GoogleTagManagerService } from 'angular-google-tag-manager';

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
      nameTags: '#nestjs, #graphql',
      url: 'https://github.com/fvdavid/fv-nestv7-starter/tree/graphql-code'
    },
    {
      nameTags: '#nestjs, #excel',
      url: 'https://github.com/fvdavid/fv-nestv7-starter/tree/exportToExcel'
    },
    {
      nameTags: '#nestjs, #stripe, #twilio',
      url: 'https://gitlab.com/fvdavid/nest-custom-payment'
    },
    {
      nameTags: '#expressjs, #ts, #solidprinciple',
      url: 'https://github.com/fvdavid/FvExpress'
    },
  ];

  constructor(private gtmService: GoogleTagManagerService) {}

  onChange(everDone: any) {
    this.goToLink(everDone.target.value);
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  getTags(nameTag: string) {
    console.log('name Tag : ', nameTag);

    const gtmTag = {
      event: nameTag,
      pageName: nameTag
    };

    this.gtmService.pushTag(gtmTag);
  }
}
