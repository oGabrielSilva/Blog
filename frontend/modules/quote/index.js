const quotes = [
	{ author: 'Galileu Galilei', quote: 'Duas verdades nunca se podem contradizer.' },
	{ author: 'Galileu Galilei', quote: 'Falar obscuramente, qualquer um sabe; com clareza, raríssimos.' },
	{ author: 'Galileu Galilei', quote: 'Quanto menos alguém entende, mais quer discordar.' },
	{ author: 'Galileu Galilei', quote: 'A Matemática é o alfabeto com o qual Deus escreveu o Universo.' },

	{ author: 'Albert Einstein', quote: 'A imaginação é mais importante que o conhecimento.' },
	{ author: 'Albert Einstein', quote: `Duas coisas são infinitas: o universo e a estupidez humana. 
		Mas, em relação ao universo, ainda não tenho certeza absoluta.` },
	{ author: 'Albert Einstein', quote: 'Eu nunca penso no futuro. Ele não tarda a chegar.' },
	{ author: 'Albert Einstein', quote: 'Triste época! É mais fácil desintegrar um átomo do que um preconceito.' },

	{ author: 'Nikola Tesla', quote: 'O futuro vai mostrar os resultados e julgar cada um segundo as suas realizações.' },
	{ author: 'Nikola Tesla', quote: 'Esteja sozinho, este é o segredo da invenção, estar sozinho, isto é quando as ideias nascem.' },
	{ author: 'Nikola Tesla', quote: 'Comportamento antissocial é um traço de inteligência em um mundo de conformistas.' },
	{ author: 'Nikola Tesla', quote: `Todo o meu dinheiro é convertido em experimentos para realizar novas 
		descobertas que permitam a humanidade viver um pouco melhor.` },

	{ author: 'Marie Curie', quote: 'A melhor vida não é a mais comprida, mas sim a mais rica em boas ações' },
	{ author: 'Marie Curie', quote: 'O caminho do progresso não é rápido nem fácil.' },
	{ author: 'Marie Curie', quote: 'A vida não é fácil para nenhum de nós. Temos que ter persistência e, acima de tudo, confiança em nós mesmos.' },
	{ author: 'Marie Curie', quote: 'Não podemos esperar construir um mundo melhor sem melhorar os indivíduos.' },

	{ author: 'Stephen Hawking', quote: 'O paraíso é um conto de fadas para pessoas com medo do escuro.' },
	{ author: 'Stephen Hawking', quote: 'Pessoas quietas possuem mentes barulhentas.' },
	{ author: 'Stephen Hawking', quote: 'Quando achamos a matemática e a física teórica muito difíceis, voltamo-nos para o misticismo.' },
	{ author: 'Stephen Hawking', quote: 'Mesmo que a vida pareça difícil, há sempre algo que você pode fazer para ter sucesso nela.' },

	{ author: 'Isaac Newton', quote: 'Se eu fosse esperar que pessoas fizessem minhas ferramentas e tudo mais para mim, eu nunca teria feito nada.' },
	{ author: 'Isaac Newton', quote: 'Seja feliz, torne o egoísmo humano a sede de amar o próximo.' },
	{ author: 'Isaac Newton', quote: 'Se cheguei até aqui foi porque me apoiei no ombro dos gigantes.' },
	{ author: 'Isaac Newton', quote: 'Virtude sem caridade não passa de nome.' },

	{ author: 'Alan Turing', quote: 'Aqueles que podem imaginar qualquer coisa, podem criar o impossível.' },
	{ author: 'Alan Turing', quote: 'Eu acredito que às vezes são pessoas que ninguém espera nada que fazem coisas que ninguém consegue imaginar.' },
	{ author: 'Alan Turing', quote: 'Eu proponho considerar a questão "As máquinas podem pensar?"' },
	{ author: 'Alan Turing', quote: 'Ela sorriu para mim há pouco tempo e até agora ela não olhou para atrás.' },

	{ author: 'Hipátia de Alexandria', quote: 'Independente da nossa cor, raça ou religião, somos irmãos.' },
	{ author: 'Hipátia de Alexandria', quote: 'Entender as coisas que nos cercam é a melhor preparação para entender as coisas além.' },
	{ author: 'Hipátia de Alexandria', quote: 'A verdade não muda porque é ou não acreditada pela grande maioria.' },
	{ author: 'Hipátia de Alexandria', quote: 'De fato, as pessoas lutam tanto pela supestição quanto pela verdade.' },

	{ author: 'Vicent van Gogh', quote: 'Como seria a vida se não tivéssemos coragem de tentar coisa alguma?' },
	{ author: 'Vicent van Gogh', quote: 'Costumo pensar que a noite é sempre mais viva que o dia.' },
	{ author: 'Vicent van Gogh', quote: 'A arte é para consolar aqueles que são quebrados pela vida.' },
	{ author: 'Vicent van Gogh', quote: 'Eu não sou aventureiro por escolha, mas pelo destino.' },
	
	{ author: 'Um amigo do dev', quote: 'Tenha os ossos como grades, a pele como prisão, sinta o sofrer eterno, de uma mente em ascensão.' },
];

export default function funChooseAQuote() {
	const index = Math.floor(Math.random() * quotes.length);
	return quotes[index];
}
