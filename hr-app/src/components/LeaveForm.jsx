import React,{Component} from 'react';
import '../App.css';
import { Form, Col, Button } from 'react-bootstrap';




class LeaveForm extends Component{
  render(){
    return(
        <Form>
        <fieldset>

        <Form.Group as={Form.Row}>
          <Form.Label column sm={2}>
            Days:
          </Form.Label>
          <Col sm={10}>
            <Form.Control  placeholder="Leave Days" />
          </Col>
        </Form.Group>

        <Form.Group as={Form.Row}>
            <Form.Label as="legend" column sm={2}>
              Leave Type:
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                label="Annual Leave"
              />
              <Form.Check
               label="Sick Leave"
              />
              <Form.Check
                label="Others"
              />
            </Col>
          </Form.Group>
      
        <Form.Group as={Form.Row} >
          <Form.Label column sm={2}>
            Remain Days:
          </Form.Label>
          <Col sm={10}>
            <Form.Control plaintext readOnly defaultValue="10 Days" />
          </Col>
        </Form.Group>
        

        </fieldset>
      
        <Form.Group as={Form.Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Submit</Button>
          </Col>
        </Form.Group>
      </Form>
    );
  }
}


export default LeaveForm;