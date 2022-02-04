import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-graphql';

  constructor(apollo: Apollo) {
    apollo.query({
      query: gql`{
        shows {
          title
          network
          genre
        }
      }`
    }).subscribe((data) => {
      console.log(data);
    })
  }
}
