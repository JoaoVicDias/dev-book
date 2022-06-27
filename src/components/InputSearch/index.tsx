import React from 'react'

import { Container } from './styles'

import { IInputSearch } from '../../Types/components/InputSearch'

const InputSearch: React.FC<IInputSearch> = ({
    className,
    children,
    onFetchDataHandler,
    onChangeSearchTextHandler,
    value
}) => {
    return (
        <Container className={className} onSubmit={(event) => onFetchDataHandler(event)}>
            <input
                type='search'
                placeholder='Search'
                onChange={(event) => onChangeSearchTextHandler(event)}
                value={value}
            />
            <button>
                {children}
            </button>
        </Container>
    )
}

export default InputSearch