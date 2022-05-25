

class Storage {
  /**
   * Check LS Data
   * @param {*} key 
   * @returns 
   */

    static has(key){
      return localStorage.getItem(key) ? localStorage.getItem(key) : false;

    }
    /**
     * Get ALL Data
     * @param {*} key 
     */
    static get(key){

      if (this.has(key)) {
        return JSON.parse(this.has(key));
      } else {
        return 'No Data Found';
      }

    }
    /**
     * Set New LS Data
     * @param {*} key 
     * @param {*} data 
     */
    static set(key,data){
      let setdata = [];
    if (this.has(key)) {
        setdata = JSON.parse(this.has(key));
    }
    setdata.push(data)
    localStorage.setItem(key, JSON.stringify(setdata)); 

}
}
export default Storage;