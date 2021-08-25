import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
// import { GoogleTagManagerService } from 'angular-google-tag-manager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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

  constructor(
    protected gaService: GoogleAnalyticsService
    // private gtmService: GoogleTagManagerService
  ) { }

  ngOnInit() {
    this.gaService.pageView('/', 'home');
  }

  onChange(everDone: any) {
    this.goToLink(everDone.target.value);
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  // getTags(nameTag: string) {
  //   console.log('name Tag : ', nameTag);

  //   const gtmTag = {
  //     event: nameTag,
  //     pageName: nameTag
  //   };

  //   this.gtmService.pushTag(gtmTag);
  // }

  clickMedium() {
    this.gaService.event('enter_medium', 'cta_medium');
  }

  clickResume() {
    this.gaService.event('enter_resume', 'cta_resume');
  }

  clickSampleCode() {
    this.gaService.event('enter_samplecode', 'cta_samplecode');
  }

  clickTwitter() {
    this.gaService.event('enter_twitter', 'cta_twitter');
  }

  clickGithub() {
    this.gaService.event('enter_github', 'cta_github');
  }

  clickGitlab() {
    this.gaService.event('enter_gitlab', 'cta_gitlab');
  }

  clickWhatsapp() {
    this.gaService.event('enter_whatsapp', 'cta_whatsapp');
  }
}
