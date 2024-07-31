import React from "react";
// 4. Importar comoponente
import Nav from "./nav.jsx";
// 5. Usar componente

const Home = () => {
	return (
		<>
			<Nav />
			<h1 className="text-center mt-5">Hola Bievenidos a React :)1234</h1>
			<p>Lorem, ipsum.</p>
		</>
	);
};

export default Home;
