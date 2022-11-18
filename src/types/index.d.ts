declare module "@fabrisoftware/lowdb" {
   
    interface LowDbOptions {
        /** json file name */
        name: string;
        /**  json file directory */
        directory: string;
    }


    class Database {

        /**
         * database constructor
         * 
         * @param {LowDbOptions} obj
         */
        constructor(obj: LowDbOptions);

        /**  json file name */
        private name: string

        /** json file directory */
        private directory: string


        /**
         * 
         * @returns {Object}
         */
        private __getAll(): Object

        /**
         * set your data in the database file
         * 
         * @param {String} key
         * @param {any} value 
         */
        public set(key: string, value: any): void

         /**
         * get a value from the database
         * 
         * @param {String} key key to get value 
         * @returns {any} value 
         */
        public get(key: string): any
        
        /**
         * comprobe if data exists
         * 
         * @param {String} key
         * @returns {boolean}
        */
        public has(key: string): Boolean

        /**
         * this delete key and value in the database
         * 
         * @param key key to delete 
         */
        public delete(key: string): void
    }
}