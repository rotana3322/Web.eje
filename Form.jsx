import React, { useState } from "react";

export default function Form_Registration() {
  const [formData, setFormData] = useState({
    rollNo: "",
    firstName: "",
    lastName: "",
    fatherName: "",
    dob: "",
    mobile: "",
    email: "",
    password: "",
    gender: "",
    department: [],
    course: "",
    photo: null,
    city: "",
    address: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        department: checked
          ? [...prev.department, value]
          : prev.department.filter((item) => item !== value)
      }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: e.target.files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  const handleBack = () => {
    setSubmittedData(null);
  };

  if (submittedData) {
    return (
      <div style={styles.container}>
        <h2 style={styles.title}>Submitted Registration Details</h2>
        <table style={styles.table}>
          <tbody>
            <tr><td style={styles.label}>Roll No :</td><td>{submittedData.rollNo}</td></tr>
            <tr><td style={styles.label}>Student Name :</td><td>{submittedData.firstName} {submittedData.lastName}</td></tr>
            <tr><td style={styles.label}>Father's Name :</td><td>{submittedData.fatherName}</td></tr>
            <tr><td style={styles.label}>Date of Birth :</td><td>{submittedData.dob}</td></tr>
            <tr><td style={styles.label}>Mobile No :</td><td>{submittedData.mobile}</td></tr>
            <tr><td style={styles.label}>Email ID :</td><td>{submittedData.email}</td></tr>
            <tr><td style={styles.label}>Gender :</td><td>{submittedData.gender}</td></tr>
            <tr><td style={styles.label}>Department :</td><td>{submittedData.department.join(", ")}</td></tr>
            <tr><td style={styles.label}>Course :</td><td>{submittedData.course}</td></tr>
            <tr><td style={styles.label}>Photo :</td><td>{submittedData.photo ? submittedData.photo.name : "None"}</td></tr>
            <tr><td style={styles.label}>City :</td><td>{submittedData.city}</td></tr>
            <tr><td style={styles.label}>Address :</td><td>{submittedData.address}</td></tr>
          </tbody>
        </table>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button onClick={handleBack} style={styles.backButton}>
            Back to Registration
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Student Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <table style={styles.table}>
          <tbody>
            <tr>
              <td style={styles.label}>Roll no. :</td>
              <td>
                <input
                  type="text"
                  name="rollNo"
                  value={formData.rollNo}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </td>
            </tr>
            <tr>
              <td style={styles.label}>Student name :</td>
              <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    style={styles.input}
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    style={styles.input}
                    required
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td style={styles.label}>Father's name :</td>
              <td>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  style={styles.input}
                />
              </td>
            </tr>
            <tr>
              <td style={styles.label}>Date of birth :</td>
              <td>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  style={styles.input}
                />
              </td>
            </tr>
            <tr>
              <td style={styles.label}>Mobile no. :</td>
              <td>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  style={styles.input}
                />
              </td>
            </tr>
            <tr>
              <td style={styles.label}>Email id :</td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={styles.input}
                />
              </td>
            </tr>
            <tr>
              <td style={styles.label}>Password :</td>
              <td>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  style={styles.input}
                />
              </td>
            </tr>
            <tr>
              <td style={styles.label}>Gender :</td>
              <td>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleChange}
                  />{" "}
                  Male
                </label>
                <label style={{ marginLeft: "15px" }}>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleChange}
                  />{" "}
                  Female
                </label>
              </td>
            </tr>
            <tr>
              <td style={styles.label}>Department :</td>
              <td>
                {["CSE", "IT", "ECE", "Civil"].map((dept) => (
                  <label key={dept} style={{ marginRight: "10px" }}>
                    <input
                      type="checkbox"
                      name="department"
                      value={dept}
                      checked={formData.department.includes(dept)}
                      onChange={handleChange}
                    />{" "}
                    {dept}
                  </label>
                ))}
              </td>
            </tr>
            <tr>
              <td style={styles.label}>Course :</td>
              <td>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option value="">-- Select Current Course --</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="M.Tech">M.Tech</option>
                  <option value="BCA">BCA</option>
                </select>
              </td>
            </tr>
            <tr>
              <td style={styles.label}>Student photo :</td>
              <td>
                <input
                  type="file"
                  name="photo"
                  onChange={handleChange}
                  style={styles.input}
                />
              </td>
            </tr>
            <tr>
              <td style={styles.label}>City :</td>
              <td>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  style={styles.input}
                />
              </td>
            </tr>
            <tr>
              <td style={styles.label}>Address :</td>
              <td>
                <textarea
                  name="address"
                  rows="3"
                  value={formData.address}
                  onChange={handleChange}
                  style={styles.input}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ textAlign: "center", paddingTop: "15px" }}>
                <button type="submit" style={styles.button}>
                  Register
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: "520px",
    backgroundColor: "#fce8e6",
    padding: "20px 30px",
    margin: "30px auto",
    borderRadius: "8px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse"
  },
  label: {
    fontWeight: "bold",
    padding: "8px 0",
    verticalAlign: "top",
    width: "35%"
  },
  input: {
    width: "100%",
    padding: "6px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    boxSizing: "border-box"
  },
  button: {
    padding: "8px 24px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px"
  },
  backButton: {
    padding: "8px 20px",
    backgroundColor: "#2196F3",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px"
  }
};