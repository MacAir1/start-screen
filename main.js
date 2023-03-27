// // time.innerText = hours + ":" + minutes + ":" + seconds;

// // console.log(newDate);

// function getTime() {
//   const time = document.querySelector(".time");

//   const newDate = new Date();

//   const hours = String(newDate.getHours());
//   const minutes = newDate.getMinutes();
//   const seconds = newDate.getSeconds();
//   time.innerText = hours + ":" + minutes + ":" + seconds;
//   if (seconds.toString().length === 1) {
//     seconds = "0" + seconds;
//   }
// }

// getTime();

// setInterval(getTime, 1000);
let isLoading = false;

const QUOTES = "quotes";

function getTime() {
  const time = document.querySelector(".time");

  const newDate = new Date();

  const hours = String(newDate.getHours()).padStart(2, "0");
  const minutes = String(newDate.getMinutes()).padStart(2, "0");
  const seconds = String(newDate.getSeconds()).padStart(2, "0");

  // time.innerText = hours + ":" + minutes + ":" + seconds;
  time.innerText = `${hours}:${minutes}:${seconds}`;
}

getTime();
setInterval(getTime, 1000);

function getQuotes() {
  const quotesMsg = document.querySelector(".quotesMsg");
  let savedQuotes = localStorage.getItem(QUOTES);

  if (!savedQuotes) {
    localStorage.setItem(
      QUOTES,
      JSON.stringify([
        "열심히 살지맙시다.",
        "그래도 열심히 살아야지.",
        "열심히 살면 뭐해~",
        "열심히 살면 반드시 빛이 온다.",
      ])
    );

    savedQuotes = localStorage.getItem(QUOTES);
  }

  let quotesArray = JSON.parse(savedQuotes);

  quotesMsg.innerText =
    quotesArray[Math.floor(Math.random() * quotesArray.length)];
}

getQuotes();

function onClickAdd() {
  const newQuotes = document.querySelector(".newQuotes");

  newQuotes.style.display = "inline-block";
}

function onClickRegist() {
  const newQuotesInput = document.querySelector(".newQuotesInput");

  if (!newQuotesInput.value) {
    return; //빈 값 입력시 콘솔 작동 안되게해줌
  }
  const quotesMsg = document.querySelector(".quotesMsg");
  let savedQuotes = localStorage.getItem(QUOTES);
  const newQuotes = document.querySelector(".newQuotes");
  let quotesArray = JSON.parse(savedQuotes);
  quotesArray.push(newQuotesInput.value);

  localStorage.setItem(QUOTES, JSON.stringify(quotesArray));

  quotesMsg.innerHTML = `<span style="color:red;">${newQuotesInput.value}</span>`;
  newQuotes.style.display = "none";
}
async function onClickSearch() {
  const searchInput = document.querySelector(".searchInput");
  const searchResult = document.querySelector(".searchResult");
  if (!searchInput.value) return;

  const question = searchInput.value;

  searchInput.value = "검색 중 입니다... 잠시만 기다려주세요.";

  // 프론트엔드에서 백엔드
  const response = await axios.post(
    "https://holy-fire-2749.fly.dev/chat",
    {
      question,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer BLOCKCHAINSCHOOL3",
      },
    }
  );

  if (response.status === 200) {
    searchResult.style.display = "inline";
    searchResult.innerText = response.data.choices[0].message.content;
  }

  searchInput.value = "";
  isLoading = false;
}

function onClickToggle() {
  const nft = document.querySelector(".nft");
  const nftView = document.querySelector("nftView");

  nft.style.display = "none";
  nftView.sytle.display = "inline-block";
}

function onClickToggle(value) {
  const nft = document.querySelector(".nft");
  const nftView = document.querySelector(".nftView");

  if (value) {
    nft.style.display = "inline-block";
    nftView.style.display = "none";
  } else {
    nft.style.display = "none";
    nftView.style.display = "inline-block";
  }
}
// const QUOTES = "quotes";

// function getTime() {
//   const time = document.querySelector(".time");

//   const newDate = new Date();

//   const hours = String(newDate.getHours()).padStart(2, "0");
//   const minutes = String(newDate.getMinutes()).padStart(2, "0");
//   const seconds = String(newDate.getSeconds()).padStart(2, "0");

//   // time.innerText = hours + ":" + minutes + ":" + seconds;
//   time.innerText = `${hours}:${minutes}:${seconds}`;
// }

// getTime();
// setInterval(getTime, 1000);

// function getQuotes() {
//   const quotesMsg = document.querySelector(".quotesMsg");
//   let savedQuotes = localStorage.getItem(QUOTES);

//   if (!savedQuotes) {
//     localStorage.setItem(
//       QUOTES,
//       JSON.stringify([
//         "열심히 살지맙시다.",
//         "그래도 열심히 살아야지.",
//         "열심히 살면 뭐해~",
//         "열심히 살면 반드시 빛이 온다.",
//       ])
//     );

//     savedQuotes = localStorage.getItem(QUOTES);
//   }

//   let quotesArray = JSON.parse(savedQuotes);

//   quotesMsg.innerText =
//     quotesArray[Math.floor(Math.random() * quotesArray.length)];
// }

// getQuotes();

// function onClickAdd() {
//   const newQuotes = document.querySelector(".newQuotes");

//   newQuotes.style.display = "inline-block";
// }

// function onClickRegist() {
//   const quotesMsg = document.querySelector(".quotesMsg");
//   const newQuotes = document.querySelector(".newQuotes");
//   const newQuotesInput = document.querySelector(".newQuotesInput");

//   if (!newQuotesInput.value) {
//     return;
//   }

//   let savedQuotes = localStorage.getItem(QUOTES);

//   let quotesArray = JSON.parse(savedQuotes);
//   quotesArray.push(newQuotesInput.value);

//   localStorage.setItem(QUOTES, JSON.stringify(quotesArray));

//   quotesMsg.innerHTML = `<span style="color:red;">${newQuotesInput.value}</span>`;
//   newQuotes.style.display = "none";
// }
