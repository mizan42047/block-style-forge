import { createHigherOrderComponent } from "@wordpress/compose";
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, Button, __experimentalVStack as VStack, __experimentalHStack as HStack, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { BsfSelect } from "../components/select";

const BlockStyleForgeComponents = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        const { attributes, setAttributes } = props;
        const selectors = [
            {
                label: "WRAPPER",
                value: "{WRAPPER}",
                isFixed: true
            },
            {
                label: "Next",
                value: "{next}",
                isFixed: true
            },
            {
                label: "Previous",
                value: "{previous}",
                isFixed: true
            },
        ];

        const orderOptions = (values) => {
            return values
                .filter((v) => v.isFixed)
                .concat(values.filter((v) => !v.isFixed));
        };
        return (
            <>
                <BlockEdit {...props} />
                <InspectorControls>
                    <PanelBody title={__('Block Style Forge', 'block-styleforge')} initialOpen={true}>
                        <BsfSelect/>
                    </PanelBody>
                </InspectorControls>
            </>
        );
    };
}, 'BlockStyleForgeComponents');

export default BlockStyleForgeComponents;