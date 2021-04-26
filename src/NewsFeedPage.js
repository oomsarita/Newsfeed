import React from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect,Link} from 'react-router-dom'
import './NewsFeedPage.css';
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
var count = 0;

class NewsFeedPage1 extends React.Component {

  state = {
    data: {}


  };


  render() {

    return (
        <div class="background-color">
        <br></br>
        <br></br>
<table>
<td width={380}>
  <div>                                </div>
</td>
<td>
        <Router>
      <div>

    <Card border="light" style={{ width: '35rem'  ,height: '20rem'}} bg={'dark'} text={'white'}>
  <Card.Body>
    <Card.Title>
        <div class="thread1"><a href={String(thread[0])} style={{color:'white'}}>{thread_name[0]}</a></div>
    </Card.Title>
    <Card.Text>
        <div class="thread1">{thread_desc[0]}</div>
    </Card.Text>
  </Card.Body>
</Card>
        <br></br>
        <br></br>
        <Card border="light" style={{ width: '35rem'  ,height: '20rem'}} bg={'dark'} text={'white'}>
  <Card.Body>
    <Card.Title>
        <div class="thread1"><a href={String(thread[1])} style={{color:'white'}}>{thread_name[1]}</a></div>
    </Card.Title>
    <Card.Text>
        <div class="thread1">{thread_desc[1]}</div>
    </Card.Text>
  </Card.Body>
</Card>
        <br></br>
        <br></br>
        <Card border="light" style={{ width: '35rem'  ,height: '20rem'}} bg={'dark'} text={'white'}>
  <Card.Body>
    <Card.Title>
        <div class="thread1"><a href={String(thread[2])} style={{color:'white'}}>{thread_name[2]}</a></div>
    </Card.Title>
    <Card.Text>
        <div class="thread1">{thread_desc[2]}</div>
    </Card.Text>
  </Card.Body>
</Card>
        <br></br>
        <br></br>
        <Card border="light" style={{ width: '35rem'  ,height: '20rem'}} bg={'dark'} text={'white'}>
  <Card.Body>
    <Card.Title>
        <div class="thread1"><a href={String(thread[3])} style={{color:'white'}}>{thread_name[3]}</a></div>
    </Card.Title>
    <Card.Text>
        <div class="thread1">{thread_desc[3]}</div>
    </Card.Text>
  </Card.Body>
</Card>
        <br></br>
        <br></br>
        <Card border="light" style={{ width: '35rem'  ,height: '20rem'}} bg={'dark'} text={'white'}>
  <Card.Body>
    <Card.Title>
        <div class="thread1"><a href={String(thread[4])} style={{color:'white'}}>{thread_name[4]}</a></div>
    </Card.Title>
    <Card.Text>
        <div class="thread1">{thread_desc[4]}</div>
    </Card.Text>
  </Card.Body>
</Card>
        <br></br>
        <br></br>
        <Card border="light" style={{ width: '35rem'  ,height: '20rem'}} bg={'dark'} text={'white'}>
  <Card.Body>
    <Card.Title>
        <div class="thread1"><a href={String(thread[5])} style={{color:'white'}}>{thread_name[5]}</a></div>
    </Card.Title>
    <Card.Text>
        <div class="thread1">{thread_desc[5]}</div>
    </Card.Text>
  </Card.Body>
</Card>
        <br></br>
        <br></br>
        <Card border="light" style={{ width: '35rem'  ,height: '20rem'}} bg={'dark'} text={'white'}>
  <Card.Body>
    <Card.Title>
        <div class="thread1"><a href={String(thread[6])} style={{color:'white'}}>{thread_name[6]}</a></div>
    </Card.Title>
    <Card.Text>
        <div class="thread1">{thread_desc[6]}</div>
    </Card.Text>
  </Card.Body>
</Card>
        <br></br>
        <br></br>
        <Card border="light" style={{ width: '35rem'  ,height: '20rem'}} bg={'dark'} text={'white'}>
  <Card.Body>
    <Card.Title>
        <div class="thread1"><a href={String(thread[7])} style={{color:'white'}}>{thread_name[7]}</a></div>
    </Card.Title>
    <Card.Text>
        <div class="thread1">{thread_desc[7]}</div>
    </Card.Text>
  </Card.Body>
</Card>
        <br></br>
        <br></br>
        <Card border="light" style={{ width: '35rem'  ,height: '20rem'}} bg={'dark'} text={'white'}>
  <Card.Body>
    <Card.Title>
        <div class="thread1"><a href={String(thread[8])} style={{color:'white'}}>{thread_name[8]}</a></div>
    </Card.Title>
    <Card.Text>
        <div class="thread1">{thread_desc[8]}</div>
    </Card.Text>
  </Card.Body>
</Card>
        <br></br>
        <br></br>
        <Card border="light" style={{ width: '35rem'  ,height: '20rem'}} bg={'dark'} text={'white'}>
  <Card.Body>
    <Card.Title>
        <div class="thread1"><a href={String(thread[9])} style={{color:'white'}}>{thread_name[9]}</a></div>
    </Card.Title>
    <Card.Text>
        <div class="thread1">{thread_desc[9]}</div>
    </Card.Text>
  </Card.Body>
</Card>
        <br></br>
        <br></br>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <br></br>
      </div>
        </Router>
</td>

</table>
        </div>
    );
  }
}

export default NewsFeedPage1;

