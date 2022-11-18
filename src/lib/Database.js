const fs = require("fs");
const lowDbUtils = require("../utils/util");

/**
 * @typedef {LowDbOptions} Database
 * @property {string} name - Name of the database
 * @property {string} directory - Directory of the database
 */
class Database {

    /**
     * 
     * @param {LowDbOptions} obj options
     */
    constructor(obj){
        this.name = obj.name;
        this.directory = obj.directory;
        
        // check if directory exists if not exists make directory
        if(!fs.existsSync(this.directory)){
            fs.mkdirSync(this.directory);
        }

        // check if file exists if not exists create file
        if(!fs.existsSync(`${this.directory}/${this.name}.json`)){
            fs.appendFileSync(`${this.directory}/${this.name}.json`, "{}");
        }
    }


    __getAll(){
        if(!fs.readFileSync(`${this.directory}/${this.name}.json`, "utf-8")){
            return {}
        }
        return JSON.parse(fs.readFileSync(`${this.directory}/${this.name}.json`));
    }

    /**
     * store data in json file
     * 
     * @param {String} key key of value
     * @param {*} value value to store
     */
    set(key, value){
        var data = this.__getAll();
        var obj = '';

        if(!lowDbUtils.isValidKey(key)) throw new Error("invalid key format");
        if(!lowDbUtils.isValidData(value)) throw new Error("invalid data typeof");

        key.split('.').forEach((v, i, a) => {
            obj += `[${JSON.stringify(v)}]`;
            if(i === (a.length - 1)){
                eval(`data${obj} = ${lowDbUtils.encodeData(value)}`);
            }else{
                if(!eval(`data${obj}`)) eval(`data${obj} = {}`);
            }
        });

        fs.writeFileSync(`${this.directory}/${this.name}.json`, JSON.stringify(data, null, 2));
    }

    /**
     * get data from json file
     * 
     * @param {String} key key of value
     * @returns {*}
     */
    get(key){
       var data = this.__getAll();
       var obj = '';
       key.split('.').forEach((v, i, a) => {
            obj += `[${JSON.stringify(v)}]`;
            if(i === (a.length - 1)) return;
            if(!eval(`data${obj}`)) eval(`data${obj} = {}`);
       });

       return eval(`data${obj} ?? undefined`);
    }

    /**
     *  delete data
     * 
     * @param {String} key key of value
     */
    delete(key){
        var data = this.has(key);
        if(!data) throw new Error("data not found");
        this.set(key, undefined);
    }

    /**
     *  comprobe if the value exists
     * 
     * @param {String} key key of value
     * @returns {Boolean}
     */
    has(key){
       var data = this.get(key);
       if(data) return true;
       return false;
    }
}

exports.Database = Database;