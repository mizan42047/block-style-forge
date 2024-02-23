import { Button, Popover } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import classnames from "classnames";
import { useState } from "@wordpress/element";

const BsfSelectorButton = ({ label, value, onChange, hasChildren = true, isFixed = false, isLast = false, ...props }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="bsf-selector-button-wrapper">
            <Button
                variant="primary"
                className={
                    classnames("bsf-selector-button", {
                        "bsf-selector-button-fixed": isFixed,
                        "bsf-selector-button-last": isLast
                    })
                }
                {...props}
                label={label}
                showTooltip
                tooltipPosition="top center"
            >
                {label}
            </Button>
            {hasChildren && (
                <div className="bsf-selector-add-button-wrapper">
                    <span
                        className="bsf-selector-add-button"
                        onClick={() => setOpen(!open)}
                    >
                        {__("Add Child", "block-styleforge")}
                    </span>
                    {open &&
                            <Popover
                                placement="left-start"
                                offset={34}
                                focusOnMount={false}
                            >
                                Popover is toggled!
                            </Popover>}
                </div>
            )}
        </div>
    )
}

export default BsfSelectorButton;