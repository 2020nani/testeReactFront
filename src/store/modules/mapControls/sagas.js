import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { updateControls, updateZoom, updateRadius } from './actions';



export function* listPoints(data) {

    const { minZoom, boundsString, maxZoom, radius, zoom } = data.payload.dados

    const response = yield call(api.get, `points?minZoom=${minZoom}&&maxZoom=${maxZoom}&&boundsString=${boundsString}&&radius=${radius}&&zoom=${zoom}`);

    toast.success('Alteracao feita com sucesso!');

    yield put(updateControls(response.data));
}

export function* aumentaZoom(zoom) {
    console.log(zoom)
    let zoomUpdate = zoom + 1
    yield put(updateZoom(zoomUpdate));
}

export function* aumentaRadius(radius) {
    let radiusUpdate = radius + 500
    yield put(updateRadius(radiusUpdate));
}

/* exporta as funcoes */
export default all([
    takeLatest('@controles/LISTAR_PONTOS', listPoints),
    takeLatest('@controles/AUMENTAR_ZOOM', aumentaZoom),
    takeLatest('@controles/AUMENTAR_RADIUS', aumentaRadius),
]);