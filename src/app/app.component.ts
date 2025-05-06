import { Component} from '@angular/core';
// import type { InvestmentInput } from './investment-input.model';

@Component({
  selector: 'app-root',
  // standalone: true,
  standalone: false,
  // imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  // resultsData?:{
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number
  // }[];

  // resultsData = signal<{
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number
  // }[] | undefined>(undefined);

}
