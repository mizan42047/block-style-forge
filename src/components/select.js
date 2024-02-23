import { Button } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import BsfSelectorButton from "./button";
const BsfSelect = (props) => {
    return (
        <div className="bsf-selector-dropdown">
            <BsfSelectorButton label={__("Wrapper", "block-styleforge")} isFixed={true}/>
        </div>
    );
};
export { BsfSelect }