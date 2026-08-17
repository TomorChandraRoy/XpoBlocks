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

11. Use `should_load_separate_core_block_assets` filter to load block assets only when the block is used on the frontend. Use `__return_true` in that filter.

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


namespace GutenBuilder;

use GutenBuilder\Includes\Core;
use GutenBuilder\Includes\Admin;
use GutenBuilder\Includes\API;

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Plugin Constants
define( 'GUTEN_BUILDER_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'GUTEN_BUILDER_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'GUTEN_BUILDER_DIR_PATH', plugin_dir_path( __FILE__ ) );
define( 'GUTEN_BUILDER_BASENAME', plugin_basename( __FILE__ ) );
define( 'GUTEN_BUILDER_FILE', __FILE__ );


if ( !class_exists( __NAMESPACE__ . '\Plugin' ) ) {
	class Plugin {
		function __construct() {
			// Initialize sub-components
			Core::init();
			Admin::init();
			API::init();

			// Register blocks
			add_action( 'init', [ $this, 'register_blocks' ] );
		}

		function register_blocks() {
			$settings = Core::get_settings();
			$active_blocks = isset( $settings['activeBlocks'] ) ? $settings['activeBlocks'] : [];

			$blocks = glob( __DIR__ . '/build/blocks/*', GLOB_ONLYDIR );
			if ( $blocks ) {
				foreach ( $blocks as $block ) {
					$block_name = basename( $block );
					$is_active = !isset( $active_blocks[$block_name] ) || rest_sanitize_boolean( $active_blocks[$block_name] );

					if ( $is_active ) {
						register_block_type( $block );
					}
				}
			}
		}
	}
	new Plugin();
}
