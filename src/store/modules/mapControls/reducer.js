import produce from 'immer';

const INITIAL_STATE = {
payload: {
  places : [],
  minZoom: 0,
  maxZoom: 16,
  bounds: [-180,-90,180,90],
  radius: 40,
  zoom: 0
}
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@controles/LISTAR_PONTOS': {
        break;
      }
      case '@controles/UPDATE_CONTROLS_SUCCESS': {
        draft.payload = action.payload.dados;
        break;
      }
      case '@controles/AUMENTAR_ZOOM': {
        break;
      }
      case '@controles/UPDATE_ZOOM': {
        draft.payload.zoom = action.payload.zoom;
        break;
      }
      case '@controles/AUMENTAR_RADIUS': {
        break;
      }
      case '@controles/UPDATE_RADIUS': {
        draft.payload.zoom = action.payload.radius;
        break;
      }
      default:
    }
  });
}