import { addFilter } from '@wordpress/hooks';
import addBlockAttributes from './helpers/addBlockAttributes';
import BlockStyleForgeComponents from './controls/BlockStyleForgeComponents';
import "./styles/components/main.scss";

//add attributes props to the blocks
addFilter(
    'blocks.registerBlockType',
    'block-styleforge/addAttributes',
    addBlockAttributes
);


//add Components to the block
addFilter(
    'editor.BlockEdit',
    'block-styleforge/addstyleforgecomponents',
    BlockStyleForgeComponents
); 

