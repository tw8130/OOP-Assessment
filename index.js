//banking management system 

class BankAccount {
    //properties
    // accountNumber;
    // accountHolder;
    // balance;
    //constructor
    constructor(accountNumber, accountHolder, balance) {
        this._accountNumber = accountNumber;
        this._accountHolder = accountHolder;
        this._balance = balance;
    }

    getAccountNumber() {
        return this._accountNumber;
    }

    getAccountHolder() {
        return this._accountHolder;
    }

    getBalance() {
        return this._balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
        }
        console.log(`The deposited ${amount} was deposited to ${this._accountNumber}`);

    }

    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            console.log(`The ${amount} was withdrawn from this account ${this._accountNumber}`);
        } else {
            console.log("Your balance is insufficient.");
        }
    }



}
class SavingsAccount extends BankAccount {

    constructor(accountNumber, accountHolder, balance, interestRate) {
        super(accountNumber, accountHolder, balance);
        this._interestRate = interestRate;
    }

    calculateInterest() {
        let interest = this._balance * this._interestRate / 100;
        console.log(`Interest for this account ${this._accountNumber} is: ${interest}`)

    }
}

class CheckingAccount extends BankAccount {
    constructor(accountNumber, accountHolder, balance, overDraftLimit) {
        super(accountNumber, accountHolder, balance);
        this._overDraftLimit = overDraftLimit;
    }

    get overDraftLimit() {
        return this._overDraftLimit;
    }

    set overDraftLimit(limit) {
        this._overDraftLimit = limit;
    }

    withdraw(amount) {
        if (amount <= this._balance + this._overDraftLimit) {
            this._balance -= amount;
            console.log(`The ${amount} withdrawn is from this account ${this._accountNumber}`);
        } else {
            console.log("You exceeded the overdraft limit")
        }
    }
}


// Create instances of each account type
let savingsAccount = new SavingsAccount("AKL0098", "Mary Jane", 5000, 0.05);
let checkingAccount = new CheckingAccount("IKJ978", "Ryan Reynolds", 3000, 2000);

// Retrieve account information
console.log("Savings Account Information:");
console.log("The Account Number:", savingsAccount.accountNumber);
console.log("The Account Holder:", savingsAccount.accountHolder);
console.log("The Balance:", savingsAccount.balance);

console.log("\nChecking Account Information:");
console.log("The Account Number:", checkingAccount.accountNumber);
console.log("The Account Holder:", checkingAccount.accountHolder);
console.log("The Balance:", checkingAccount.balance);

// The Deposited money into accounts
savingsAccount.deposit(1000);
checkingAccount.deposit(500);

// The Withdrawn money from accounts
savingsAccount.withdraw(200);
checkingAccount.withdraw(4000);

// Calculate interest for savings account
savingsAccount.calculateInterest();

// Update overdraft limit for checking account
checkingAccount.overdraftLimit = 3000;
console.log("The Updated Overdraft Limit:", checkingAccount.overdraftLimit);