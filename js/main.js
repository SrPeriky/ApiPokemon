const app = new Vue({
	el: '#app',
	data: {
		key: null,
		pokemon: null,
	},
	methods: {
		setPokemon: (data) => app.pokemon = {
    		imgCvg: data.sprites.other.dream_world.front_default,
    		nombre: data.name,
    		experiencia: data.base_experience,
    		hp: data.stats[0].base_stat,
    		ataque: data.stats[1].base_stat,
    		defensa: data.stats[2].base_stat,
    		especial: data.stats[3].base_stat,
		}, 
		search () {
			$.ajax({
				type: "GET",
				mimeType: 'text/html; charset=utf-8',
				method: 'GET',
		        dataType: "json",
		        url: 'https://pokeapi.co/api/v2/pokemon/'+app.key,
		        cache: false,
		        success: function(data)
		        {
		        	if (data) {
		        		console.log(app.setPokemon(data));
		        	} 
		        	
		        },
		        error: function() {
		        	toastr["error"]("Error! Pokemon no encontrado");
			    },
		    });
		},
	}
});