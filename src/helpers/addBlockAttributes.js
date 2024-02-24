const addBlockAttributes = (settings, name) => {
    return {
        ...settings,
        attributes: {
            ...settings?.attributes,
            blockStyleForgeWrapperClass: {
                type: "string"
            },
            blockStyleForgeRepeater: {
                type: "array",
                default: [
                    {
                        selector: "",
                        classes: "",
                    }
                ]
            },
        }
    }
}

export default addBlockAttributes;