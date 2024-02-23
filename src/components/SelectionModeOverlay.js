import classNames from 'classnames';
import { useEffect, useRef } from '@wordpress/element';
const SelectionModeOverlay = ({position}) => {
    const ref = useRef(null);
    useEffect(() => {
        const selectionModeOverlay = ref.current;
        if(position === 'before'){
            console.log(selectionModeOverlay); 
        }
    }, [])
    return(
        <div className={classNames("bsf-selection-mode-overlay", {[`bsf-selection-mode-overlay-${position}`]: position})}></div>
    )
}

export default SelectionModeOverlay;