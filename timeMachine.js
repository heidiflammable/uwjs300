'use strict';
/* eslint-disable no-unused-vars */
var timeMachine = ( function iife() {
/* eslint-enable no-unused-vars */
  var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'];
  var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
      'Thursday', 'Friday', 'Saturday'];

  var internalDate = null;

  function dateInstantiate() {
    if ( internalDate === null ) {
      internalDate = new Date();

      return internalDate;
    }
  }

  function setDate( dateInput ) {
    dateInstantiate();

    if ( dateInput instanceof Date ) {
      internalDate = new Date( dateInput );

      return internalDate;
    }
    else if ( dateInput === undefined ) {
      internalDate = new Date();

      return internalDate;
    }
    else{
      internalDate = new Date( dateInput );

      return internalDate;
    }
  }

  function getDate( formatRequest ){
    dateInstantiate();

    if ( formatRequest === undefined) {
      return ( internalDate.getTime() );
    }
    else if ( formatRequest.format === 'formatted' ) {
      return month [ internalDate.getMonth() ] + ' ' + internalDate.getDate() +
       ', ' + internalDate.getFullYear();
    }
    else if ( formatRequest.format === 'milliseconds') {
      return internalDate.getTime();
    }
  }

  function getDayName() {
    dateInstantiate();

    return weekday[ internalDate.getDay() ];
  }

  function getMonthName() {
    dateInstantiate();

    return month[ internalDate.getMonth() ];
  }

  function isFuture() {
    dateInstantiate();

    if ( internalDate > Date.now() ) {
      return true;
    } else {
      return false;
    }
  }

  function isToday() {
    //figure out if month day and year of right now equals the
    //month day and year of internal date
    dateInstantiate();
    var rightNow = new Date();
    var rightNowAsString = rightNow.toDateString();
    var internalDateAsString = internalDate.toDateString();

    if (rightNowAsString === internalDateAsString) {
      return true;
    } else {
      return false;
    }
  }

  return {
    setDate: setDate,
    getDate: getDate,
    getDayName: getDayName,
    getMonthName: getMonthName,
    isFuture: isFuture,
    isToday: isToday
  };
})();