import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice"
import { authenticatedState, demoUser, initialState, notAuthenticatedState } from "../../fixtures/authFixtures";

describe('Pruebas en el authSlice', () => { 

    test('Debe de regresar el estado inicial y llamarse "auth"', () => { 

        //console.log(authSlice)
        const state = authSlice.reducer(initialState, {});

        expect(authSlice.name).toBe('auth');
        expect(state).toEqual(initialState);
        
     })


     test('Debe de realizar la autenticacion', () => { 

        //console.log(login(demoUser))
        const state = authSlice.reducer(initialState, login(demoUser));
        //console.log(state)
        expect(state).toEqual({
            status: 'authenticated',
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null,
        })
      })

      test('Debe de realizar el logout sin argumentos', () => { 

        //authenticatedState // logout sin argumentos
        const state = authSlice.reducer(authenticatedState, logout())
        expect(state).toEqual(notAuthenticatedState)
       })

       test('Debe de realizar el logout y mostrar un mensaje de error', () => { 

        //authenticatedState // logout con argumentos
        const errorMessage = 'Credenciales no son correctas'
        const state = authSlice.reducer(authenticatedState, logout({
            errorMessage
        }))
        expect(state).toEqual({
            ...notAuthenticatedState,
            errorMessage
        })

       })

       test('Debe de cambiar el estado a checking', () => { 

            const state = authSlice.reducer(authenticatedState, checkingCredentials());
            expect(state.status).toBe('checking');
        })
 })