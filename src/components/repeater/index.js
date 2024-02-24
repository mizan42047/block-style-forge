import { cloneElement } from '@wordpress/element';
import { Button, PanelBody } from '@wordpress/components';
import { plus } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { ReactSortable } from "react-sortablejs";
import isNull from "../../helpers/isNull";
import getItemLabel from './getItemLabel';
import { clone, close } from '../../assets/icons';


const BsfRepeater = ({ repeaterFields, children, onChange, itemLabelName = "" }) => {

    const handleAdd = () => {
        const newItem = {};
        children.forEach(child => {
            newItem[child.props.name] = child.props.default || '';
        });
        onChange([...repeaterFields, newItem]);
    };

    const handleRemove = index => {
        const newItems = [...repeaterFields];
        newItems.splice(index, 1);
        onChange(newItems);
    };

    const handleClone = index => {
        const newItems = [...repeaterFields];
        newItems.splice(index + 1, 0, newItems[index]);
        onChange(newItems);
    }

    const handleItemChange = (index, name, value) => {
        const newItems = JSON.parse(JSON.stringify(repeaterFields));
        newItems[index][name] = value;
        onChange(newItems);
    };

    const conditionalStateCheck = (children, items, index) => {
        if (items[index]) {
            let item = items[index];
            let conditionalChild = !isNull(children.props.condition);
            if (conditionalChild) {
                const { props } = children;
                if (props?.condition?.type === 'parent') {
                    return props?.condition?.name === props?.condition?.value;
                }
                return item[props?.condition?.name] === props?.condition?.value;
            } else {
                return true;
            }
        }
    }

    return (
        <div className='bsf-repeater'>
            <ReactSortable list={repeaterFields} setList={onChange} handle='.components-panel__body-toggle'>
                {repeaterFields && repeaterFields.map((item, index, repeaterFields) => {
                    let itemLabel = getItemLabel(item, itemLabelName, index);
                    return (
                        <div key={index} className="bsf-repeater__item">
                            <PanelBody title={itemLabel} initialOpen={index === 0} className="bsf-repeater__item__panel">
                                {children.map((child, i) => {
                                    const shouldShowConditionalStateCheck = conditionalStateCheck(child, repeaterFields, index);
                                    if (shouldShowConditionalStateCheck) {
                                        return cloneElement(child, {
                                            key: i,
                                            value: item[child?.props?.name],
                                            onChange: value => handleItemChange(index, child?.props?.name, value)
                                        });
                                    }
                                })}
                            </PanelBody>
                            <div className="repeater-action-btns">
                                <Button className="bsf-repeater__item__clone-button bsf-repeater__item__action-button" icon={clone} iconSize={16} label="Clone Item" onClick={() => handleClone(index)} />
                                {
                                    repeaterFields.length > 1 && <Button className="bsf-repeater__item__remove-button bsf-repeater__item__action-button" icon={close} iconSize={16} label="Remove Item" onClick={() => handleRemove(index)} />
                                }
                            </div>
                        </div>
                    )
                })}
            </ReactSortable>
            <Button className='bsf-repeater__add-button' icon={plus} iconSize={16} variant="primary" onClick={handleAdd} size="small">
                {__('Add Item', 'block-styleforge')}
            </Button>
        </div>
    );
};

export default BsfRepeater;