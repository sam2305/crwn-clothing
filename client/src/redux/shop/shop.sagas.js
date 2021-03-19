import { takeLatest, all, call, put } from 'redux-saga/effects';
import { ShopActionTypes } from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

export function* onFetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollections)
}

export function* fetchCollections() {
    try{
        const collectionref = firestore.collection('collections');
        const snapshot  = yield collectionref.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    }catch(error){
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* shopSagas() {
    yield all([
        call(onFetchCollectionsStart)
    ])
}