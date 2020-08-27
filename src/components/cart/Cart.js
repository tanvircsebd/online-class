import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';


const cart = (props) => {
    console.log(props.addCourse);
    const addCourse = props.addCourse;
    let total = 0 ;
    let price = 0;
    for(let i = 0; i<addCourse.length; i++) {
        price = addCourse[i].price;
        price = Number(price);
        total +=price;
    }
    const addedCourse = addCourse.map(addedCourse => {
        return (
            <CardDeck className="mt-4 mr-2 ">
               <Card>
                <Card.Img variant="top" height="170px" src={addedCourse.image} />
               <Card.Body>
                   <Card.Title>{addedCourse.name}</Card.Title>
                   <Card.Text>
                     <h3>Price : ${addedCourse.price}</h3>
                   </Card.Text>
               </Card.Body>
               </Card>
           </CardDeck>
        )
    });
    return (
        <div>
            <CardDeck className="mt-5">
            <Card>
            {/* <Card.Header><h2>Your Courses</h2></Card.Header> */}
            <Card.Body>  
                <Card.Text>
                 <p><big>Total Courses : {addCourse.length}</big></p>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <p><big>Total Price : $ {total}</big></p>
            </Card.Footer>
            </Card>
      </CardDeck>
      {addedCourse}
        </div>
    );
};

export default cart;