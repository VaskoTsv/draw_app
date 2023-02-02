import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Canvas from "~/components/ui/Canvas";

function App() {
	return (
		<div className="App">
			<Canvas />
		</div>
	);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
