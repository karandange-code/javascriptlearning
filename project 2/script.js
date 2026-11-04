const BASE_URLS = [
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies",
  "https://latest.currency-api.pages.dev/v1/currencies",
];

const dropdowns = document.querySelectorAll(".dropdown select");
const form = document.querySelector("form");
const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");
const amountInput = document.querySelector(".amount input");
const message = document.querySelector(".msg");
const swapIcon = document.querySelector(".swap");

const updateFlag = (element) => {
  const countrycode = countryList[element.value];
  const img = element.parentElement.querySelector("img");
  img.src = `https://flagsapi.com/${countrycode}/flat/64.png`;
};

// Dropdown options bharo
for (const select of dropdowns) {
  for (const currcode in countryList) {
    const option = document.createElement("option");
    option.innerText = currcode;
    option.value = currcode;

    if (select.name === "from" && currcode === "USD") option.selected = true;
    if (select.name === "to" && currcode === "INR") option.selected = true;

    select.append(option);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
    updateExchangeRate();
  });
}

// Rates fetch karo (fallback ke saath)
const fetchRates = async (from) => {
  for (const base of BASE_URLS) {
    try {
      const res = await fetch(`${base}/${from}.json`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn("Failed:", base);
    }
  }
  throw new Error("Exchange rate fetch nahi hua");
};

const updateExchangeRate = async () => {
  let amount = Number(amountInput.value);

  if (amountInput.value.trim() === "" || amount < 0 || !Number.isFinite(amount)) {
    amountInput.value = "1";
    amount = 1;
  }

  const from = fromCurrency.value.toLowerCase();
  const to = toCurrency.value.toLowerCase();

  try {
    message.innerText = "Getting exchange rate...";

    const data = await fetchRates(from);
    const rate = data[from]?.[to];

    if (rate === undefined) {
      throw new Error("Currency rate is not available");
    }

    const converted = amount * rate;
    message.innerText = `${amount} ${from.toUpperCase()} = ${converted.toFixed(2)} ${to.toUpperCase()}`;
  } catch (error) {
    message.innerText = "Exchange rate load nahi hua. Dobara try karo.";
    console.error(error);
  }
};

// Button click / Enter dabane par
form.addEventListener("submit", (event) => {
  event.preventDefault();
  updateExchangeRate();
});

// Swap icon: from aur to badlo
swapIcon.addEventListener("click", () => {
  [fromCurrency.value, toCurrency.value] = [toCurrency.value, fromCurrency.value];
  updateFlag(fromCurrency);
  updateFlag(toCurrency);
  updateExchangeRate();
});

// Page load par default conversion
window.addEventListener("load", updateExchangeRate);