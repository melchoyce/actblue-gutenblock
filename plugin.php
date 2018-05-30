<?php
/**
 * Plugin Name: ActBlue Donation Links
 * Plugin URI: https://github.com/melchoyce/actblue-gutenblock
 * Description: A plugin that registers a Gutenberg block for adding ActBlue donation buttons to your website.
 * Author: melchoyce, raquelmsmith
 * Author URI: 
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
