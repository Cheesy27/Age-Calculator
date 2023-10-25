const dates = document.getElementById("dates");
const day = parseInt(document.getElementById("day").value);
const month = parseInt(document.getElementById("month").value);
const year = parseInt(document.getElementById("year").value);



dates.addEventListener("submit", function(e){
    e.preventDefault();

    const birthdate = new Date(year, month - 1, day); // Month is 0-based, so subtract 1
    const today = new Date();

    let ageInMilliseconds = today - birthdate;
    let ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
        ageInMilliseconds -= ageInYears * (1000 * 60 * 60 * 24 * 365.25);
    let ageInMonths = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 30.44));
        ageInMilliseconds -= ageInMonths * (1000 * 60 * 60 * 24 * 30.44);
    let ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));

    const results = document.getElementById("results");
    results.innerHTML = `
    <p><span id="aYears">${ageInYears}</span> years</p>
    <p><span id="aMonthfa-spin">${ageInMonths}</span> months</p>
    <p><span id="aDays">${ageInDays}</span> days</p>`

    const ageString = `${ageInYears} years, ${ageInMonths} months, and ${ageInDays} days`;
    console.log(ageString);
})

           
