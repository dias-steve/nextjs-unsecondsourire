export const months = {
    "Jan": "Janvier",
    "Feb": "Février",
    "Mar": "Marse",
    "Apr": "Avril",
    "May": "Mai",
    "June": "Juin",
    "July": "Juillet",
    "Aug": "Août",
    "Sep": "Septembre",
    "Oct": "Octobre",
    "Nov": "Novembre",
    "Dec": 'Décembre'
}

export const days = {
    "Mon" : "Lundi",
    "Tues":"Mardi",
    "Tue": "Mardi",
    "Wed": "Mercredi",
    "Thu": "Jeudi",
    "Thur":"Jeudi",
    "Thurs":"Jeudi",
    "Fri": "Vendredi",
    "Sat": "Samedi",
    "Sun": "Dimanche"
}

export const convertEnglishToFrenchDay = (englishDate) => {
    const tableDate = englishDate.split(" ");
    const result = days[tableDate[0]]+" "+tableDate[2]+" "+months[tableDate[1]]+" "+tableDate[3];

    return result;
}

export const formatDate = (date) => {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-');
}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }