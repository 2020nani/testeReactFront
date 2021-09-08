import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Container } from './styles'
import { Field, Form, Formik } from 'formik';
import { listarPontos } from '~/store/modules/mapControls/actions';
import { useDispatch } from 'react-redux';

const schema = Yup.object().shape({
  minZoom: Yup.number()
    .min(0, "Somente valores positivos"),
  maxZoom: Yup.number()
    .min(1, "Somente valores positivos"),
  west_lng: Yup.number(),
  south_lat: Yup.number(),
  east_lng: Yup.number(),
  north_lat: Yup.number(),
  radius: Yup.number()
    .required('Valor do radius e obrigatorio'),
  zoom: Yup.number()
    .required('Valor do zoom e obrigatorio'),
});

export default function MapControls() {
  const dispatch = useDispatch();

  return (

    <Container>
      <Formik
        initialValues={{

          boundsString: '',
          radius: 0,
          zoom: 0
        }}
        validationSchema={schema}
        /* funcao controle do mapa */

        onSubmit={async (values) => {
          await dispatch(listarPontos(values));
        }
        }
      >
        {({
          touched,
          errors,

        }) => (
          <Form >

            <Field type="number" name="minZoom" placeholder="Digite valor minimo para zoom" />
            {errors.minZoom && touched.minZoom ? (<div>{errors.minZoom}</div>) : null}

            <Field type="number" name="maxZoom" placeholder="Digite valor maximo para zoom" />
            {errors.maxZoom && touched.maxZoom ? (<div>{errors.maxZoom}</div>) : null}

            <Field type="text" name="boundsString" placeholder="Digite valor maximo para zoom" />
            {errors.boundsString && touched.boundsString ? (<div>{errors.boundsString}</div>) : null}

            <Field type="number" name="radius" placeholder="Digite valor do radius para cada cluster" />
            {errors.radius && touched.radius ? (<div>{errors.radius}</div>) : null}

            <Field type="number" name="zoom" placeholder="Definir um zoom" />
            {errors.zoom && touched.zoom ? (<div>{errors.zoom}</div>) : null}

            <button >Atualizar controles</button>
          </Form>
        )}
      </Formik>
    </Container>

  );

}