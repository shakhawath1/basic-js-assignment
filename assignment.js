// Problem 1:
function anaToVori(ana) {
    const perVoriInAna = 16;
    let vori = 0;
    if ((ana >= 0) && (typeof (ana) === 'number')) {
        vori = ana / perVoriInAna;
    }
    // error handling for negative number
    else if (ana < 0) {
        vori = 'Please enter a positive number.';
    }
    // error handling for string
    else if (typeof (ana) != 'number') {
        vori = 'Not accept text, please enter a positive number.';
    }
    return vori;
}



// Problem 2:
function pandaCost(singaraQtt, somuchaQtt, jilapiQtt) {
    const perSingaraPrice = 7;
    const perSomuchaPrice = 10;
    const perJilapiPrice = 15;
    let totalPrice = 0;
    if ((singaraQtt >= 0 && somuchaQtt >= 0 && jilapiQtt >= 0) && (typeof (singaraQtt) === 'number' && typeof (somuchaQtt) === 'number' && typeof (jilapiQtt) === 'number')) {
        totalPrice = (perSingaraPrice * singaraQtt) + (perSomuchaPrice * somuchaQtt) + (perJilapiPrice * jilapiQtt);
    }
    // error handling for negative number
    else if (singaraQtt < 0 || somuchaQtt < 0 || jilapiQtt < 0) {
        totalPrice = 'Please enter a positive number.';
    }
    // error handling for string
    else if (typeof (singaraQtt) != 'number' || typeof (somuchaQtt) != 'number' || typeof (jilapiQtt) != 'number') {
        totalPrice = 'Not accept text, please enter a positive number.';
    }
    return totalPrice;
}



// Problem 3:
function picnicBudget(numberOfMember) {
    const budgetForFirst100 = 5000;
    const budgetForsecond100 = 4000;
    const budgetForMoreThan200 = 3000;
    let totalPicnicBudget = 0;
    if ((numberOfMember >= 0) && (typeof (numberOfMember) === 'number')) {
        // Picnic budget for 1 to 100 mebbers
        if (numberOfMember <= 100) {
            const budgetOfFirst100 = numberOfMember * budgetForFirst100;
            totalPicnicBudget = budgetOfFirst100;
        }
        // Picnic budget for 1 to 200 mebbers
        else if (numberOfMember <= 200) {
            const budgetOfFirst100 = 100 * budgetForFirst100;
            const budgetOfsecond100 = (numberOfMember - 100) * budgetForsecond100;
            totalPicnicBudget = budgetOfFirst100 + budgetOfsecond100;
        }
        // Picnic budget for more tham 200 mebbers
        else {
            const budgetOfFirst100 = 100 * budgetForFirst100;
            const budgetOfsecond100 = 100 * budgetForsecond100;
            const budgetOfMoreThan200 = (numberOfMember - 200) * budgetForMoreThan200;
            totalPicnicBudget = budgetOfFirst100 + budgetOfsecond100 + budgetOfMoreThan200;
        }
    }
    // error handling for negative number
    else if (numberOfMember < 0) {
        totalPicnicBudget = 'Please enter a positive number.';
    }
    // error handling for string
    else if (typeof (numberOfMember) != 'number') {
        totalPicnicBudget = 'Not accept text, please enter a positive number.';
    }
    return totalPicnicBudget;
}



// Problem 4:
function oddFriend(friends) {
    let the1stOddFriend;
    for (const friend of friends) {
        if (typeof (friend) === 'string') {
            if (friend.length % 2 != 0) {
                the1stOddFriend = friend;
                break;
            }
            else {
                the1stOddFriend = 'Please enter a list of names.';
            }
        }
    }
    return the1stOddFriend;
}
