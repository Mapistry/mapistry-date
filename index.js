var Date = {
  startOfDay: function(d) {
    d.setHours(0);
    d.setMinutes(0);
    d.setSeconds(0);
    d.setMilliseconds(0);
    return d;
  },

  endOfDay: function(d) {
    d.setHours(23);
    d.setMinutes(59);
    d.setSeconds(59);
    d.setMilliseconds(999);
    return d;
  },

  getDaysInMonth: function(month, year) {
    if (month == 8 || month == 3 || month === 5 || month == 10) {
      return 30;
    } else if (month === 1) {
      // February
      return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0) ? 29 : 28
    }
    return 31;

  },

  startOfWeek: function(d) {
    var dayOfWeek = d.getDay();
    var dayInMonth = d.getDate();

    if (dayOfWeek >= dayInMonth) {
      d.setDate(dayInMonth - dayOfWeek);
      return this.startOfDay(d);
    }
    var month = d.getMonth();
    var year = d.getFullYear();
    if (month > 0) {
      d.setMonth(month - 1);
    } else {
      d.setMonth(11);
      d.setFullYear(year - 1);
    }
    var daysInMonth = this.getDaysInMonth(d.getMonth(), year);
    d.setDate(daysInMonth + dayInMonth - dayOfWeek);
    return this.startOfDay(d);

  },

  endOfWeek: function(d) {
    var dayOfWeek = d.getDay();
    var dayInMonth = d.getDate();
    var year = d.getFullYear();
    var month = d.getMonth();
    var daysInMonth = this.getDaysInMonth(d.getMonth(), year);

    if (dayInMonth + 6 - dayOfWeek <= daysInMonth) {
      d.setDate(dayInMonth + 6 - dayOfWeek);
      return this.endOfDay(d);
    }

    if (month < 11) {
      d.setMonth(month + 1);
    } else {
      d.setMonth(0);
      d.setFullYear(year + 1);
    }
    d.setDate(dayInMonth + 6 - dayOfWeek - daysInMonth);
    return this.endOfDay(d);
  },

  startOfMonth: function(d) {
    d.setDate(1);
    return this.startOfDay(d);
  },

  endOfMonth: function(d) {
    d.setDate(this.getDaysInMonth(d.getMonth(), d.getYear()));
    return this.endOfDay(d);
  },

  startOfQuarter: function(d) {
    d.setMonth(Math.floor(d.getMonth()/3) * 3);
    return this.startOfMonth(d);
  },

  endOfQuarter: function(d) {
    d.setMonth(Math.floor(d.getMonth()/3) * 3 + 2);
    return this.endOfMonth(d);
  },

  addMonths: function(d, numMonths){
    var month = d.getMonth();
    if (month + numMonths < 12) {
      d.setMonth(month + numMonths);
      return d;
    }

    d.setFullYear(d.getFullYear() + 1);
    d.setMonth(month + numMonths - 12);
    return d;
  },

  addLessThan29Days: function(d, daysToAdd) {
    if (daysToAdd > 28) {
      throw new Error('Only implemented to add less than one month of days!');
    }

    var dayOfMonth = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();
    var daysInMonth = this.getDaysInMonth(month, year);
    if (dayOfMonth + daysToAdd <= daysInMonth) {
      d.setDate(dayOfMonth + daysToAdd);
      return d;
    }

    if (month < 11) {
      d.setMonth(month + 1);
    } else {
      d.setMonth(0);
      d.setFullYear(year + 1);
    }
    d.setDate(dayOfMonth + daysToAdd - daysInMonth);
    return d;
  },

  subtractLessThan29Days: function(d, daysToSubtract) {
    if (daysToSubtract > 28) {
      throw new Error('Only implemented to subtract less than one month of days!');
    }

    var dayOfMonth = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();
    var daysInMonth = this.getDaysInMonth(month, year);
    if (dayOfMonth - daysToSubtract >= 0) {
      d.setDate(dayOfMonth - daysToSubtract);
      return d;
    }

    if (month > 0) {
      d.setMonth(month - 1);
    } else {
      d.setMonth(11);
      d.setFullYear(year - 1);
    }
    d.setDate(dayOfMonth - daysToSubtract + daysInMonth);
    return d;
  },

  isSameDay: function(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
  },

  isBetween: function(x, d1, d2) {
    return x.getTime() > d1.getTime() && x.getTime() < d2.getTime();
  },

  dayOfWeek: function(d, dayOfWeek) {
    var currentDayOfWeek = d.getDay();

    if (currentDayOfWeek < dayOfWeek) {
      return this.addLessThan29Days(d, dayOfWeek - currentDayOfWeek);
    } else if (currentDayOfWeek > dayOfWeek) {
      return this.subtractLessThan29Days(d, currentDayOfWeek - dayOfWeek);
    }
    return d;
  },

  getMonthName: function(d) {
    var month = d.getMonth();
    switch(month) {
      case 0:
        return 'January';
      case 1:
        return 'February';
      case 2:
        return 'March';
      case 3:
        return 'April';
      case 4:
        return 'May';
      case 5:
        return 'June';
      case 6:
        return 'July';
      case 7:
        return 'August';
      case 8:
        return 'September';
      case 9:
        return 'October';
      case 10:
        return 'November';
      default:
        return 'December';
    }
  },

  getDayOfYear: function(d){
    var month = d.getMonth();
    var i = 0;
    var dayOfYear = 0;
    while (i < month) {
      dayOfYear += this.getDaysInMonth(i++);
    }
    return dayOfYear + d.getDate();
  },

  getWeekOfYear: function(d){
    var dayOfYear = this.getDayOfYear(d);
    var weekOfYear = 0;
    while (weekOfYear*7 < dayOfYear) {
      weekOfYear++;
    }
    return weekOfYear;
  },

  getShortMonthName: function(d) {
    return this.getMonthName(d).substr(0, 3);
  },


  getQuarter: function(d) {
    return Math.floor(d.getMonth()/3) + 1;
  },

  _addZeroAtFront: function(n) {
    if (n < 10) {
      return '0' + n;
    }
    return n.toString();
  },

  getTwoCharDate: function(d) {
    return this._addZeroAtFront(d.getDate());
  },

  getTwoCharMonth: function(d) {
    return this._addZeroAtFront(d.getMonth() + 1);
  },

  isBeforeDay: function(d1, d2) {
    var y1 = d1.getFullYear();
    var y2 = d2.getFullYear();
    if (y1 !== y2) return y1 < y2;
    return this.getDayOfYear(d1) < this.getDayOfYear(d2);
  }
};


module.exports = Date;