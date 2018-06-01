/**
 * BLOCK: actblue-donation-block
 *
 * Allows the user to create donation links for an ActBlue campaign.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { 
	registerBlockType,
	UrlInput,
	RichText,
} = wp.blocks;
const {
    IconButton,
    Tooltip,
    TextControl,
} = wp.components;

/**
 * Registers the Gutenberg block.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'adb/actblue-donation-block', {
	title: __( 'ActBlue Donation Links' ),
	icon: 'star-filled',
	category: 'common',
	keywords: [
		__( 'ActBlue' ),
		__( 'Donation' ),
		__( 'Campaign' ),
	],
	attributes: {
		campaignRef: {
			type: 'string'
		},
		baseUrl: {
			type: 'string',
			default: 'https://www.actblue.com/',
		}
	},

	/**
	 * The edit function. Shows a text field for the campaign reference if none exists.
	 * If a campaign reference exists, shows inputs for donation buttons.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function( props ) {
		const onChangeInput = ( event ) => {
        	props.setAttributes( { campaignRef: event.target.value } );
        };
        const {
            attributes: { campaignRef },
            className, setAttributes  } = props;
		return (
			<div className={ props.className }>
				<TextControl
                    label={ __( 'ActBlue Campaign Reference', 'adb' ) }
                    help={ __( 'Enter the reference ID for the ActBlue campaign.', 'adb' ) }
                    value={ campaignRef }
                    onChange={ campaignRef => setAttributes( { campaignRef } ) }
                />
			</div>
		);
	},

	/**
	 * The save function. Shows the donation buttons on the front end if a campaign 
	 * reference and donation values exist.
	 * 
	 * TODO: Build out this save function.
	 * 
	 */
	save: function( props ) {
		const { attributes: { campaignRef, baseUrl } } = props;
		return (
			<div>
				<p>Here is where the donation links will show up.</p>
			</div>
		);
	},
} );
