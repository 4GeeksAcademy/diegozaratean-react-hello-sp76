import React from "react";
// 4. Importar comoponente
import Nav from "./nav.jsx";
import Jumbotron from './jumbotron.jsx'
import Button from "./button.jsx";
import Card from "./card.jsx";

// 5. Usar componente

const Home = () => {
	return (
		<>
			<Nav />
			<Jumbotron />
			<h1 className="text-center mt-5">Hola Bievenidos a React :)1234</h1>
			<p>Lorem, ipsum.</p>
			<Button />
			<Card user='Mr. Beast' desc='Construi 100 pozos en africa' likes='10M' />			
			<Card user='diego' desc='Construi una app en react' likes='10' />			
			<Card user='coolpewnwin' desc='como viajar por el mundo mientras trabajas' likes='13K' />			
		</>
	);
};

export default Home;
