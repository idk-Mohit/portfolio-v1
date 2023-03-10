import React from 'react'
import styled from 'styled-components'

const MainLogo = () => {
    return (
        <Container>
            <svg viewBox="0 0 500 250">
                <polygon points="118 253,137 193,4 254" fill="#a32a60">
                </polygon>
                <polygon points="37 154,137 193,4 254" fill="#e6385d">
                </polygon>
                <polygon points="37 154,137 193,113 117" fill="#f04883">
                </polygon>
                <polygon points="37 154,80 24,113 117" fill="#f286b7">
                </polygon>

                <polygon points="231 80,89 6,209 5" fill="#83d0e2">
                </polygon>
                <polygon points="231 80,89 6,139 147" fill="#00b1cf">
                </polygon>
                <polygon points="231 80,176 250,139 147" fill="#4aa4bf">
                </polygon>
                <polygon points="231 80,176 250,276 210" fill="#2d7aa6">
                </polygon>
                <polygon points="289 250,176 250,276 210" fill="#223a7a">
                </polygon>

                <polygon points="289 250,276 210,311 196" fill="#398940">
                </polygon>
                <polygon points="248 132,276 210,311 196" fill="#5eaa46">
                </polygon>
                <polygon points="252 21,231 80,251 140,311 196" fill="#9ac43c">
                </polygon>

                <polygon points="408 93,378 5,261 6" fill="#ffd83f">
                </polygon>
                <polygon points="408 93,313 149,261 6" fill="#fbb146">
                </polygon>
                <polygon points="408 93,313 149,440 187" fill="#f99233">
                </polygon>
                <polygon points="348 251,313 149,440 187" fill="#ef493d">
                </polygon>
                <polygon points="348 251,462 251,440 187" fill="#d12c2a">
                </polygon>
            </svg>
        </Container>
    )
}

export default MainLogo

const Container = styled.div`
    svg {
        height: 30px;
        fill: none;
        /* user-select: none; */
      }

      @media(max-width:768px){
        svg{
            height: 25px;
            margin-top: 8px;
        }
      }
`
// SVG from https://codepen.io/wmine