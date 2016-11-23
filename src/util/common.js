/**
 * Created by jiaan.zhou on 2016/11/23.
 */
export default {
    hasClass(domEl, selector){
        let className = ' ' + selector + ' ';
        let rClass = /[\t\r\n]/g;
        let domClassName = (' ' + domEl.className + ' ').replace(rClass, ' ');
        return domClassName.indexOf(className) > -1 ? true:false;
    }
}