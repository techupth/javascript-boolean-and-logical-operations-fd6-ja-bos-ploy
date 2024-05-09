// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday;
let hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent;
let isPlatinum;

let hasPromotion =
  (lastMonthPaidMoreThan4000 > 4000 &&
    isWeekday == ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] &&
    !hasBoughtProductFromITCategory &&
    !hasAttendedDiscountEvent) ||
  isPlatinum == "Platinum";

lastMonthPaidMoreThan4000 = 4001;
isWeekday = "Friday";
hasBoughtProductFromITCategory = false;
hasAttendedDiscountEvent = true;
isPlatinum = "Gold";

console.log(hasPromotion);
