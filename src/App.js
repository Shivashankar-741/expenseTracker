import { useState } from "react";
import "./App.css";

function App() {
	const [text, setText] = useState("");
	const [amount, setAmount] = useState("");
	const [income, setIncome] = useState("0.00");
	const [expense, setExpense] = useState("0.00");
	const [balance, setBalance] = useState("0.00");
	const [data, setData] = useState([]);
	// { text: "empty", amount: 1000 }
	const clickHandler = () => {
		if (text !== "" && amount !== "") {
			if (parseInt(amount) >= 0) {
				setIncome(parseInt(income) + parseInt(amount));
				setBalance(parseInt(balance) + parseInt(amount));
				setData(data.concat({ text, amount }));
			} else if (parseInt(amount) < 0) {
				setExpense(parseInt(amount) + parseInt(expense));
				setBalance(parseInt(balance) + parseInt(amount));
				setData(data.concat({ text, amount }));
			}
			setText("");
			setAmount("");
		}
	};

	return (
		<div className="App">
			<div className="container">
				<div className="App--header">
					<h1 className="App--header__in">Expense Tracker </h1>
				</div>
				<div className="App--balance">
					<h2 className="App--balance__header">YOUR BALANCE</h2>
					<span className="App--balance__in">${balance}</span>
				</div>
				<div className="IncandExp">
					<div className="inc">
						<h1 className="inc--header">INCOME</h1>
						<span className="inc--balance">${income}</span>
					</div>
					<div className="exp">
						<h1 className="exp--header">EXPENSE</h1>
						<span className="exp--balance">${expense}</span>
					</div>
				</div>
				<div className="history">
					<h1 className="history--header">History</h1>

					<ul className="lists">
						{data.map((el, index) =>
							el.amount > 0 ? (
								<li className="lists--in income" key={index}>
									<h3 className="lists--in__header">{el.text}</h3>
									<h3 className="lists--in__amount">+${el.amount}</h3>
								</li>
							) : (
								<li className="lists--in expense" key={index}>
									<h3 className="lists--in__header">{el.text}</h3>
									<h3 className="lists--in__amount">-${el.amount}</h3>
								</li>
							)
						)}
					</ul>
				</div>
				<div className="inputFields">
					<h1 className="transactions">Add new transaction</h1>
					<div className="text">
						<label>Text</label>
						<input
							type="text"
							placeholder="Enter text..."
							onChange={(e) => setText(e.target.value)}
							value={text}
						/>
					</div>
					<div className="amount">
						<label>Amount (negative-expense, positive-income)</label>
						<input
							type="number"
							placeholder="$"
							onChange={(e) => setAmount(e.target.value)}
							value={amount}
						/>
					</div>
					<div className="btn">
						<button className="btn--in" onClick={clickHandler}>
							Add transaction
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
