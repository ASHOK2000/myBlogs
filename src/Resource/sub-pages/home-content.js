import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import homeImage from '../../res_images/homeImage.jpg'
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import AdmissonForm from './admissonForm';
import About from './about';
import "../../css/about.css"
import Cardimage from '../../res_images/ips_logo.png';

import formImage from '../../res_images/children-cartoon-form.png'

//all components of home page from carausal to grid

function HomeContent() {



    return (
        <Container>
            <div>

                {/* row after carausal  */}
                <Row>

                    <Image src={homeImage} alt="indian Public school" className="navbar_logo" style={{ width: 1400, height: 400 }} />

                </Row>
                <div fluid>
                    <Row>
                        <Col>
                            <p style={{ backgroundColor: "purple" }}>
                                Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout,
                            </p>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col sm={6}>
                        Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout,
                        ist above, let’s choose “illustration” as our rhetorical purpose.
                        We’ll walk through a 5-step process for building a paragraph that illustrates a point in
                        an argument. For each step there is an explanation and example. Our example paragraph will
                    </Col>
                    <Col sm={6}>
                        Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout,
                        ist above, let’s choose “illustration” as our rhetorical purpose.
                        We’ll walk through a 5-step process for building a paragraph that illustrates a point in
                        an argument. For each step there is an explanation and example. Our example paragraph will
                    </Col>
                </Row>
            </div>

            {/* school details section */}
            <div>
                <Row>
                    <Col>
                        <p style={{ backgroundColor: "purple" }} >
                            Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout,
                        </p>
                    </Col>
                </Row>
            </div>

            <Row >
                {/* image and text  in sm-8 */}
                <Col sm={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className='formImage'>
                        <Image src={formImage} alt="indian Public school" className="navbar_logo" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                </Col>



                <Col sm={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="formContainer" style={{ width: '100%', height: '100%' }}>
                        <AdmissonForm style={{ width: '100%', height: '100%' }} />
                    </div>
                </Col>
            </Row>

            {/* grid */}
            <div >
                {/*  Cards first row */}
                <Row style={{}}>

                    <Col xs={{ order: 12 }}> <Card style={{ maxWidth: '90%', height: 'auto', marginTop: '5px' }}>
                        <Card.Img variant="top" src={Cardimage} style={{ maxHeight: "300px", maxWidth: "200px", marginLeft: "20px" }} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                111 some shortue than other
                                on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card></Col>


                    <Col xs={{ order: 12 }}> <Card style={{ maxWidth: '90%', height: 'auto', marginTop: '5px' }}>
                        <Card.Img variant="top" src={Cardimage} style={{ maxHeight: "300px", maxWidth: "200px" }} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                111 some shortue than other
                                on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card></Col>



                    <Col xs={{ order: 12 }}> <Card style={{ maxWidth: '90%', height: 'auto', marginTop: '5px' }}>
                        <Card.Img variant="top" src={Cardimage} style={{ maxHeight: "300px", maxWidth: "200px" }} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                111 some shortue than other
                                on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card></Col>



                </Row>
                {/* second row  */}
                <Row style={{ marginTop: '20px' }}>

                    <Col xs> <Card style={{ maxWidth: '90%', height: 'auto' }}>
                        <Card.Img variant="top" src={Cardimage} style={{ maxHeight: "300px", maxWidth: "200px" }} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                S
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card></Col>


                    <Col xs={{ order: 12 }}> <Card style={{ maxWidth: '90%', height: 'auto' }}>
                        <Card.Img variant="top" src={Cardimage} style={{ maxHeight: "300px", maxWidth: "200px" }} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card></Col>

                    <Col xs={{ order: 1 }}> <Card style={{ maxWidth: '90%', height: 'auto' }}>
                        <Card.Img variant="top" src={Cardimage} style={{ maxHeight: "300px", maxWidth: "200px" }} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card></Col>
                </Row>
            </div>

            <div style={{ marginTop: "20px" }}>

                <About />
            </div>


        </Container>

    );
}

export default HomeContent;