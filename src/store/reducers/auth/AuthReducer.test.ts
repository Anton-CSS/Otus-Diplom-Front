import {authReducer} from './authReducer';
import {AuthState} from "../type";
import {IUser, OneUser} from "../../../models/user";

describe('authReducer', () =>{
    it('authReducer works with the field of isLoading', () =>{
        const initialState: AuthState = {
            isAuth: false,
            error: null,
            isLoading: false,
            reg: false,
            user: {} as OneUser,
            clients: [] as IUser[],
        };
        expect(authReducer(initialState, {type: 'SET_LOADING_ACTION', payload: false})).toStrictEqual(initialState);
    });

    it('authReducer works with the field of error', () =>{
        const initialState: AuthState = {
            isAuth: false,
            error: null,
            isLoading: false,
            reg: false,
            user: {} as OneUser,
            clients: [] as IUser[],
        };

        expect(authReducer(initialState, {type: 'SET_ERROR_ACTION', payload: 'error'})).toStrictEqual({
            isAuth: false,
            error: 'error',
            isLoading: false,
            reg: false,
            user: {} as OneUser,
            clients: [] as IUser[],
        });
    });

    it('authReducer works with the field of isAuth', () =>{
        const initialState: AuthState = {
            isAuth: false,
            error: null,
            isLoading: false,
            reg: false,
            user: {} as OneUser,
            clients: [] as IUser[],
        };

        expect(authReducer(initialState, {type: 'SET_AUTH_ACTION', payload: true})).toStrictEqual({
            isAuth: true,
            error: null,
            isLoading: false,
            reg: false,
            user: {} as OneUser,
            clients: [] as IUser[],
        });
    });

    it('authReducer works with the field of isReg', () =>{
        const initialState: AuthState = {
            isAuth: false,
            error: null,
            isLoading: false,
            reg: false,
            user: {} as OneUser,
            clients: [] as IUser[],
        };
        expect(authReducer(initialState, {type: 'SET_REG_ACTION', payload: true})).toStrictEqual({
            isAuth: false,
            error: null,
            isLoading: false,
            reg: true,
            user: {} as OneUser,
            clients: [] as IUser[],
        });
    });
    it('authReducer works with the field of user', () =>{
        const initialState: AuthState = {
            isAuth: false,
            error: null,
            isLoading: false,
            reg: false,
            user: {} as OneUser,
            clients: [] as IUser[],
        };
        expect(authReducer(initialState, {type: 'SET_USER_ACTION', payload: {username: 'Anton', password: '12345'}})).toStrictEqual({
            isAuth: false,
            error: null,
            isLoading: false,
            reg: false,
            user: {username: 'Anton', password: '12345'},
            clients: [] as IUser[],
        });
    });
    it('authReducer works with the field of clients', () =>{
        const initialState: AuthState = {
            isAuth: false,
            error: null,
            isLoading: false,
            reg: false,
            user: {} as OneUser,
            clients: [] as IUser[],
        };
        const clients = [{ _id: '1', username: 'Anton', password: '1234', roles: ['ADMIN']}];
        expect(authReducer(initialState, {type: 'SET_CLIENTS_ACTION', payload: clients})).toStrictEqual({
            isAuth: false,
            error: null,
            isLoading: false,
            reg: false,
            user: {} as OneUser,
            clients: clients,
        });
    });
})