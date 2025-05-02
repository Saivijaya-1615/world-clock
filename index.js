function updateTime() {
  let laTime = moment().tz("America/Los_Angeles");
  document.querySelector("#la-date").innerHTML = laTime.format("MMMM Do YYYY");
  document.querySelector("#la-time").innerHTML = laTime.format("h:mm:ss A");

  let parisTime = moment().tz("Europe/Paris");
  document.querySelector("#paris-date").innerHTML = parisTime.format("MMMM Do YYYY");
  document.querySelector("#paris-time").innerHTML = parisTime.format("h:mm:ss A");
}

setInterval(updateTime, 1000);
