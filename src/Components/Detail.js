import "bootstrap/dist/css/bootstrap.min.css";
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const Detail = ({ details, className, setIsSubmit,deleteHandler,editHandler }) => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return (
    <>
      <div className={`container-lg mt-5 ${className}`}>
        <button type="button" className="btn btn-success" onClick={() => setIsSubmit(false)}>Add</button>
        <h2 className="text-center">Details Table</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Created Date</th>
              <th>Created Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {details.map((detail, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{detail.firstname}</td>
                <td>{detail.lastname}</td>
                <td>{detail.email}</td>
                <td>{passwordRegex.test(detail.password) ? "true" : "false"}</td>
                <td>{detail.createdAtDate}</td>
                <td>{detail.createdAtTime}</td>
                <td>
                  <div className="text-center">
                    <FaEdit color="blue"  onClick={() => editHandler(detail, index)} />
                    <FaTrashAlt className="mx-3" color="red" onClick={()=>deleteHandler(index)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
export default Detail;