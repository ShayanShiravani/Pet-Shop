const Common = {
    isNumeric: (n) => {
        return !isNaN(parseFloat(n)) && isFinite(n);
    },

    isEmpty: (v, zeroIsEmpty = false) => {
        if (v === null) {
            return true;
        }

        if (v === true) {
            return false;
        }
    
        if (typeof v === 'object') {
            return !Object.keys(v).length;
        }
        
        if (Common.isNumeric(v)) {
            return zeroIsEmpty ? parseFloat(v) === 0 : false;
        }
    
        return !v || !v.length || v.length < 1;
    }
}

export default Common;