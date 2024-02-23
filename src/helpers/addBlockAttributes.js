const addBlockAttributes = (settings, name) => {
    return {
        ...settings,
        attributes: {
            ...settings?.attributes,
            blockStyleForgeClientID: {
                type: "string"
            },
            blockStyleForgeControls: {
                type: "array",
                default: [
                    {
                        blockStyleForgeSelector: "wrapper",
                        blockStyleForgeClasses: ""
                    }
                ]
            },
        }
    }
}

export default addBlockAttributes;