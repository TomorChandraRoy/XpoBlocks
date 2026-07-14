## Plugin Setup
1. Find an appropriate [guten-builder-blocks](https://wordpress.org/plugins/) according to the solution of the plugin.
2. Write the min 4-5 character prefix, plugin name, short description(up to 150 chars), long description (min 3-4 para), keywords(min 4), block name, and block description in a temporary notebook.
2. If your block is not part of `b-blocks`, then the text domain should be your `guten-builder-blocks`.
4. Apply 1st and 2nd list data to this template with case sensitivity: uppercase for uppercase, lowercase for lowercase, title case for title case, and camel case for camel case. (for the block name try different way to search (blockname, blockName, BlockName, Block Name, block name))
5. Complete the `readme.txt` file.
6. The main element is `.wp-block-b-blocks-{blockname}`, and its immediate child is `.bBlocksBlockName`. Do not apply width or columns for the main element.
7. Write appropriate class and ID names for the elements.
8. Add the initial roadmap for the plugin in the `todo.txt`.
9. If you skip one of these, we will not provide any support for the project.
10. Enjoy CODING!

The folder structure that `plugin-zip` accepts is:

```
/plugin-name
	plugin-name.php
	uninstall.php
	/languages
	/includes
	/admin
		/js
		/css
		/images
	/public
		/js
		/css
		/images
```

**If you want to add custom folders, you have to add those folder names to the {files} array in the `package.json` file.**

### Required packages for this project
```json
"dependencies": {
	"immer": "latest"
},
"devDependencies": {
	"@wordpress/scripts": "latest",
	"eslint-webpack-plugin": "latest"
}
```

## Editor Setup
#### For this project use this setup in your IDE Editor. Preferred `Cursor`. If you want to set another setup for your personal/portfolio/example/tutorial project, use another IDE Editor. Setup the `Cursor` IDE using the provided `*.code-profile`
