const isNull = ( value ) => {
	if( value === null ) {
		return true;
	}

	if( value === undefined ) {
		return true;
	}

	if(( typeof value === 'object' ) && ( Object.keys(value).length === 0 )) {
		return true;
	}

	if(( typeof value === 'string' ) && ( value.trim().length === 0 )) {
		return true;
	}

	if(value === false) {
		return true;
	}

	return false;
};

export default isNull;