<?php

/**
 * Plugin Name:       Block Styleforge
 * Description:       Customize and style Gutenberg blocks with unlimited possibilities.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Mijanur Rahman
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       block-styleforge
 * Domain Path:       /languages
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

final class Block_Styleforge
{

	const VERSION = "1.0.0";

	private function __construct()
	{
		$this->helper_constnat();
		//fires after plugin activate
		register_activation_hook(BLOCK_STYLEFORGE_FILE, [$this,"block_styleforge_activation"]);
		//plugins loaded hooks
		add_action("plugins_loaded", [$this, "block_styleforge_plugins_loaded"]);
		add_action('enqueue_block_assets', [$this, 'block_styleforge_enqueue_block_assets']);
	}

	public static function init()
	{
		static $instance = false;
		if (!$instance) {
			$instance = new self();
		}
		return $instance;
	}

	public function helper_constnat()
	{
		//plugin version
		define("BLOCK_STYLEFORGE_VERSION", self::VERSION);
		//Root directory of the plugin
		define("BLOCK_STYLEFORGE_DIR", plugin_dir_path(__FILE__));
		//Root file of the plugin
		define("BLOCK_STYLEFORGE_FILE", __FILE__);
		//root url of the plugin
		define("BLOCK_STYLEFORGE_URL", plugin_dir_url(BLOCK_STYLEFORGE_FILE));
		//assets url of the plugin
		define("BLOCK_STYLEFORGE_ASSETS", BLOCK_STYLEFORGE_URL . "assets/");
		//build url of the plugin
		define("BLOCK_STYLEFORGE_BUILD_URL", BLOCK_STYLEFORGE_URL . "build/");
		//build path of the plugin
		define("BLOCK_STYLEFORGE_BUILD_PATH", BLOCK_STYLEFORGE_DIR . "build/");
	}

	public function block_styleforge_activation()
	{
		//Update veraion to the option table
		update_option("block_styleforge_version", self::VERSION);
		//added installed time after checking time exist or not
		if (!get_option("block_styleforge_installed_time")) {
			add_option("block_styleforge_installed_time", time());
		}

		if (!get_option("block_styleforge_block_style_cdns")) {
			add_option("block_styleforge_block_style_cdns", []);
		}
	}

	public function block_styleforge_plugins_loaded(){
		if(file_exists(BLOCK_STYLEFORGE_DIR . '/languages/block-styleforge.pot')){
			load_textdomain('block-styleforge', BLOCK_STYLEFORGE_DIR . '/languages');
		}
	}

	public function block_styleforge_enqueue_block_assets(){
		if (file_exists(BLOCK_STYLEFORGE_BUILD_PATH . "index.asset.php") && is_admin()) {
			$asset_file = include BLOCK_STYLEFORGE_BUILD_PATH . "index.asset.php";
			wp_enqueue_script(
				'block-styleforge-editor',
				BLOCK_STYLEFORGE_BUILD_URL . 'index.js',
				$asset_file['dependencies'],
				$asset_file['version']
			);

			wp_enqueue_style(
				'block-styleforge-editor',
				BLOCK_STYLEFORGE_BUILD_URL . 'index.css',
				[],
				$asset_file['version'],
				'all'
			);
		}

		if(file_exists(BLOCK_STYLEFORGE_BUILD_PATH . "view.asset.php")){
			$view_asset_file = include BLOCK_STYLEFORGE_BUILD_PATH . "view.asset.php";
			wp_enqueue_script(
				'block-styleforge-view',
				BLOCK_STYLEFORGE_BUILD_URL . "view.js",
				$view_asset_file['dependencies'],
				$view_asset_file['version']
			);

			wp_enqueue_style(
				'block-styleforge-view',
				BLOCK_STYLEFORGE_BUILD_URL . "view.css",
				[],
				$view_asset_file['version'],
				'all'
			);
		}
	}
}

Block_Styleforge::init();
