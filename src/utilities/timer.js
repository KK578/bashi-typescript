class Timer {
    constructor() {
        if (!Timer.Instance) {
            this.DayInMillis = 86400000;
            Timer.Instance = this;
        }

        return Timer.Instance;
    }

    Tomorrow(time, callback) {
        if (typeof(time) !== Date) {
            return;
        }

        const now = new Date();
        let eventTime = new Date(now.getFullYear, now.getMonth(), now.getDate(),
            time.getHours(), time.getMinutes(), time.getSeconds()) - now;
        if (eventTime < 0) {
            eventTime += this.DayInMillis;
        }

        setTimeout(callback, eventTime);
    }
}

module.exports = Timer;
