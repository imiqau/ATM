import inquirer from "inquirer";
while (1) {
    console.log("Welcome to Type Script ATM");
    let user = await inquirer.prompt([
        {
            type: 'input',
            name: 'userid',
            message: 'Enter your User ID: '
        },
        {
            type: 'number',
            name: 'pin',
            message: 'Enter your PIN: '
        },
        {
            type: 'list',
            name: 'AccType',
            message: 'Please select the Account Type: ',
            choices: ['Current Account', 'Saving Account', 'Foreign Currency Account', 'Fixed Deposit Account']
        },
        {
            type: 'list',
            name: 'Bank',
            message: 'Please select the Bank: ',
            choices: ['Alfalah Bank', 'Askari Bank', 'Dubai Islamic Bank', 'Faysal Bank', 'Habib Bank', 'JS Bank', 'National Bank', 'Silk Bank', 'TS Bank']
        },
        {
            type: 'list',
            name: 'transType',
            message: 'Please select the Transection Type: ',
            choices: ['Bank Transfer', 'Cash withdrawl', 'Bill Payment']
        },
        {
            type: 'number',
            name: 'amount',
            message: 'Enter Amount(PKR): '
        }
    ]);
    if (user.transType == 'Bank Transfer') {
        let transBank = await inquirer.prompt({
            type: 'list',
            name: 'Bank',
            message: 'Please select the Bank to transfer to: ',
            choices: ['Alfalah Bank', 'Askari Bank', 'Dubai Islamic Bank', 'Faysal Bank', 'Habib Bank', 'JS Bank', 'National Bank', 'Silk Bank', 'TS Bank']
        });
        console.clear();
        console.log(`Your Bank Transfer from ${user.Bank} to ${transBank.Bank} of amount ${user.amount} is successfull.`);
    }
    else if (user.transType == 'Bill Payment') {
        let utility = await inquirer.prompt({
            type: 'list',
            name: 'util',
            message: 'Please select the utility: ',
            choices: ['Electricity', 'GAS', 'Telephone', 'Water']
        });
        console.clear();
        console.log(`Your Bill payment for ${utility.util} Bill of amount ${user.amount} Rupees is successfull.`);
    }
    else {
        console.clear();
        console.log('Collect your Cash please. ');
    }
    let user2 = await inquirer.prompt({
        type: 'list',
        name: 'again',
        message: '',
        choices: ['Another Transection', 'Exit']
    });
    if (user2.again == 'Exit') {
        break;
    }
    else {
        console.clear();
    }
}
