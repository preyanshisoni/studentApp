import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import Student from './Student';

class App extends Component{
  constructor(){
    super();
    this.state={
     studentList:Student,
     defaultBranch:"all"
    }
  }

  addNewRecord = (event)=>{
    console.log(event);
    let newStudent = {roll: this.roll.value, name : this.name.value, branch : this.branch.value, mobile : this.mobile.value};
    this.setState({studentList : [...this.state.studentList,newStudent]})
    window.alert("called");
    
  }
  deleteRecord=(roll)=>{
    
    if(window.confirm("Are you sure...?")){
      let index = this.state.studentList.findIndex((student)=>student.roll==roll);
      this.state.studentList.splice(index,1);
      this.setState({studentList:[...this.state.studentList]});
    }
  }

render(){
  return<>
  <div className="container-fluid bg-primary">
    <h6 className='text-center text-white p-3'>Student App</h6>
    </div>
    {/* ______________________ */}

    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">

          <div className="form-group">
            
            <input ref={(rollInput)=>this.roll=rollInput} type='text' placeholder='student Roll Number' className='form-control' />
          </div>
        </div>

        <div className='col-md-6'>
            
          <div className='form-group'>
    <input ref={(nameInput)=>{this.name=nameInput}} type='text' placeholder='Enter Student Name' className='form-control' />
        </div>
      </div>
</div>
<div className='row'>
  <div className='col-md-6'>
    <div className='form-group'>
      <select ref={(branchInput)=>{this.branch=branchInput}} className='form-control'>
        <option>Select Branch</option>
        <option value="CS">CS</option>
        <option value="IT">IT</option>
        <option value="EC">EC</option>
        <option value="MECH">ME</option>
         </select>

    </div>
  </div>
  <div className='col-md-6'>
    <div className='form-group'>
      <input ref= {(mobileInput)=>{this.mobile=mobileInput}}type="text" placeholder='Enter contact number' className='form-control'/>
    </div>
  </div>
  </div>
  <div className='row'>
    <div className='col-md-6'>
      <button  onClick={this.addNewRecord} className='btn btn-primary'>ADD</button>

    </div>
    <div className='col-md-6 d-flex'>
      <button onClick={()=>this.setState({defaultBranch: "CS"})} className='mr-2'>CS : ({this.state.studentList.filter((student)=>student.branch=="CS").length})</button>

      <button onClick={()=>this.setState({defaultBranch:"IT"})} className='mr-2'> IT : ({this.state.studentList.filter((student)=>student.branch=="IT").length})</button>

      <button onClick={()=>this.setState({defaultBranch:"EC"})} className='mr-2'>EC :  ({this.state.studentList.filter((student)=>student.branch=="EC").length})</button>
      <button onClick={()=>this.setState({defaultBranch:"MECH"})} className='mr-2'>MECH :  ({this.state.studentList.filter((student)=>student.branch=="MECH").length})</button>
      <button onClick={()=>this.setState({defaultBranch: "all"})} className="btn btn-secondary ml-2">Total : ({this.state.studentList.length})</button>
    </div>
  </div>
</div>

<div className="container mt-5">
  <table className='table'>
    <thead>
      <tr>
        <th>S.no</th>
        <th>Roll no</th>
        <th>Name</th>
        <th>Branch</th>
        <th>mobile</th>
        <th>Delete</th>
        </tr>
        </thead> 
<tbody>
  {this.state.studentList.filter((student)=>student.branch==this.state.defaultBranch|| this.state.defaultBranch == "all").map((student,index)=><tr key={index}>
    <td>{index +1}</td>
    <td>{student.roll}</td>
    <td>{student.name}</td>
    <td>{student.branch}</td>
    <td>{student.mobile}</td>
    <td><button onClick={()=>this.deleteRecord(student.roll)} className='btn btn-outline-primary'>Delete</button></td>

  </tr>)}

</tbody>
  </table>
</div>
  </>
}
}
export default App;
