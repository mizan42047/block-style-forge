import { createHigherOrderComponent } from "@wordpress/compose";
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, __experimentalVStack, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import BsfSelectorPicker from "../components/selector-picker";
import BsfRepeater from "../components/repeater";

const BlockStyleForgeComponents = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        const { attributes, setAttributes, clientId } = props;
        return (
            <>
                <BlockEdit {...props} />
                <InspectorControls>
                    <PanelBody title={__('Block Style Forge', 'block-styleforge')} initialOpen={true}>
                        <BsfRepeater repeaterFields={attributes?.blockStyleForgeRepeater} onChange={(repeaterFields) => setAttributes({ blockStyleForgeRepeater: repeaterFields })}>
                            <BsfSelectorPicker 
                                name="selector"
                                label={__('Select Element', 'block-styleforge')}
                            />
                            <TextControl 
                                name="classes"
                                label={__('Classes', 'block-styleforge')}
                            />
                        </BsfRepeater>
                    </PanelBody>
                </InspectorControls>
            </>
        );
    };
}, 'BlockStyleForgeComponents');

export default BlockStyleForgeComponents;