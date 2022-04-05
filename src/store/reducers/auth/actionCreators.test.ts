import {AuthActionCreators} from './actionCreators';

describe('AuthActionCreators', () =>{
    it('AuthActionCreators is object', () =>{
        expect(AuthActionCreators).toBeInstanceOf(Object);
    });

    it('AuthActionCreators have field setUser', () =>{
        const user = { username: 'Anton', password: '12345'};
        expect(AuthActionCreators.setUser).toBeInstanceOf(Function);
        expect(AuthActionCreators.setUser(user)).toStrictEqual({ type: "SET_USER_ACTION", payload: user});
    });

    it('AuthActionCreators have field  setIsAuth', () =>{
        const boolean = true;
        expect(AuthActionCreators.setIsAuth).toBeInstanceOf(Function);
        expect(AuthActionCreators.setIsAuth(boolean)).toStrictEqual({ type:"SET_AUTH_ACTION", payload: boolean});
    });

    it('AuthActionCreators have field  setLoading', () =>{
        const boolean = true;
        expect(AuthActionCreators.setLoading).toBeInstanceOf(Function);
        expect(AuthActionCreators.setLoading(boolean)).toStrictEqual({ type:"SET_LOADING_ACTION", payload: boolean});
    });

    it('AuthActionCreators have field setReg', () =>{
        const boolean = true;
        expect(AuthActionCreators.setReg).toBeInstanceOf(Function);
        expect(AuthActionCreators.setReg(boolean)).toStrictEqual({ type:'SET_REG_ACTION', payload: boolean});
    });

    it('AuthActionCreators have field setError', () =>{
        const boolean = 'error';
        expect(AuthActionCreators.setError).toBeInstanceOf(Function);
        expect(AuthActionCreators.setError(boolean)).toStrictEqual({ type:'SET_ERROR_ACTION', payload: boolean});
    });

    it('AuthActionCreators have field setClients', () =>{
        const clients = [{ _id: '1', username: 'Anton', password: '1234', roles: ['ADMIN']}];
        expect(AuthActionCreators.setClients).toBeInstanceOf(Function);
        expect(AuthActionCreators.setClients(clients)).toStrictEqual({ type:'SET_CLIENTS_ACTION', payload:clients});
    });

    it('AuthActionCreators have field login', async () =>{
        expect(AuthActionCreators.login).toBeInstanceOf(Function);
    });
    it('AuthActionCreators have field logout', () =>{
        expect(AuthActionCreators.logout).toBeInstanceOf(Function);
    });
    it('AuthActionCreators have field checkToken', () =>{
        expect(AuthActionCreators.checkToken).toBeInstanceOf(Function);
    });
    it('AuthActionCreators have field registration', () =>{
        expect(AuthActionCreators.registration).toBeInstanceOf(Function);
    });

})