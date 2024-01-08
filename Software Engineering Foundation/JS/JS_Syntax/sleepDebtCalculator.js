function getSleepHours(day){
  day = day.toLowerCase();
  switch (day){
    case 'monday':
      return 8;
    case 'tuesday':
      return 7;
    case 'wednesday':
      return 6;
    case 'thursday':
      return 5;
    case 'friday':
      return 4
    case 'saturday':
      return 8
    case 'sunday':
      return 8;
    default:
      return 'Error day';
  }
}

function getActualSleepHours(){
  let totalSleepHours = 0;
  totalSleepHours += getSleepHours('monday');
  totalSleepHours += getSleepHours('tuesday');
  totalSleepHours += getSleepHours('wednesday');
  totalSleepHours += getSleepHours('thursday');
  totalSleepHours += getSleepHours('friday');
  totalSleepHours += getSleepHours('saturday');
  totalSleepHours += getSleepHours('sunday');
  return totalSleepHours
}

function getIdealSleepHours(){
  let idealHours = 8;
  return idealHours*7;
}

let calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours){
    return 'Perfect amount of sleep. '+actualSleepHours +' hours';
  }
  else if (actualSleepHours > idealSleepHours){
    let exceedHour = actualSleepHours - idealSleepHours;
    return 'You got more sleep than needed. '+exceedHour+' hours exceeded';
  }
  else if (actualSleepHours < idealSleepHours){
    let debtHour = idealSleepHours - actualSleepHours;
    return 'You should get some rest. '+debtHour+' hours debt'
  }
}

console.log(calculateSleepDebt())