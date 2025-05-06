import { Injectable, signal } from "@angular/core";
import type { InvestmentInput } from "./investment-input.model";


@Injectable({providedIn: 'root'})
export class InvestmentService {

    // question mark is if it is undefined initially
    // resultData: {
    //     year: number,
    //     interest: number,
    //     valueEndOfYear: number,
    //     annualInvestment: number,
    //     totalInterest: number,
    //     totalAmountInvested: number
    //   }[] = signal();

    resultData = signal<{
        year: number,
        interest: number,
        valueEndOfYear: number,
        annualInvestment: number,
        totalInterest: number,
        totalAmountInvested: number
    }[] | undefined>(undefined);


    // not bound to custom event so we wioll call it differently, so no more onCalculateInvestmentResults
    calculateInvestmentResults( data: InvestmentInput) {
        const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
        const annualData = [];
        let investmentValue = initialInvestment;
      
        for (let i = 0; i < duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (expectedReturn / 100);
          investmentValue += interestEarnedInYear + annualInvestment;
          const totalInterest =
            investmentValue - annualInvestment * year - initialInvestment;
          annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
          });
        }
      
        // return annualData;
    
        // this.resultsData.set(annualData);

        this.resultData.set(annualData);
      }  
}