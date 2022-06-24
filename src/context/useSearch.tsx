import React, { useCallback, useContext, useState } from 'react'

import inputValidation from '../utils/inputValidate'

import { IInputSearchState, IUseSearchContext, IUseSearchProvider, IUseSearchPageState } from '../Types/components/InputSearch'

const UseSearchContext = React.createContext({} as IUseSearchContext)

export const UseSearchProvider: React.FC<IUseSearchProvider> = ({ children }) => {

    const [searchText, setSearchText] = useState<IInputSearchState>({
        global: {
            value: '',
            isValid: false,
            validationRules: {
                isRequired: true
            }
        },
        home: {
            value: '',
            isValid: false,
            validationRules: {
                isRequired: true
            }
        }
    })
    const [page, setPage] = useState<IUseSearchPageState>({ global: false, home: false })

    const onSetPage = useCallback((name: 'global' | 'home', value: boolean) => {
        return setPage(prevState => ({ ...prevState, [name]: value }))
    }, [])

    const onClearSearchHandler = useCallback((name: 'global' | 'home') => {
        onSetPage(name, false)
        setSearchText(prevState => ({
            ...prevState,
            [name]: {
                ...prevState[name],
                isValid: false,
                value: ''
            }
        }))
    }, [onSetPage])

    const onChangeSearchTextHandler = useCallback((
        event: React.ChangeEvent<HTMLInputElement>,
        name: 'home' | 'global'
    ) => {
        return setSearchText(prevState => ({
            ...prevState,
            [name]: {
                ...prevState[name],
                value: event.target.value,
                isValid: inputValidation(prevState[name].validationRules, event.target.value)
            }
        }));
    }, [])

    return (
        <UseSearchContext.Provider value={{
            onChangeSearchTextHandler,
            page,
            searchText,
            onSetPage,
            onClearSearchHandler
        }}>
            {children}
        </UseSearchContext.Provider>
    )
}

export default function useSearch() {
    const useSearch = useContext(UseSearchContext)

    return { ...useSearch }
}
