import imagem from '../assets/react-core-concepts.png';

const descriptions = ["Fundamental", "Core", "Essential"];

function getRandomInt(max) {
    return Math.floor(Math.random() * (max+1));
}

export default function Header() {
    const descricao = descriptions[getRandomInt(2)];
    return (
	<header>
	    <img src={imagem} alt="Stylized atom" />
		<h1>React Essentials</h1>
		<p>
		    {descricao} React concepts you will need for almost any app you are
		    going to build!
		</p>
	</header>
    )
}
