import React from 'react'
import { render } from '@testing-library/react'
import Page from './page'

describe('Home', () => {
    it('renders homepage unchanged', () => {
        render(<Page />)
    })
})
