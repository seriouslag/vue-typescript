import { Module } from 'vuex';
import { RootState, AppState } from '../../types';

const namespaced: boolean = true;

const state: AppState = {
    count: 1
};

export const appState: Module<AppState, RootState> = {
    namespaced,
    state,
    getters : {
        getCount: () => state.count,
    },
    actions: {
        setCount({commit}, count) {
            commit("SET_COUNT", count);
        }
    },
    mutations: {
        SET_COUNT(state, count) { state.count = count;}
    }
};
