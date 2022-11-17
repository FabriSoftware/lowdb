
module.exports = {
    isValidKey: function(key){
        if(typeof key != 'string') return false;
        if(key.length < 1) return false;
        if(key.split(".").includes("")) return false;
        if(key.endsWith(".")) return false;
        return true;
    },

    isValidData: function(data){
        if(typeof data === "string") return true;
        if(typeof data === "number") return true;
        if(typeof data === "boolean") return true;
        if(typeof data === "object") return true;
        if(typeof data === "undefined") return true;
        return false;
    },

    encodeData: function(data){
        if(typeof data === 'string') return JSON.stringify(data);
        if(typeof data === 'number') return JSON.stringify(data);
        if(typeof data === 'object' && !(data instanceof Array)) return JSON.stringify(data);
        if(typeof data === 'object' && (data instanceof Array)) return `[${data.map((e) => this.encodeData(e)).join(',')}]`;
        if(typeof data === 'boolean') return data ? 'true' : 'false';
        if(typeof data === 'undefined') return 'undefined';
        return 'undefined';
    }
}