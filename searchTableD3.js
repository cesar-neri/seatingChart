class SearchTableD3 {
  constructor(data, elem) {
    //console.log(data);
    //D3 data from script, in this case employees[];
    this.data = data;
    //console.log(this.data);
    elem.addEventListener("keyup", this.searchTD3.bind(this));

    this.searchData = {
      dataIN: [],
      dataOUT: []
    };

    this.container = d3.select("svg");
    this.selectID;
  }

  // main search function
  searchTD3() {
    this.searchEmployees();
    this.searchTable();

    this.update();
  }

  //searches this.data for table input
  searchEmployees() {
    // Declare variables
    var input, filter;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();

    this.searchData.dataIN = [];
    this.searchData.dataOUT = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].lastName.toUpperCase().indexOf(filter) > -1 || this.data[i].firstName.toUpperCase().indexOf(filter) > -1) {
        this.searchData.dataIN.push(this.data[i]);
      } else {
        this.searchData.dataOUT.push(this.data[i]);
      }
    }
    // console.log(this.searchData);
  }

  //Search table defined by hard-coded element IDs
  searchTable() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;

    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("employeeListTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        //console.log(txtValue);
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  //Search table defined by hard-coded element IDs
  searchTable() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;

    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("employeeListTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        //console.log(txtValue);
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  selectOne(event){
    let recordID = event.path[1].dataset.recordId;

    let found = this.searchData.dataIN.find(function(element){
      return element.recordID == recordID;
    });
    // console.log(found);
    let foundArray = [found];

    var circles = this.container.selectAll("circle")
      .data(foundArray, function(d) { return d.recordID; });

    let cRad = planHeight / 110;

    circles.transition()
      .ease(d3.easeQuad)
      .duration(150)
      .attr("r", cRad * 2)
      .attr("opacity", "0.4");

    //EXIT
    circles.exit()
      .transition()
      .ease(d3.easeQuad)
      .duration(150)
      .attr("r", 0.1)
      .attr("opacity", "0.15")
      .remove();

    circles.enter().append("circle")
      .on('mouseover', SearchTableD3.showDetail)
      .on('mouseout', SearchTableD3.hideDetail)
      .attr("cx", SearchTableD3.seatingPosX)
      .attr("cy", SearchTableD3.seatingPosY)
      .attr("r", cRad)
      .attr("opacity", "0.15")
      .attr("class", "seatCircle")
      .attr("firstName", function(d) {
        return (d.firstName)
      })
      .attr("lastName", function(d) {
        return (d.lastName)
      })
      .attr("seat", function(d) {
        return (d.seat)
      })
      .attr("headshot", this.headshotURL)
      .style("fill", "blue")
      .transition()
      .ease(d3.easeQuad)
      .duration(100)
      .attr("r", cRad * 3);
  }

  //show data that matches string
  update() {
    var t = d3.transition()
      .duration(750);

    this.container = d3.select("svg");

    //this is a little not good - planHeight should be parameterized
    let cRad = planHeight / 110;

    var circles = this.container.selectAll("circle")
      .data(this.searchData.dataIN, function(d) { return d.recordID; });

    //UPDATE
    circles.transition()
      .ease(d3.easeQuad)
      .duration(100)
      .attr("r", cRad);

    //EXIT
    circles.exit()
      .transition()
      .ease(d3.easeQuad)
      .duration(1000)
      .attr("r", 0)
      .remove();

    //
    circles.enter().append("circle")
      .on('mouseover', SearchTableD3.showDetail)
      .on('mouseout', SearchTableD3.hideDetail)
      .attr("cx", SearchTableD3.seatingPosX)
      .attr("cy", SearchTableD3.seatingPosY)
      .attr("r", cRad)
      .attr("opacity", "0.15")
      .attr("class", "seatCircle")
      .attr("firstName", function(d) {
        return (d.firstName)
      })
      .attr("lastName", function(d) {
        return (d.lastName)
      })
      .attr("seat", function(d) {
        return (d.seat)
      })
      .attr("headshot", this.headshotURL)
      .style("fill", "blue");
  }

  deselect(){
    this.update();
  }

  static seatingPosX(d) {

    var pName = (d.lastName);
    var dSeat = String(d.seat);
    var seatPos = seatCenters[dSeat];
    if (typeof(seatPos) == 'undefined') {
      console.log("seat error!" + pName + dSeat);
      return -100;
    }
    var posX = seatPos.x;
    return (posX * (planWidth + 10)) - 8;
  }

  static seatingPosY(d) {
    var dSeat = String(d.seat);
    var seatData = seatCenters[dSeat];

    if (typeof(seatData) == 'undefined') {
      console.log('error!');
      return -100;
    }
    var posY = seatData.y;
    return Math.abs((posY - 1) * (planHeight + 8) + 7);
  }

  static headshotURL(d) {
    var headShotObject = (d.headshot);
    var headShotSubarray = headShotObject["0"];
    var imageURL = headShotSubarray["url"];
    if (typeof(imageURL) == 'undefined') {
      console.log("error!");
      return;
    }
    var imageURLString = String(imageURL);
    return imageURLString;
  }

  static showDetail(d) {
    // var tooltipHeadshot = (d.headshot);
    var content = "<img src=" + (d.headshot[0]['url']) + "> </img><span class='bold'>" + (d.firstName) + ' ' + (d.lastName) + "</span><br><span class='light'>ext. " + (d.extension) + "</span><br><span class='light'>" + (d.seat) + "</span>";

    tooltip.showTooltip(content, d3.event);
  }

  static hideDetail(d) {
    tooltip.hideTooltip();
  }

}

// export {searchTableD3};
