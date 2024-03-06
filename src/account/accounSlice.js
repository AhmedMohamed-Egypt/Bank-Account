import { act } from "react-dom/test-utils";

const currentTime = () => {
  let currentTime = new Date();

  return new Intl.DateTimeFormat("en-us", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(currentTime);
};
setInterval(currentTime, 1000);
const selectorTime = "AM" || "PM";
function formatDate() {
  return currentTime().slice(0, currentTime().indexOf(selectorTime) + 2);
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
      const writeStatus = (txt)=>{
        return `you deposit to your balance ${txt} ${formatDate()}`
      }
      const transactionsDeposit = {
        transacation:writeStatus(`${action.payload.amount} ${action.payload.currency}`),
        classStatus: "deposit",
      };
      const actualAmount = action.payload.currency==="USD"?action.payload.amount : action.payload.convertedAmount
      return {
        ...state,
        balance: +state.balance + actualAmount,
        transactionsHistory: [
          ...state.transactionsHistory,
          transactionsDeposit,
        ],
      };
      
    }
   

    case "withdraw": {
      const transactionsWithdraw = {
        transacation: `you withdraw from your balance ${action.payload} ${
          state.currency
        } @ ${formatDate()}`,
        classStatus: "withdraw",
      };
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
            transactionsWithdraw,
          ],
        };
      }
    }

    case "getLoan": {
      const transacationLoan = {
        transacation: `you credited from bank balance ${action.payload} ${
          state.currency
        } @ ${formatDate()}`,
        classStatus: "loan",
      };

      if (action.payload > state.loanBank) {
        return { ...state, balance: state.balance };
      } else {
        return {
          ...state,
          balance: +state.balance + action.payload,
          loan: +state.loan + action.payload,
          loanBank: state.loanBank - action.payload,
          transactionsHistory: [...state.transactionsHistory, transacationLoan],
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

export function handleDeposit(amount, currency) {
  
  if (currency === "USD") {
    return { type: "deposit", payload: {amount,currency} };
  }
  
  return async (dispatch)=> {
    const data = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const res = await data.json();
   const  convertedAmount = await res.rates.USD;
    dispatch({type:'deposit',payload:{amount,currency,convertedAmount}})
   
  };
 
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
