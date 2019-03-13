import React, { Component } from "react";


class DropDownMenu extends Component {
    constructor(props) {
        super(props);
        this.state ={
            year: 0,
            term: 0
        }
        
        this.onSubmit = this.onSubmit.bind(this)
   }

   onSubmit(){
       var year_options = document.getElementById("year");
       var myYear = year_options[year_options.selectedIndex].value;
       var term_options = document.getElementById("term");
       var myTerm = term_options[term_options.selectedIndex].value;
       var dates = {
           year: myYear,
           term: myTerm
       }
       this.props.onUpdate(dates);
   }

  render() {
    let minOffset = 0, maxOffset = 6;
    let thisYear = (new Date()).getFullYear();
    let allYears = [];
    for(let x = minOffset; x <= maxOffset; x++) {
        allYears.push(thisYear - x);
    }

    const termList = ['fall', 'winter', 'spring', 'summer'].map((x) => {return(<option key={x}>{x}</option>)});

    const yearList = allYears.map((x) => {return(<option  key={x}>{x}</option>)});
    return (
        <div onChange={this.onSubmit} >
            <select id="year" required>
                <option value="">Please select</option>
                {yearList}
            </select>

            <select id="term" required>
                <option value="">Please select</option>
                {termList}
            </select>
        </div>
    );
  }
}

export default DropDownMenu;
