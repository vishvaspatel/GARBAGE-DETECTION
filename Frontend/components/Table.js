import "../table.css";
import "../navbar.css";
import React,{useState , useEffect} from 'react';
import axios from 'axios';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import searchicon from "../images/icons8-search-100.png";



function Table() 
{
  const [data, setdata] = useState([]);
  const [data1, setdata1] = useState([]);
  const [show, setShow] = useState(false);
  const [fullimg, setfullimg] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const auth = localStorage.getItem("userdata");
  function handleFullimg(dataa) {
    fetch(`http://127.0.0.1:5000/media/${dataa.iamge_path}`, {
      method: "GET",
    })
      // .then((response) => response.json())
      .then((data) => {
        setShow(true);
        // console.log(data.url);
        setfullimg(data.url);
      });
  }
  //data local
  async function localdata() {
    try {
      const data = await axios.get(
        `http://127.0.0.1:5000/fetch/${JSON.parse(auth).Username}`
      );
      setdata(data.data.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    localdata();
    axios.get();
  }, []);
  //delete
  function handledelete(dataa) {
    axios
      .post(`http://127.0.0.1:5000/temp_delete/${dataa.iamge_path}`)
      .then((res) => {
        console.warn(res);
        if (res) {
          localdata();
        } else {
          console.log("No Deleted");
        }
      });
  }

  //button verify
  const handleClick = (dataa) => {
   
    axios
      .post(
        `http://127.0.0.1:5000/verify/${dataa.iamge_path}/${dataa.location}`
      )
      .then((res) => {
        console.warn(res);
        if (res) {
          localdata();
        } else {
          console.log("No change");
        }
      });
  };
  // search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    setFilteredData(
      data.filter((dataa) => {
        return (
          dataa.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dataa.time.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dataa.mac_address.toLowerCase().includes(searchTerm.toLowerCase())
        );
      })
    );
  }, [searchTerm, data]);

  //short
  const sortData = () => {
    const sortedData = [...data];
    if (sortOrder === "asc") {
      sortedData.sort((a, b) => (a.date > b.date ? 1 : -1));
      setSortOrder("desc");
    } else {
      sortedData.sort((a, b) => (a.date < b.date ? 1 : -1));
      setSortOrder("asc");
    }

    setdata(sortedData);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://127.0.0.1:5000/fetch/${JSON.parse(auth).Username}`);
      const newData = await response.json();
      setdata1(newData);
    };

    fetchData();

    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="content-wrap">
    <div className="tbbar">
      {/* <label className="imp">Swachh Bharat Mission</label> */}
      <a>
        <img src={searchicon} className="search_icon"></img>
      </a>
      <input
        className="search"
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
      />
    </div>
    <div>       <div id="table-users">
    {" "}
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Image</th>
          {/* <th>approved</th> */}

          <th>
            Date
            <button className="short" onClick={sortData}>
              {sortOrder === "asc" ? "▲" : "▼"}
            </button>
          </th>
          <th>
            Time
            <button className="short"></button>
          </th>
          <th>MAC Address</th>
          <th>Location</th>

          <th>Verify</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((dataa, inx) => {
          return (
            <>
              <tr>
                <td>{inx + 1}</td>
                <td>
                  <img
                    alt="img1"
                    width="200"
                    src={`http://127.0.0.1:5000/media/${dataa.iamge_path}`}
                    onClick={() => handleFullimg(dataa)}
                  />
                </td>
                {/* <td>{dataa.approved}</td> */}
                <td>{dataa.date}</td>
                <td>{dataa.time}</td>
                <td>{dataa.mac_address}</td>
                <td>{dataa.location}</td>

                <td>
                  <Button
                    variant="success"
                    type="button"
                    // className="Verify"
                    class="Verify"
                    id="ve"
                    onClick={() => handleClick(dataa)}
                  >
                    Verify
              
                  </Button>
                </td>
                <td>
                  <center>
                    {" "}
                    <Button
                      variant="danger"
                      type="button"
                      // id="delete"
                      onClick={() => handledelete(dataa)}
                    >
                      Delete
                    </Button>
                  </center>
                </td>
              </tr>

              {show ? (
                <Modal
                  show={show}
                  backdrop="static"
                  keyboard={true}
                  size="xl"
                  onHide={() => setShow(false)}
                  dialogClassName="modal-190w"
                  aria-labelledby="example-custom-modal-styling-title"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                      Image Information
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body height="700px">
                    <img
                      alt="img1"
                      width="600px"
                      height="400px"
                      src={fullimg}
                    />
                  </Modal.Body>
                </Modal>
              ) : null}
            </>
          );
        })}
      </tbody>
    </table>
  </div></div>
  </div>
  )
}

export default Table;