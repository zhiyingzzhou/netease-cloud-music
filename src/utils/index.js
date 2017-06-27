module.exports = (function(){
    let Utils = function() {
    }
    Utils.prototype.coverHeight = function(height){
        return height / 1231 * 1334 / 75 + 'rem';
    }
    Utils.prototype.chunk = function(array,size){
        // 判断size是否大于0
        size = Math.max(size,0);
        const length = array.length;
        if(!length || size < 1 ){
            return [];
        }   
        let index = 0;
        let resIndex = 0;
        const result = new Array(Math.ceil(length/size));
        while(index < length) {
            result[resIndex++] = array.slice(index,(index+=size));
        }
        return result;
    }
    Utils.prototype.omit = function(object,keys){
        let obj = {};
        for(let key in object){
            if(key !== keys) {
                obj[key] = object[key];
            }
        }
        return obj;
    }
    return new Utils();
})();