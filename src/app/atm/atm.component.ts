import { Component } from '@angular/core';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.scss']
})
export class AtmComponent {
  total:any= 0;
  withdrawalSuccessful:any;
  logs:any[] = [];
  availableNotes: any = {
    2000: 0,
    500: 0,
    200: 0,
    100: 0
  };

  depositDenominations: any = {
    2000: 0,
    500: 0,
    200: 0,
    100: 0
  };

  withdrawalAmount: number = 0;
  withdrawalDenominations: any = {
    2000: 0,
    500: 0,
    200: 0,
    100: 0
  };
  withdrawalError: string = '';

  deposit(denomination: number, amount: number) {
    console.log(this.total);
    
    this.depositDenominations[denomination] = 0;
    this.availableNotes[denomination] += amount;
    console.log();
    
    this.total = this.total + (this.availableNotes[denomination]* denomination)
    console.log(this.total);
    
  }

  withdraw(amount: number) {
    this.resetWithdrawalState();

    if (amount <= 0) {
      this.withdrawalSuccessful = false;
      this.withdrawalError = 'Please enter a valid withdrawal amount.';
      this.logs.push(this.withdrawalError);
      return;
    }

    if (!this.hasSufficientBalance(amount)) {
      this.withdrawalSuccessful = false;
      this.withdrawalError = 'Insufficient balance for withdrawal.'+ new Date().toString();
      this.logs.push(this.withdrawalError);
      return;
    }

    this.calculateWithdrawalDenominations(amount);
  }

  hasSufficientBalance(amount: number): boolean {
    const totalAvailable = Object.keys(this.availableNotes)
      .reduce((total, denomination) => total + (this.availableNotes[denomination] * +denomination), 0);
    return totalAvailable >= amount;
  }

  calculateWithdrawalDenominations(amount: number) {
    this.withdrawalSuccessful=true;
    this.total = this.total - amount;
    for (const denomination of Object.keys(this.availableNotes).reverse()) {
      const count = Math.min(Math.floor(amount / +denomination), this.availableNotes[denomination]);
      this.availableNotes[denomination] -= count;
      this.withdrawalDenominations[denomination] = count;
      amount -= count * +denomination;
      if (amount === 0) {
        break;
      }
    }
    
    console.log(this.total);
    let log;
    let log1:any = []
    if (this.withdrawalSuccessful) {
     log  = 'Withdrawal successful on ' +  new Date().toString();
      console.log('Withdrawal details:');
      this.logs.push(JSON.stringify(this.withdrawalDenominations));
      this.logs.push(log)
    }
    console.log(this.logs);
    
  }

  resetWithdrawalState() {
    this.withdrawalError = '';
    this.withdrawalAmount = 0;
    this.withdrawalDenominations = {
      2000: 0,
      500: 0,
      200: 0,
      100: 0
    };
  }
}