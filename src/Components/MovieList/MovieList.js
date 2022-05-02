import React from 'react'

import Card from "react-bootstrap/Card";
function MovieList() {
    return (
        <div>
            <div className='container'>
                <div className='title-box m-3'>
                    <h3>Trending Movies</h3>
                </div>
                <div className='row'>
                    <div className='col-md-3'>
                        <Card className='m-2' >
                            <Card.Img style={{height:'200px',objectFit:"cover"}} variant="top" src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text style={{fontSize:'16px'}}>
                                    Cast
                                </Card.Text>
                                <Card.Text style={{fontSize:"12px"}}>
                                    Tom Holland,
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-3'>
                        <Card className='m-2' >
                            <Card.Img style={{ height: '200px', objectFit: "cover" }} variant="top" src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-3'>
                        <Card className='m-2' >
                            <Card.Img style={{ height: '200px', objectFit: "cover" }} variant="top" src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default MovieList