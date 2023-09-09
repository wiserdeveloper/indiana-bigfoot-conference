import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import IBRO from '../pages/IBRO'
import { BrowserRouter } from 'react-router-dom' 

const MockRouter = () => {
    return (
        <BrowserRouter>
            <IBRO />
        </BrowserRouter>
    )
}

const renderIBRO = () => {
    return (
        render(<MockRouter />)
    )
}

describe("IBRO", () => {
    beforeEach(() => {
        renderIBRO()
    })

    it("Should display the organizations name header", () => {
        const orgHeader = screen.getByText("Indiana Bigfoot Research Organization")
        expect(orgHeader).toBeInTheDocument()
    })

    it("Should display an about us paragraph", () => {
        const IBROParagraph = screen.getByTestId("ibroParagraph")
        expect(IBROParagraph).toBeInTheDocument()
    })

    it("Should display a Meet the Researchers header", () => {
        const researchersHeader = screen.getByText("Meet the Researchers")
        expect(researchersHeader).toBeInTheDocument()
    })

    it("Should display 4 researchers", () => {
        const researchers = screen.getAllByTestId("researchers")
        expect(researchers).toBeInTheDocument()
    })
})