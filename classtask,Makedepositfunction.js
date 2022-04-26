class Account{
    constructor(name,accno,balance){
        this.name=name;
        this.accno=accno;
        this.balance=balance;
    }
    getbalance(){
        return `Your account balance is :$${this.balance}`;
    }
    withdraw(debit){
        this.balance=this.balance - debit;
            if(this.balance > 0){
            return `Amount: ${debit} has been debited from your account ${this.accno}. Your Initial account balance is ${this.balance} 😉 `;
        }
        else{
            return `Insufficient balance in your account 😔`;
        }
        }   
    deposit(credit){

        this.balance=this.balance + credit;
        return`Amount ${credit} has been credited to your account ${this.accno}. Your Initial account balance is ${this.balance} 🤑`; 
        
    }
}
const Joel = new Account("Joel",78493,"10000000000000");
console.log(Joel.getbalance());
console.log(Joel.withdraw(20_000));
console.log(Joel.deposit(20_000));
console.log(Joel.withdraw(1000));
console.log(Joel.deposit(1000000));