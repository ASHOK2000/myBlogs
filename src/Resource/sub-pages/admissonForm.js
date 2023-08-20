import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox,
    MDBBtn
} from 'mdb-react-ui-kit';

function AdmissonForm() {
    return (
        <Container>
            <Row>


                {/* form  in sm-4 */}
                <Col sm={6}>
                    <form>
                        <MDBRow className=' '>
                            <MDBCol>
                                <MDBInput id='form6Example1' label='*First name' placeholder='first name ' />
                            </MDBCol>
                            <MDBCol>
                                <MDBInput id='form6Example2' label='*Last name' placeholder='Last name' />
                            </MDBCol>
                        </MDBRow>

                        <MDBInput id='form6Example3' label='*Standard ' placeholder='class' />
                        <MDBInput id='form6Example4' label='*Address' placeholder='Address' />
                        <MDBInput type='email' id='form6Example5' label='*Email' placeholder='Email Address' />
                        <MDBInput type='tel' id='form6Example6' label='*Phone' placeholder='Contact' />
                        <MDBInput textarea id='form6Example7' rows={4} label='Additional information' placeholder='Ex. previous School ' />

                        <MDBCheckbox
                            wrapperClass='d-flex justify-content-center  '
                            id='form6Example8'
                            label='Terms & Conditions'
                            defaultChecked
                        />
                        <MDBBtn type='submit' block>
                            Send Request                        </MDBBtn>
                    </form>
                </Col>
            </Row>

        </Container>
    );
}

export default AdmissonForm;