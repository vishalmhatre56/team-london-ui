import React, { Component } from 'react';
import './Homepage.css';

const docArray = [
    {
        name: "Digambar",
        id:"1111111111",
        type:"Cardiologist" 
    },
    {
        name: "Vishal",
        id:"2222222222" ,
        type:"Audiologist" 
    },
    {
        name: "Vijay",
        id:"3333333333",
        type:"Dentist"  
    },
    {
        name: "Akash",
        id:"4444444444" ,
        type:"Gynaecologist"
    },
    {
        name: "Priya",
        id:"5555555555" ,
        type:"Psychiatrists"
    },
    {
        name: "Swapnil",
        id:"6666666666" ,
        type:"Neurologist"
    }
]

const ShowDoc = (props) => {
    return(
        <div className="doc-main">
            <p className="doc-field">Name: {props.doc.name}</p>
            <p className="doc-field">Specialisation: {props.doc.type}</p>
            <button type="button" className="search-btn mt-3" onClick={()=>alert("Calling to doctor")}>Call</button>
        </div>
    )
}

class Homepage extends Component {
    constructor() {
        super()
        this.state = {
            docType: "Cardiologist",
            searchDocList: []
        }
    }

    getDocList = () => {
        const docList = docArray.filter(doc => doc.type === this.state.docType);
        this.setState({searchDocList: docList})
    }

    render() {
        const {
            userName = "Swapnil"
        } = this.props;
        return (
            <div className="homePageMain">
                <div className="brandindSection">
                    <div className="userInfo">
                        <i className="fas fa-user-circle userInfoicon"></i>
                        <div className="usernameSection">
                            <p className="">Hi,</p>
                            <p className="font-weight-bold">{userName}</p>
                        </div>
                    </div>
                    <div className="branding">
                        <p className="homepage-heading">Team London</p>
                    </div>
                </div>
                <div className="filter">
                    <select name="cars" id="cars" onChange={(e)=>this.setState({docType: e.target.value})}>
                        <option value="Cardiologist">Cardiologist</option>
                        <option  value="Audiologist">Audiologist</option>
                        <option  value="Dentist">Dentist</option>
                        <option  value="ENT">ENT</option>
                        <option  value="Gynaecologist">Gynaecologist</option>
                        <option  value="Orthopaedic">Orthopaedic surgeon</option>
                        <option  value="Paediatrician">Paediatrician</option>
                        <option  value="Psychiatrists">Psychiatrists</option>
                        <option  value="Veterinarian">Veterinarian</option>
                        <option  value="Radiologist">Radiologist</option>
                        <option  value="Neurologist">Neurologist</option>
                    </select>
                    <button type="button" className="search-btn ml-3" onClick={()=>this.getDocList()}>Search</button>
                </div>

                <div>
                    {this.state.searchDocList.map((doctorObj)=>{
                        console.log("--------------",this.state.searchDocList)
                        return(
                            <ShowDoc doc={doctorObj}/>
                        )
                    })}
                </div>



            </div>
        );
    }
}

export default Homepage;