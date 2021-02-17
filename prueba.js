const express = require("express");
const app = express();
const url = require('url')
const port = 3000; 

app.get('/prueba', (req,res)=>{
	let numero = req.query.numero
	numero = 1753797032
	const cedula={
		get cedulaEs () {
			return numero
		},
		get fibonacci (){
			var serie = [0,1];
			for(let i = 0;i<18;i++){
				var anterior=serie[serie.length-2];
				var ultimo = serie[serie.length-1];
				let nuevo = ultimo + anterior;
				serie.push(nuevo)
			}
		return serie

		}
	}
	res.json(cedula);
})


app.listen(port, () => console.log(`Se escucha en el puerto ${port}`));
 

	
