import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Columns from 'react-columns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Course = (props) => {
    const courses = props.Courses;
    const handleCourse = props.handleCourse;
    
    let Course = courses.map(course => {
        let {name,instructor,price,image} = course;
   
    return (
        <CardDeck className="mx-4 mt-4 text-center">
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text><p><b>Instructor:</b> {instructor}</p></Card.Text>
                    <Card.Text>
                    <h3>${price}</h3>
                    </Card.Text>
              </Card.Body>
              <Card.Footer>
                  <Button variant="danger" className="px-5" onClick={() => handleCourse(course)}><FontAwesomeIcon icon={ faShoppingCart }/> Enroll Now</Button>
              </Card.Footer>
            </Card>
      </CardDeck>
    )
  })

    return (
        <div>
           <Columns>{Course}</Columns>
        </div>
    );
};

export default Course;