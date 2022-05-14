setTimeout(() => {
        document.getElementById('loadingAnimation').style.display = 'none';
        document.getElementById('bodyDiv').style.display = 'block';
        }, 5000);//--setting animation time
        
        //Authenticate user. We will add a real authenticator later
        var isUserAuthenticated = true;

        //Create a cSavings Class that we can use as a Savings Account
        class cSavings 
        {
            cFirst_Name;
            cLast_Name;
            cCell;
            balance = 300;
            Get_Balance()
            {
                if (isUserAuthenticated)
                {
                    return this.balance;
                }
                else return null;
            }
            Deposit_with_Bonus(depo_amount)
            {
                this.balance = this.balance+depo_amount+.1*depo_amount;
            }
            Deposit (depo_amount)
            {
                this.balance = this.balance + depo_amount;
            }
            Withdraw (amount)
            {
                this.balance = this.balance - amount;
            }
        }
        //Create savings account for user
        var userSavingsAccount = new cSavings();

        //Update balance based on user input
        function UpdatePage(){
            //Convert strings to numbers
            var withdrawAmount = parseFloat(document.getElementById("userWithdraw").value);
            var depositAmount = parseFloat(document.getElementById("userDeposit").value);

            //Update Balance only if fields are populated using !isNaN could also use typeOf
            if(!isNaN(withdrawAmount)){
                userSavingsAccount.Withdraw(withdrawAmount);
            }

            if(!isNaN(depositAmount)){
                userSavingsAccount.Deposit(depositAmount);
            }
            
            //Update the balance on the page
            document.getElementById("userBalance").innerHTML = "Your Balance: " + userSavingsAccount.balance;

            //Clear the input fields
            document.getElementById("userWithdraw").value = "";
            document.getElementById("userDeposit").value = "";
        }
        function openForm() {
            document.getElementById("myForm").style.display = "block";
}

        function closeForm() {
            document.getElementById("myForm").style.display = "none";
}

