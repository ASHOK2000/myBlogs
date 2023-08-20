import React, { useRef } from 'react';
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';

export default function Home_About() {
    const section1 = useRef(null);
    const section2 = useRef(null);
    const section3 = useRef(null);
    const section4 = useRef(null);
    const sectionA = useRef(null);
    const sectionB = useRef(null);

    const containerRef = useRef(null);


    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md='12' mt='5'>
                    <div id='element' ref={containerRef} className='scrollspy-example'>
                        <section ref={section1} id='section-1'>
                            <h3>Section 1</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                quaerat accusamus numquam.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                quaerat accusamus numquam.
                            </p>
                        </section>
                        <section ref={section2} id='section-2'>
                            <h3>Section 2</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                quaerat accusamus numquam.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                quaerat accusamus numquam.
                            </p>
                        </section>
                        <section ref={section3} id='section-3'>
                            <h3>Section 3</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                quaerat accusamus numquam.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                quaerat accusamus numquam.
                            </p>
                            <section ref={sectionA} id='subsection-a'>
                                <h3>Subsection A</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                    maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                    quaerat accusamus numquam.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                    maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                    quaerat accusamus numquam.
                                </p>
                            </section>
                            <section ref={sectionB} id='subsection-b'>
                                <h3>Subsection B</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                    maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                    quaerat accusamus numquam.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                    maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                    quaerat accusamus numquam.
                                </p>
                            </section>
                        </section>
                        <section ref={section4} id='section-4'>
                            <h3>Section 4</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                quaerat accusamus numquam.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                quaerat accusamus numquam.
                            </p>
                        </section>
                    </div>
                </MDBCol>

            </MDBRow>
        </MDBContainer>
    );
}