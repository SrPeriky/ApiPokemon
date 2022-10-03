const app = new Vue({
	el: '#app',
	data: {
		key: '',
		pokemon: null,
		btn: null,
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
		isKey: () => {
			app.key = app.key.replace(/ /g, "")
			return (app.key == '') ? false : true; 
		},
		search () {
			if(this.isKey()) $.ajax({
				dataType: "json",
		        url: 'https://pokeapi.co/api/v2/pokemon/'+app.key,
		        success: (data) => {
		        	app.setPokemon(data)
		        },
		        error: () => toastr["error"]("Error! Pokemon no encontrado"),
		    });	else toastr["error"]("Error! Pokemon no encontrado")
		},
	}
});