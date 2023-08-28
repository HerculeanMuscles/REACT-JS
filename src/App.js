import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Form from "react-bootstrap/Form";

function App() {
	return (
		<>
			<div /*Nav Bar  section */>
				<Navbar expand="lg" className="bg-body-tertiary">
					<Container>
						<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link href="#home">Home</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>

				<h1 /*Heading section */>Home</h1>
				<br></br>
				<br></br>

				<div /*Card section*/>
					<CardGroup>
						<Card>
							<Card.Img variant="top" src="holder.js/100px160" />
							<Card.Body>
								<Card.Title>Card title</Card.Title>
								<Card.Text>
									This is a wider card with supporting text below as a natural
									lead-in to additional content. This content is a little bit
									longer.
								</Card.Text>
							</Card.Body>
							<Card.Footer>
								<small className="text-muted">Last updated 3 mins ago</small>
							</Card.Footer>
						</Card>
						<Card>
							<Card.Img variant="top" src="holder.js/100px160" />
							<Card.Body>
								<Card.Title>Card title</Card.Title>
								<Card.Text>
									This card has supporting text below as a natural lead-in to
									additional content.{" "}
								</Card.Text>
							</Card.Body>
							<Card.Footer>
								<small className="text-muted">Last updated 3 mins ago</small>
							</Card.Footer>
						</Card>
						<Card>
							<Card.Img variant="top" src="holder.js/100px160" />
							<Card.Body>
								<Card.Title>Card title</Card.Title>
								<Card.Text>
									This is a wider card with supporting text below as a natural
									lead-in to additional content. This card has even longer
									content than the first to show that equal height action.
								</Card.Text>
							</Card.Body>
							<Card.Footer>
								<small className="text-muted">Last updated 3 mins ago</small>
							</Card.Footer>
						</Card>
					</CardGroup>
				</div>
				<br></br>
				<br></br>

				<div /*Form section*/>
					<Form>
						<Form.Group className="mb-3" controlId="formGroupEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formGroupPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
					</Form>
				</div>
			</div>
		</>
	);
}

export default App;
