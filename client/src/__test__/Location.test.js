import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Location from '../pages/Location'
import { BrowserRouter } from 'react-router-dom' 

const MockRouter = () => {
    return (
        <BrowserRouter>
            <Location />
        </BrowserRouter>
    )
}

const renderLocation = () => {
    return (
        render(<MockRouter />)
    )
}

describe("Location Page", () => {
    beforeEach(() => {
        renderLocation()
    })

    it("Should display the events city and state", () => {
        const location = screen.getByText("Nashville, Indiana")
        expect(location).toBeInTheDocument()
    })

    it("Should display a description of the city", () => {
        const cityDescription = screen.getByTestId("city-description")
        expect(cityDescription).toBeInTheDocument()
    })

    it("Should display the second description paragraph", () => {
        const cityDescription2 = screen.getByTestId("city-description-pt2")
        expect(cityDescription2).toBeInTheDocument()
    })

    it("Should display the second page header", () => {
        const subHeader = screen.getByText("Come & Explore Nashville!")
        expect(subHeader).toBeInTheDocument()
    })

})

describe("Nashville, Indiana Image", () => {
    beforeEach(() => {
        renderLocation()
    })

    it("Should display the nashville indiana image", () => {
        const locationImage = screen.getByAltText("nashville, indiana")
        expect(locationImage).toBeInTheDocument()
    })

    it("Should have the correct src", () => {
        const locationImage = screen.getByAltText("nashville, indiana")
        expect(locationImage).toHaveAttribute("srcSet", "nashville-in.jpg" || "mobile-nashville.jpg")
    })
    
})

describe("Nashville Indiana map image", () => {
    beforeEach(() => {
        renderLocation()
    })

    it("Should display the nashville indiana map image", () => {
        const locationMapImage = screen.getByAltText("nashville, indiana map")
        expect(locationMapImage).toBeInTheDocument()
    })

    it("Should have the correct src", () => {
        const locationMapImage = screen.getByAltText("nashville, indiana map")
        expect(locationMapImage).toHaveAttribute("srcSet", "nashville-map-desktop.png" || "nashville-map-mobile.png")
    })
})