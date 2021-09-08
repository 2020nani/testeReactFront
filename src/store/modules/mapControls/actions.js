export function listarPontos( dados ) {
    return {
      type: '@controles/LISTAR_PONTOS',
      payload: { dados }
    };
  }

  export function updateControls( dados ) {
    return {
      type: '@controles/UPDATE_CONTROLS_SUCCESS',
      payload: { dados }
    };
  }

  export function aumentarZoom( zoom ) {
    return {
      type: '@controles/AUMENTAR_ZOOM',
      payload: { zoom }
    };
  }

  export function updateZoom( zoom ) {
    return {
      type: '@controles/UPDATE_ZOOM',
      payload: { zoom }
    };
  }

  export function aumentarRadius( radius ) {
    return {
      type: '@controles/AUMENTAR_RADIUS',
      payload: { radius }
    };
  }

  export function updateRadius( radius ) {
    return {
      type: '@controles/UPDATE_ZOOM',
      payload: { radius }
    };
  }
