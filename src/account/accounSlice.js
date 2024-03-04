const currentTime = () => {
  let currentTime = new Date();

  let currentUTCTime = currentTime;
  return new Intl.DateTimeFormat("en-us", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(currentUTCTime);
};
setInterval(currentTime, 1000);

function formatDate() {
  return currentTime().slice(0, currentTime().indexOf("PM") + 2);
}

const initialState = {
  balance: 0,
  error: "",
  loan: 0,
  loanBank: 1000,
  transactionsHistory: [],
  currency: "usd",
};

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "deposit": {
      const transactionsDeposit = `you deposit to your balance ${
        action.payload
      } ${state.currency} @ ${formatDate()}`;
      return {
        ...state,
        balance: +state.balance + action.payload,
        transactionsHistory: [
          ...state.transactionsHistory,
          transactionsDeposit,
        ],
      };
    }
    case "withdraw": {
      const transactionsWithdraw = `you withdraw from your balance ${
        action.payload
      } ${state.currency} @ ${formatDate()}`;
      if (state.balance < action.payload) {
        return {
          ...state,
          balance: state.balance,
          error: "you dont have sufficient Balance for this Transcation",
        };
      } else {
        return {
          ...state,
          balance: +state.balance - action.payload,
          error: "",
          transactionsHistory: [
            ...state.transactionsHistory,
            transactionsWithdraw.trim(),
          ],
        };
      }
    }

    case "getLoan": {
      const transacationLoan = `you credited from bank balance ${action.payload} ${state.currency} @ ${formatDate()}`
      
      if (action.payload > state.loanBank) {
        return { ...state, balance: state.balance };
      } else {
        return {
          ...state,
          balance: +state.balance + action.payload,
          loan: +state.loan + action.payload,
          loanBank: state.loanBank - action.payload,
          transactionsHistory:[...state.transactionsHistory,transacationLoan]
        };
      }
    }
    case "removeError": {
      return { ...state, error: "" };
    }
    default: {
      return state;
    }
  }
}

export function handleDeposit(amount) {
  return { type: "deposit", payload: amount };
}

export function handleWidthdraw(amount) {
  return { type: "withdraw", payload: amount };
}

export function removeError() {
  return { type: "removeError" };
}

export function getLoan(amount) {
  return { type: "getLoan", payload: amount };
}
