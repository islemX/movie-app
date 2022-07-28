import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactStars from 'react-stars';

function MovieCard ({movie}) {
   
    return (
    <div >
        {
        <Card  style={{width: '20rem', margin :'50px' ,height:'25rem'}} >
           <Card.Img variant="top" src= {movie.posterURL} alt="blabla" style={{minHeight : '10rem'}}/>
             <Card.Body className="card" style ={{display :'flex', flexDirection:'column'}}>
                    <Card.Title style ={{height : '25px', width:'auto', overflowY:'auto'}}>{movie.title}</Card.Title>
                    <ReactStars
                        count={5}
                        size={20}
                        isHalf={false}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                        value={movie.rating}
                        edit={false}
                    />
                    <Card.Text style ={{width:'300px', height:'50px', overflow :'auto'}}>
                     {movie.description}
                    </Card.Text>
                    
                     <Button variant="outline-secondary" style ={{alignSelf:'center'}}>See trailer</Button>
                     
              </Card.Body>
              
        </Card>
        }
        
    </div>
    )
}
export default MovieCard