const getItemLabel = (item, itemLabelName, index) => {
    if (itemLabelName && item[itemLabelName].trim().length > 0 && item[itemLabelName].length > 22) {
        return item[itemLabelName].substring(0, 22);
    } else if (itemLabelName && item[itemLabelName].trim().length > 0 && item[itemLabelName].length <= 22) {
        return item[itemLabelName];
    } else {
        return `Item #${index + 1}`;
    }
}

export default getItemLabel;