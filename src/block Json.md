namespace/block-name — এখানে namespace = carousel    = namespace‑এuppercase (capital letter) দেওয়া যাবে না only lowercase

"title": "Test Purpose",  niyer moto dito paro uppercase ba lowercase
"textdomain": "guten-builder-blocks", ta block aer name aer namespace aer sate mil ditle vlo hoy na dileo pbm nai "name": "guten-builder-blocks",


block aer name change korle ✅style.css  ✅view.js ✅ editor.scss ✅ Settings.js aer tabpanel aer modhe ✅ ✅ ✅ ✅

{
	"$schema": "https://schemas.wp.org/trunk/block.json",
	"apiVersion": 3,
	"name": "guten-builder-blocks/button",
	"version": "1.0.0",
	"title": "Test Purpose",
	"category": "widgets",
	"description": "Short description of the Test Purpose",
	"keywords": [
		"Test Purpose"
	],
	"textdomain": "guten-builder-blocks",
	"attributes": {
		"alignment": {
			"type": "string",
			"default": "center"
		},
		"purposeType": {
			"type": "string",
			"default": "test"
		},
		"colors":{
			"type":"object",
			"default":{
				"color": "black",
				"bg": "#B1C5A4"
			}
		}
	},
	"supports": {
		"align": [
			"wide",
			"full"
		],
		"html": false
	},
	"example": {
		"attributes": {}
	},
	"editorScript": "file:./index.js",
	"editorStyle": "file:./index.css",
	"style": "file:./view.css",
	"render": "file:./render.php",
	"viewScript": "file:./view.js"
}