import React from 'react'

import { Container } from './styles'

import { IInputSearch } from '../../Types/components/InputSearch'

const InputSearch: React.FC<IInputSearch> = ({ className, children }) => {
    return (
        <Container className={className}>
            <input type='search' placeholder='Search' />
            <button>
                {children}
            </button>
        </Container>
    )
}

export default InputSearch