import Types from 'constants';

const OPEN_DRAWER = {type: Types.OPEN_DRAWER};
const CLOSE_DRAWER = {type: Types.CLOSE_DRAWER};

export const openDrawer = () => (dispath,getState) => {
    dispath({...OPEN_DRAWER,isDrawerOpen:true})
}

export const closeDrawer = () => (dispath,getState) => {
    dispath({...CLOSE_DRAWER,isDrawerOpen:false})
}