export class DateTime {

    static now() {
        return Date.now();
    }

    static today() {
        return new Date();
    }

    static daysFromToday(days: number) {

        const today = new Date();

        today.setDate(today.getDate() + days);

        return today;

    }

}