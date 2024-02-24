import { __ } from "@wordpress/i18n";
import { Button } from "@wordpress/components";
import { click } from "../../assets/icons";
const BsfSelectorPicker = ({ label, value, onChange }) => {
    return (
        <div className="bsf-selector-picker">
            <label className="bsf-selector-picker__label">{label}</label>
            <Button 
                className="bsf-selector-picker__button"
                icon={click}
                iconPosition="left"
                __next40pxDefaultSize
                variant="primary"
            >
                {value || __("No Selector", "block-styleforge")}
            </Button>
        </div>
    );
};
export default BsfSelectorPicker;