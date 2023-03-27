import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import alpino from '../img/Acentor-alpino.jpg'


function CardsB() {
    return (
        <div>
            <div className="container my-5">
                <div className="p-5 text-center bg-body-tertiary rounded-3">
                    <img src={alpino} className="bi mt-4 mb-3" style={{width: '100px', height: '100px'}}/>
                    <h1 className="text-body-emphasis">Jumbotron with icon</h1>
                    <p className="col-lg-8 mx-auto fs-5 text-muted">
                        This is a custom jumbotron featuring an SVG image at the top, some longer text that wraps early thanks to a responsive <code>.col-*</code> class, and a customized call to action.
                    </p>
                    <div className="d-inline-flex gap-2 mb-5">
                        <button className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button">
                            Call to action
                            <svg className="bi ms-2" width="24" height="24"></svg>
                        </button>
                        <button className="btn btn-outline-secondary btn-lg px-4 rounded-pill" type="button">
                            Secondary link
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsB
