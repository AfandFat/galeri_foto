// import axios from "axios";
// import { useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from 'axios';


function Foto(){


    // useEffect(() => {
        
    //     axios.get().then(res => {
    //         console.log(res)
    //     });
     
    // }, [])



    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>
                  Data Foto
                  <Link to="/" className="btn btn-primary float-end">Tambah Foto</Link>
                </h4>
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Foto Id</th>
                      <th>Judul</th>
                      <th>Deskripsi</th>
                      <th>Tanggal Unggah</th>
                      <th>Lokasi File</th>
                      <th>Album Id</th>
                      <th>User Id</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Foto;