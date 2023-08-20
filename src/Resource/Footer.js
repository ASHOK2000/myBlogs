import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBCol,
    MDBRow,
    MDBBtn

} from 'mdb-react-ui-kit';
import { EnvelopeAtFill, Telephone } from 'react-bootstrap-icons';



export default function Footer() {
    return (
        <div>
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>


                        <MDBBtn
                            floating
                            className='m-1'
                            style={{ backgroundColor: '#3b5998', maxHeight: "35px", maxWidth: "100px" }}
                            href='#!'
                            role='button'
                        >
                            <p>
                                Facebook
                            </p>
                        </MDBBtn>

                        <MDBBtn
                            floating
                            className='m-1'
                            style={{ backgroundColor: '#55acee', maxHeight: "35px", maxWidth: "100px" }}
                            href='#!'
                            role='button'
                        >
                            <p>
                                &nbsp;  Twitter &nbsp;
                            </p>
                        </MDBBtn>


                        <MDBBtn
                            floating
                            className='m-1'
                            style={{ backgroundColor: '#ac2bac', maxHeight: "35px", maxWidth: "100px" }}
                            href='#!'
                            role='button'
                        >
                            <p>
                                Instagram
                            </p>
                        </MDBBtn>
                        <MDBBtn
                            floating
                            className='m-1'
                            style={{ backgroundColor: '#dd4b39', maxHeight: "35px", maxWidth: "100px" }}
                            href='#!'
                            role='button'
                        >
                            <p>
                                &nbsp;  Google &nbsp;
                            </p>
                        </MDBBtn>



                        <MDBBtn
                            floating
                            className='m-1'
                            style={{ backgroundColor: '#25d366', maxHeight: "35px", maxWidth: "100px" }}
                            href='#!'
                            role='button'
                        >
                            <p>
                                Whatsapp
                            </p>
                        </MDBBtn>

                        <MDBBtn
                            floating
                            className='m-1'
                            style={{ backgroundColor: '#ed302f', maxHeight: "35px", maxWidth: "100px" }}
                            href='#!'
                            role='button'
                        >
                            <p>
                                &nbsp; YouTube
                            </p>

                        </MDBBtn>
                    </div>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon icon="gem" className="me-3" />
                                    Company name
                                </h6>
                                <p> <strong style={{fontFamily:"unset"}}>Indian Public School</strong><br /> Village- Suhili District: Satna <br /> Madhya-Pradesh INDIA
                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>

                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Pricing
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Settings
                                    </a>
                                </p>
                                <p>
                                    <a href='./Admission' className='text-reset'>
                                        Admissons
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Help
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>

                                <p>
                                    <EnvelopeAtFill />&nbsp;
                                    Info@IndianPublicSchool.com
                                </p>
                                <p>
                                    <Telephone />&nbsp;
                                    +916265173931
                                </p>
                                <p>
                                    <Telephone />&nbsp;
                                    +919685843843
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2023 Copyright:
                    <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                        IndianPublicSchool.com
                    </a>
                </div>
            </MDBFooter>





        </div>
    );
}