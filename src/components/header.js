const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  //  Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
const headerEl = document.createElement("div");
headerEl.classList.add("header")
console.log('creating the header!', headerEl)
const dateEl = document.createElement("span");
dateEl.classList.add("date")
dateEl.textContent = date;
const titleEl= document.createElement("h1")
titleEl.textContent = title;
const tempEl = document.createElement("span")
tempEl.classList.add("temp")
tempEl.textContent = temp;
headerEl.appendChild(dateEl);
headerEl.appendChild(titleEl);
headerEl.appendChild(tempEl);
 return headerEl;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  // HINT: querySelector can take in a string (ie querySelector("#wrapper")) 
  // but it can also take in a variable (ie querySelector(selector))
  // We are taking care of passing in the correct selector on line 16,
  // so all that you need to do is pass it into the querySelector method
  // for the tests to work!
const headerEl1 = document.querySelector(selector)
headerEl1.appendChild(Header("BloomTech Times", "09,25,1996", "27"))
return headerAppender

}


export { Header, headerAppender }
