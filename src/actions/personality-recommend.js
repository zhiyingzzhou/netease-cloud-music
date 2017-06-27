import Types from 'constants';
import {AjaxByGet} from 'utils/ajax';

const GET_BANNER = {type: Types.GET_BANNER};

export const getBanner = () => (dispatch,getState) => {
    AjaxByGet('/banner');
}