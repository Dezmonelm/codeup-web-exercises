'use strict';
    console.log('Hello from External JS');
    alert('Welcome to my website!');
var favColor = prompt('What is your favorite color?');
    console.log('User entered:'  +favColor);
    alert('I love the color ' + favColor + '!')

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
// and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will
// you have to pay?

var theLittleMermaid = 3 * 3;
    theLittleMermaid = 3 * 3;
    console.log('theLittleMermaid');
    prompt('There is a $3 rental fee per day.' + '<br>'  + 'How long was The Little Mermaid kept')
    alert('payout ' + theLittleMermaid)
var brotherBear = 5 * 3;
    brotherBear = 5 * 3;
    prompt('How long was Brother Bear kept')
    alert('payout ' + brotherBear)
    console.log('brotherBear');
var hercules = 1 * 3;
    prompt('How long was Hercules kept')
    console.log('hercules');
    alert('payout ' + hercules)
var payout = 'theLittleMermaid' + 'brotherBear' + 'hercules';
    console.log('payout');

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate
// per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You
// worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

var googlePay = 400;
var amazonPay = 380;
var facebookPay = 350;

var weeklyPay = googlePay + amazonPay + facebookPay;
    console.log(weeklyPay);

    prompt('What is the total per week for the three companies you work for?');
    alert(weeklyPay);


// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with
// her current schedule.

var classCount = prompt('is the class full?');
    console.log(classCount + ' to the class capacity.');
var classSchedule = prompt('Do you have class at that time?');
    console.log(classSchedule + ' to schedule conflict.');
var studentEnrolled = !!classCount && !!classSchedule
    alert('Student Enrolles: ' + studentEnrolled + '!');
    console.log('Student Enrolled: ' + studentEnrolled + '!');

// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members
// do not need to buy a specific amount of products.

var productOffer = prompt('Have two or more items been purchased');
    console.log(productOffer >= 2);
var offerValid = prompt('Has offer expired?');
    console.log(offerValid + confirm('Has offer expired?'));
var premiem = prompt('Are you a premium member?')
    console.log(premiem + confirm(true));
var approved = (productOffer || offerValid) && premiem
    alert('APPROVED! ' + approved)