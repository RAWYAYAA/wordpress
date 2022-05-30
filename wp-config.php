<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'V5`<GQyJHw5On_3aBC?nYzB$8M4HY1)hnB/7PBb:#(7b~Ik!JBzYqL)+e</l0!_.' );
define( 'SECURE_AUTH_KEY',  'm+$B-#4*0:[wgk&{3n}=I=^At)PUfgSpfCl)aST*b?lA&rc>>Hw| S-z`(yaU>,I' );
define( 'LOGGED_IN_KEY',    '{`9/vnPP9u7Uv;/ qa2>yXua&x>eGI47?P7OGN!oC#Z lOD@iJ;=ABm2e8xSBi |' );
define( 'NONCE_KEY',        'j#^oh$EjJ-tx[ Y{BAn%.nXBJkY1]TW!gPy9CI;2NO8n@0TztX:|{ <VKi WUsS_' );
define( 'AUTH_SALT',        'SvESXVUVL7/fDVK9UP+}G.b/OfR02h)R5|Q-RhB}8_/u<M13*]/}^mWYa*aBJ#Oo' );
define( 'SECURE_AUTH_SALT', 'VS{ARn QF_obqsIOCJ6g!`^{sV:Qf.57de~l,:V)lBwRF9,I4_k5%:KLaaZU+Wsi' );
define( 'LOGGED_IN_SALT',   'qSn|yZ-?!C7%$].fie92OnN#A$jBoX[Fs1J+d.k){L :.MaCbI<#ly7UON[Z*];m' );
define( 'NONCE_SALT',       'fZ?}4,]a,+bWzY@/:^!D%$n&Z-fd~ZWn%E3DEy8yT;|Il;?go=|5_~qG#JCbaKs2' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
