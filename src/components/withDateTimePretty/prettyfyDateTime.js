export default function prettyfyDateTime(inputDateString) {
  const date = (new Date(inputDateString)).getTime();
  const now = (new Date()).getTime();
  const difference = now - date;

  const MINUTE = 60 * 1000 //ms
  const HOUR = 60 * MINUTE; //ms
  const DAY = 24 * HOUR; //ms

  const readableMinRus = {
    at_1: 'минуту',
    at_2_4: 'минуты',
    at_11: 'минут',
    at_12_14: 'минут',
    other: 'минут',
  }

  const readableHourRus = {
    at_1: 'час',
    at_2_4: 'часа',
    at_11: 'часов',
    at_12_14: 'часов',
    other: 'часов',
  }

  const readableDaysRus = {
    at_1: 'день',
    at_2_4: 'дня',
    at_11: 'дней',
    at_12_14: 'дней',
    other: 'дней',
  }

  const getRest = (val) => {
    const rest100 = val % 100;
    if (rest100 === 11) {
      return 'at_11'
    }
    
    if (rest100 >= 12 && rest100 <= 14) {
      return 'at_12_14'
    }
    
    const rest10 = val % 10;
    if (rest10 === 1) {
      return 'at_1'
    }
    
    if (rest10 >= 2 && rest10 <= 4) {
      return 'at_2_4'
    }
    
    return 'other';
  }
  
  if (difference <= 0) {
    return 'Это в будущем'
  } else if (difference < HOUR) {
    const mm = Math.floor(difference / MINUTE);
    const readMin = readableMinRus[getRest(mm)];
    return `${mm} ${readMin} назад` 
  } else if (difference < DAY) {
    const hh = Math.floor(difference / HOUR);
    const readHours = readableHourRus[getRest(hh)];
    return `${hh} ${readHours} назад` 
  }
  const dd = Math.floor(difference / DAY);
  const readDays = readableDaysRus[getRest(dd)];
  return `${dd} ${readDays} назад`;
};
