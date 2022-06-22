function share(){
	if (navigator.share !== undefined) {
		navigator.share({
			title: 'Crítica de Lightyear', /* O título da sua página */
			text: 'o filme que o Andy assistiu em 1995 e conheceu o Buzz Lightyear', /* Um resumo*/ 
			url: 'https://www.mindinmovie.com.br/post/cr%C3%ADtica-de-lightyear',
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
	}
}

