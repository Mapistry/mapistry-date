var Date = {
  startOfDay: function(d) {
    d.setUTCHours(0, 0, 0, 0);
    return d;
  },

  endOfDay: function(d) {
    d.setUTCHours(23, 59, 59, 999);
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
    var dayOfWeek = d.getUTCDay();
    var dayInMonth = d.getUTCDate();

    if (dayOfWeek >= dayInMonth) {
      d.setUTCDate(dayInMonth - dayOfWeek);
      return this.startOfDay(d);
    }
    var month = d.getUTCMonth();
    var year = d.getUTCFullYear();
    if (month > 0) {
      d.setUTCMonth(month - 1);
    } else {
      d.setUTCMonth(11);
      d.setUTCFullYear(year - 1);
    }
    var daysInMonth = this.getDaysInMonth(d.getUTCMonth(), year);
    d.setUTCDate(daysInMonth + dayInMonth - dayOfWeek);
    return this.startOfDay(d);

  },

  endOfWeek: function(d) {
    var dayOfWeek = d.getUTCDay();
    var dayInMonth = d.getUTCDate();
    var year = d.getUTCFullYear();
    var month = d.getUTCMonth();
    var daysInMonth = this.getDaysInMonth(d.getUTCMonth(), year);

    if (dayInMonth + 6 - dayOfWeek <= daysInMonth) {
      d.setUTCDate(dayInMonth + 6 - dayOfWeek);
      return this.endOfDay(d);
    }

    if (month < 11) {
      d.setUTCMonth(month + 1);
    } else {
      d.setUTCMonth(0);
      d.setUTCFullYear(year + 1);
    }
    d.setUTCDate(dayInMonth + 6 - dayOfWeek - daysInMonth);
    return this.endOfDay(d);
  },

  startOfMonth: function(d) {
    d.setUTCDate(1);
    return this.startOfDay(d);
  },

  endOfMonth: function(d) {
    d.setUTCDate(this.getDaysInMonth(d.getUTCMonth(), d.getUTCFullYear()));
    return this.endOfDay(d);
  },

  startOfQuarter: function(d) {
    d.setUTCMonth(Math.floor(d.getUTCMonth()/3) * 3);
    return this.startOfMonth(d);
  },

  endOfQuarter: function(d) {
    d.setUTCMonth(Math.floor(d.getUTCMonth()/3) * 3 + 2);
    return this.endOfMonth(d);
  },

  addMonths: function(d, numMonths){
    if (numMonths > 11) {
      throw new Error('Only implemented to add 11 months!');
    }

    var month = d.getUTCMonth();
    if (month + numMonths < 12) {
      d.setUTCMonth(month + numMonths);
      return d;
    }

    d.setUTCFullYear(d.getUTCFullYear() + 1);
    d.setUTCMonth(month + numMonths - 12);
    return d;
  },

  addLessThan29Days: function(d, daysToAdd) {
    if (daysToAdd > 28) {
      throw new Error('Only implemented to add less than one month of days!');
    }

    var dayOfMonth = d.getUTCDate();
    var month = d.getUTCMonth();
    var year = d.getUTCFullYear();
    var daysInMonth = this.getDaysInMonth(month, year);
    if (dayOfMonth + daysToAdd <= daysInMonth) {
      d.setUTCDate(dayOfMonth + daysToAdd);
      return d;
    }

    if (month < 11) {
      d.setUTCMonth(month + 1);
    } else {
      d.setUTCMonth(0);
      d.setUTCFullYear(year + 1);
    }
    d.setUTCDate(dayOfMonth + daysToAdd - daysInMonth);
    return d;
  },

  subtractLessThan29Days: function(d, daysToSubtract) {
    if (daysToSubtract > 28) {
      throw new Error('Only implemented to subtract less than one month of days!');
    }

    var dayOfMonth = d.getUTCDate();
    var month = d.getUTCMonth();
    var year = d.getUTCFullYear();
    var daysInMonth = this.getDaysInMonth(month, year);
    if (dayOfMonth - daysToSubtract >= 0) {
      d.setUTCDate(dayOfMonth - daysToSubtract);
      return d;
    }

    if (month > 0) {
      d.setUTCMonth(month - 1);
    } else {
      d.setUTCMonth(11);
      d.setUTCFullYear(year - 1);
    }
    d.setUTCDate(dayOfMonth - daysToSubtract + daysInMonth);
    return d;
  },

  isSameDay: function(d1, d2) {
    return d1.getUTCFullYear() === d2.getUTCFullYear() && d1.getUTCMonth() === d2.getUTCMonth() && d1.getUTCDate() === d2.getUTCDate();
  },

  isBetween: function(x, d1, d2) {
    return x.getTime() > d1.getTime() && x.getTime() < d2.getTime();
  },

  dayOfWeek: function(d, dayOfWeek) {
    var currentDayOfWeek = d.getUTCDay();

    if (currentDayOfWeek < dayOfWeek) {
      return this.addLessThan29Days(d, dayOfWeek - currentDayOfWeek);
    } else if (currentDayOfWeek > dayOfWeek) {
      return this.subtractLessThan29Days(d, currentDayOfWeek - dayOfWeek);
    }
    return d;
  },

  getMonthName: function(d) {
    var month = d.getUTCMonth();
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
    var month = d.getUTCMonth();
    var i = 0;
    var dayOfYear = 0;
    while (i < month) {
      dayOfYear += this.getDaysInMonth(i++);
    }
    return dayOfYear + d.getUTCDate();
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
    return Math.floor(d.getUTCMonth()/3) + 1;
  },

  _addZeroAtFront: function(n) {
    if (n < 10) {
      return '0' + n;
    }
    return n.toString();
  },

  getTwoCharDate: function(d) {
    return this._addZeroAtFront(d.getUTCDate());
  },

  getTwoCharMonth: function(d) {
    return this._addZeroAtFront(d.getUTCMonth() + 1);
  },

  isBeforeDay: function(d1, d2) {
    var y1 = d1.getUTCFullYear();
    var y2 = d2.getUTCFullYear();
    if (y1 !== y2) return y1 < y2;
    return this.getDayOfYear(d1) < this.getDayOfYear(d2);
  }
};


module.exports = Date;