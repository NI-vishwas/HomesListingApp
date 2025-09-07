import { Col, Container, Row } from "react-bootstrap"
import ListingCard from "../components/listings/ListingCard"
import listings from "../services/data"

export default function HomePage(){
    return (
        <Container className="my-4">
            <Row className="g-4">
            {listings.map((listing)=>(
                <Col key={listing.id}>
                    <ListingCard
                        listing={listing}
                    />
                </Col>
            ))}
            </Row>
        </Container>
    )
}