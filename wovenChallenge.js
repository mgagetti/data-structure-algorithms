function monthlyCharge(month, subscription, users) {
    if (!subscription) return 0;

    const planDate = new Date(`${month}-01`);

    // Filter out users that are out of the billing scope;
    const eligibleUsers = users.filter(({ activatedOn, deactivatedOn }) => {
        const deactivatedOnHandled = deactivatedOn || lastDayOfMonth(planDate);
        const { month: planMonth, year: planYear } = {
            month: planDate.getMonth(),
            year: planDate.getYear(),
        }
        const { month: activatedOnMonth, year: activatedOnYear } = {
            month: activatedOn.getMonth(),
            year: activatedOn.getYear()
        };
        const { month: deactivatedOnMonth, year: deactivatedOnYear } = {
            month: deactivatedOnHandled.getYear(),
            year: deactivatedOnHandled.getYear()
        };

        return (activatedOnMonth <= planMonth && activatedOnYear <= planYear) &&
            (deactivatedOnMonth >= planMonth && deactivatedOnYear >= planYear)
    })

    const daysInPlanMonth = planDate.getDate();
    const dailyPrice = subscription.monthlyPriceInCents / daysInPlanMonth;

    let total = 0;

    // Iterate through each day of the month to calculate the daily amount based on the number of active users
    for (let day = 1; day <= daysInPlanMonth; day++) {
        const dueDate = new Date(`${month}-${day}`);
        const usersActiveCount = eligibleUsers.filter(({ activatedOn, deactivatedOn }) => {
            const deactivatedOnHandled = deactivatedOn || lastDayOfMonth(planDate);
            return activatedOn <= dueDate && deactivatedOnHandled >= dueDate;
        }).length

        total += usersActiveCount * dailyPrice;
    }

    console.log(total);

    return total;
}