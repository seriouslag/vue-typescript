import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from '../types';
Vue.use(Vuex)

import {appState} from './modules/state';

const store: StoreOptions<RootState> = {
    state: {
        version: '1.0.0' // a simple property
    },
    modules: {
        appState
    }
};

export default new Vuex.Store<RootState>(store);
