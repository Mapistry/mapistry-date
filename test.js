var expect = require('expect.js');
var moment = require('moment');
var MapistryTime = require('./index');

// These tests all confirm functionality by simply testing against moment functions that they are replacing (for speed)
describe('time library', function() {
  describe('startOfDay', function() {
    it('correctly calculates start of day', function() {
      var m = moment().month(8).date(13).year(2016);
      var s = MapistryTime.startOfDay(new Date(m.format()));
      m  = m.startOf('day');
      expect(s.getDate()).to.be(m.date());
      expect(s.getMonth()).to.be(m.month());
      expect(s.getFullYear()).to.be(m.year());
      expect(s.getHours()).to.be(m.hour());
      expect(s.getSeconds()).to.be(m.second());
    });
  });

  describe('endOfDay', function() {
    it('correctly calculates end of day', function() {
      var m = moment().month(8).date(13).year(2016);
      var s = MapistryTime.endOfDay(new Date(m.format()));
      m  = m.endOf('day');
      expect(s.getDate()).to.be(m.date());
      expect(s.getMonth()).to.be(m.month());
      expect(s.getFullYear()).to.be(m.year());
      expect(s.getHours()).to.be(m.hour());
      expect(s.getSeconds()).to.be(m.second());
    });
  });

  describe('startOfWeek', function() {
    describe ('correctly calculates start of week', function() {
      it('for day at the beginning of week', function () {
        var m = moment().month(6).date(9).year(2017);
        var s = MapistryTime.startOfWeek(new Date(m.format()));
        m = m.startOf('week');
        expect(s.getDate()).to.be(m.date());
        expect(s.getMonth()).to.be(m.month());
        expect(s.getFullYear()).to.be(m.year());
        expect(s.getHours()).to.be(m.hour());
        expect(s.getSeconds()).to.be(m.second());
      });

      it('for week at the beginning of the month', function () {
        var m = moment().month(5).date(1).year(2017);
        var s = MapistryTime.startOfWeek(new Date(m.format()));
        m = m.startOf('week');
        expect(s.getDate()).to.be(m.date());
        expect(s.getMonth()).to.be(m.month());
        expect(s.getFullYear()).to.be(m.year());
        expect(s.getHours()).to.be(m.hour());
        expect(s.getSeconds()).to.be(m.second());
      });

      it('for week at the beginning of the year', function () {
        var m = moment().month(0).date(1).year(2016);
        var s = MapistryTime.startOfWeek(new Date(m.format()));
        m = m.startOf('week');
        expect(s.getDate()).to.be(m.date());
        expect(s.getMonth()).to.be(m.month());
        expect(s.getFullYear()).to.be(m.year());
        expect(s.getHours()).to.be(m.hour());
        expect(s.getSeconds()).to.be(m.second());
      });
    });
  });

  describe('endOfWeek', function() {
    describe ('correctly calculates end of week', function() {
      it('for day at the end of week', function () {
        var m = moment().month(6).date(15).year(2017);
        var s = MapistryTime.endOfWeek(new Date(m.format()));
        m = m.endOf('week');
        expect(s.getDate()).to.be(m.date());
        expect(s.getMonth()).to.be(m.month());
        expect(s.getFullYear()).to.be(m.year());
        expect(s.getHours()).to.be(m.hour());
        expect(s.getSeconds()).to.be(m.second());
      });

      it('for week at the end of the month', function () {
        var m = moment().month(5).date(29).year(2017);
        var s = MapistryTime.endOfWeek(new Date(m.format()));
        m = m.endOf('week');
        expect(s.getDate()).to.be(m.date());
        expect(s.getMonth()).to.be(m.month());
        expect(s.getFullYear()).to.be(m.year());
        expect(s.getHours()).to.be(m.hour());
        expect(s.getSeconds()).to.be(m.second());
      });

      it('for week at the end of the year', function () {
        var m = moment().month(11).date(12).year(2017);
        var s = MapistryTime.endOfWeek(new Date(m.format()));
        m = m.endOf('week');
        expect(s.getDate()).to.be(m.date());
        expect(s.getMonth()).to.be(m.month());
        expect(s.getFullYear()).to.be(m.year());
        expect(s.getHours()).to.be(m.hour());
        expect(s.getSeconds()).to.be(m.second());
      });
    });
  });

  describe('startOfMonth', function() {
    it('correctly calculates start of month', function() {
      var m = moment().month(6).date(15).year(2017);
      var s = MapistryTime.startOfMonth(new Date(m.format()));
      m = m.startOf('month');
      expect(s.getDate()).to.be(m.date());
      expect(s.getMonth()).to.be(m.month());
      expect(s.getFullYear()).to.be(m.year());
      expect(s.getHours()).to.be(m.hour());
      expect(s.getSeconds()).to.be(m.second());
    });
  });

  describe('endOfMonth', function() {
    it('correctly calculates end of month', function() {
      var m = moment().month(6).date(15).year(2017);
      var s = MapistryTime.endOfMonth(new Date(m.format()));
      m = m.endOf('month');
      expect(s.getDate()).to.be(m.date());
      expect(s.getMonth()).to.be(m.month());
      expect(s.getFullYear()).to.be(m.year());
      expect(s.getHours()).to.be(m.hour());
      expect(s.getSeconds()).to.be(m.second());
    });
  });

  describe('startOfQuarter', function() {
    it('correctly calculates start of quarter', function() {
      var m = moment().month(6).date(15).year(2017);
      var s = MapistryTime.startOfQuarter(new Date(m.format()));
      expect(s.getDate()).to.be(1);
      expect(s.getMonth()).to.be(6);
      expect(s.getFullYear()).to.be(2017);
      expect(s.getHours()).to.be(0);
      expect(s.getSeconds()).to.be(0);
    });
  });

  describe('endOfQuarter', function() {
    it('correctly calculates end of quarter', function() {
      var m = moment().month(6).date(15).year(2017);
      var s = MapistryTime.endOfQuarter(new Date(m.format()));
      expect(s.getDate()).to.be(30);
      expect(s.getMonth()).to.be(8);
      expect(s.getFullYear()).to.be(2017);
      expect(s.getHours()).to.be(23);
      expect(s.getSeconds()).to.be(59);
    });
  });

  describe('getDaysInMonth', function() {
    describe('gets correct days for February', function() {
      it ('in a leap year', function() {
        expect(MapistryTime.getDaysInMonth(1, 2016), 29);
      });

      it ('in a non leap year', function() {
        expect(MapistryTime.getDaysInMonth(1, 2015), 28);
      });
    });

    it('gets correct days for June', function() {
      expect(MapistryTime.getDaysInMonth(5, 2015), 30);
    });

    it('gets correct days for January', function() {
      expect(MapistryTime.getDaysInMonth(0, 2015), 31);
    });
  });

  describe('addMonths', function() {
    it('add months so that year does not change', function() {
      var m = moment().month(6).date(5).year(2017);
      var s = MapistryTime.addMonths(new Date(m.format()), 2);
      m = m.add(2, 'months');
      expect(s.getDate()).to.be(m.date());
      expect(s.getMonth()).to.be(m.month());
      expect(s.getFullYear()).to.be(m.year());
      expect(s.getHours()).to.be(m.hour());
      expect(s.getSeconds()).to.be(m.second());
    });

    it('add months so that year does change', function() {
      var m = moment().month(12).date(5).year(2017);
      var s = MapistryTime.addMonths(new Date(m.format()), 2);
      m = m.add(2, 'months');
      expect(s.getDate()).to.be(m.date());
      expect(s.getMonth()).to.be(m.month());
      expect(s.getFullYear()).to.be(m.year());
      expect(s.getHours()).to.be(m.hour());
      expect(s.getSeconds()).to.be(m.second());
    });
  });

  describe('addLessThan29Days', function() {
    it('add two weeks so that year does not change', function() {
      var m = moment().month(6).date(5).year(2017);
      var s = MapistryTime.addLessThan29Days(new Date(m.format()), 14);
      m = m.add(2, 'weeks');
      expect(s.getDate()).to.be(m.date());
      expect(s.getMonth()).to.be(m.month());
      expect(s.getFullYear()).to.be(m.year());
      expect(s.getHours()).to.be(m.hour());
      expect(s.getSeconds()).to.be(m.second());
    });

    it('add two weeks so that year does change', function() {
      var m = moment().month(12).date(25).year(2017);
      var s = MapistryTime.addLessThan29Days(new Date(m.format()), 14);
      m = m.add(2, 'weeks');
      expect(s.getDate()).to.be(m.date());
      expect(s.getMonth()).to.be(m.month());
      expect(s.getFullYear()).to.be(m.year());
      expect(s.getHours()).to.be(m.hour());
      expect(s.getSeconds()).to.be(m.second());
    });
  });

  describe('subtractLessThan29Days', function() {

    it('subtract days so that month and year do not change', function() {
      var m = moment().month(6).date(5).year(2017);
      var s = MapistryTime.subtractLessThan29Days(new Date(m.format()),2);
      m = m.subtract(2, 'days');
      expect(s.getDate()).to.be(m.date());
      expect(s.getMonth()).to.be(m.month());
      expect(s.getFullYear()).to.be(m.year());
      expect(s.getHours()).to.be(m.hour());
      expect(s.getSeconds()).to.be(m.second());
    });

    it('subtract days so that month and year do change', function() {
      var m = moment().month(0).date(5).year(2017);
      var s = MapistryTime.subtractLessThan29Days(new Date(m.format()),7);
      m = m.subtract(7, 'days');
      expect(s.getDate()).to.be(m.date());
      expect(s.getMonth()).to.be(m.month());
      expect(s.getFullYear()).to.be(m.year());
      expect(s.getHours()).to.be(m.hour());
      expect(s.getSeconds()).to.be(m.second());
    });
  });

  describe('isSameDay', function() {
    var m2, d2;
    beforeEach(function() {
      m2 = moment().startOf('day').add(10, 'hours');
      d2 = new Date(m2.format());
    });

    it('returns true if same day', function() {
      var m1 = moment().startOf('day').add(4, 'hours');
      var d1 = new Date(m1.format());
      expect(m1.isSame(m2, 'day')).to.be.ok();
      expect(MapistryTime.isSameDay(d1, d2)).to.be.ok();
    });

    it('otherwise returns false', function() {
      var m1 = moment().startOf('day').subtract(4, 'hours');
      var d1 = new Date(m1.format());
      expect(m1.isSame(m2, 'day')).to.not.be.ok();
      expect(MapistryTime.isSameDay(d1, d2)).to.not.be.ok();
    });
  });

  describe('isBetween', function() {
    var m1, m2, d1, d2;
    beforeEach(function() {
      m1 = moment().startOf('day').add(4, 'hours');
      m2 = moment().startOf('day').add(10, 'hours');
      d1 = new Date(m1.format());
      d2 = new Date(m2.format());
    });

    it('returns true if date is between two dates', function() {
      var mb = moment().startOf('day').add(6, 'hours');
      var b = new Date(mb.format());
      expect(mb.isBetween(m1, m2)).to.be.ok();
      expect(MapistryTime.isBetween(b, d1, d2)).to.be.ok();
    });

    it('returns false if date is not between two dates', function() {
      var mb = moment().startOf('day').add(2, 'days');
      var b = new Date(mb.format());
      expect(mb.isBetween(m1, m2)).to.not.be.ok();
      expect(MapistryTime.isBetween(b, d1, d2)).to.not.be.ok();
    });
  });

  describe('dayOfWeek', function() {
    it('changes day of week to Monday', function() {
      var m = moment().month(5).date(21).year(2017);
      var s = MapistryTime.dayOfWeek(new Date(m.format()), 1);
      m = m.isoWeekday(1);
      expect(s.getDate()).to.be(m.date());
      expect(s.getMonth()).to.be(m.month());
      expect(s.getFullYear()).to.be(m.year());
      expect(s.getHours()).to.be(m.hour());
      expect(s.getSeconds()).to.be(m.second());
    });

    it('changes day of week to Friday', function() {
      var m = moment().month(5).date(21).year(2017);
      var s = MapistryTime.dayOfWeek(new Date(m.format()), 5);
      m = m.isoWeekday(5);
      expect(s.getDate()).to.be(m.date());
      expect(s.getMonth()).to.be(m.month());
      expect(s.getFullYear()).to.be(m.year());
      expect(s.getHours()).to.be(m.hour());
      expect(s.getSeconds()).to.be(m.second());
    });
  });

  describe('getQuarter', function() {
    it ('returns same quarter as moment would', function() {
      var m = moment().month(5).date(21).year(2017);
      var d = new Date(m.format());
      expect(MapistryTime.getQuarter(d)).to.be(m.quarter());
    });
  });

  describe('getDayOfYear', function() {
    it ('returns same day as moment would', function() {
      var m = moment().month(5).date(21).year(2017);
      var d = new Date(m.format());
      expect(MapistryTime.getDayOfYear(d)).to.be(parseInt(m.format('DDD')));
    });
  });

  describe('getWeekOfYear', function() {
    it ('returns same week as moment would', function() {
      var m = moment().month(5).date(21).year(2017);
      var d = new Date(m.format());
      expect(MapistryTime.getWeekOfYear(d)).to.be(parseInt(m.format('w')));
    });
  });

  describe('getTwoCharDate', function() {
    it ('returns same string as moment would', function() {
      var m = moment().month(5).date(21).year(2017);
      var d = new Date(m.format());
      expect(MapistryTime.getTwoCharDate(d)).to.be(m.format('DD'));
    });
  });

  describe('getShortMonthName', function() {
    it('returns Sep for date in September', function() {
      var m = moment().month(8).date(21).year(2017);
      var d = new Date(m.format());
      expect(MapistryTime.getShortMonthName(d)).to.be('Sep');
    })
  })
});
