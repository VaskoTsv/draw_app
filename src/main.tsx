import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import PageTemplate from "./components/ui/PageTemplate";

function App() {
	return (
		<div className="App">
			<PageTemplate />
		</div>
	);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
