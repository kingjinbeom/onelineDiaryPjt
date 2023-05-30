let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];


const getCurrentDateTime = () => {
    console.log('getCirrentDateTime() CALLED!!');

    let today = new Date();

    let year = today.getFullYear();
    let month = today.getMonth() + 1;   // 0: 1월
    let date = today.getDate();
    let day = today.getDay();       // 0: 일요일

    return `[${year}/${month}/${date}/${days[day]}] `;
}


//배포할때 console이 동작안하도록 한다
// const consolelogFlag = true;
// if (!consolelogFlag) {
//     console = {};
//     console.log = function () { };
//     console.warn = function () { };
//     console.error = function () { };
// }