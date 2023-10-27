import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const Account = useSelector((store) => store.Account);
  return <div className="balance">{formatCurrency(Account.balance)}</div>;
}

export default BalanceDisplay;
