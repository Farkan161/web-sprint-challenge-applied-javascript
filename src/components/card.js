import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const { headline, authorPhoto, authorName } = article;

  const card = document.createElement('div');
  card.classList.add('card');

  const headlineEl = document.createElement('div');
  headlineEl.classList.add('headline');
  headlineEl.textContent = headline;
  card.appendChild(headlineEl);

  const authorEl = document.createElement('div');
  authorEl.classList.add('author');

  const imgContainerDiv = document.createElement('div');
  imgContainerDiv.classList.add('img-container');

  const img = document.createElement('img');
  img.src = authorPhoto;
  imgContainerDiv.appendChild(img);

  authorEl.appendChild(imgContainerDiv);

  const authorNameSpan = document.createElement('span');
  authorNameSpan.textContent = `By ${authorName}`;
  authorEl.appendChild(authorNameSpan);

  card.appendChild(authorEl);

  card.addEventListener('click', () => {
    console.log(headline);
  });

  return card;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  fetch('http://localhost:5001/api/articles')
    .then(res => res.json())
    .then(data => {
      const articles = Object.values(data.articles).flat()
      const container = document.querySelector(selector)
      articles.forEach(article => container.append(Card(article)))
    })
}

export { Card, cardAppender }
