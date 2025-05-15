import "./App.css";
import teamLogo from '../public/images/team.png'

function App() {
  return (
    <>
      <body>
        <div className="container">
          <img className="pic" src={teamLogo} alt="team" />

          <p style={{ fontWeight: "bold" }}>DETAILS OF CANDIDATE</p>

          <form id="candidateForm">
            <label htmlFor="name">👤 Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter full name"
              required
            />

            <label htmlFor="role">💼 ROLE:</label>
            <input
              type="text"
              id="role"
              name="role"
              placeholder="Enter job role"
              required
            />

            <label htmlFor="salary">💰 Salary (Annual):</label>
            <input
              type="number"
              id="salary"
              name="salary"
              placeholder="Enter salary amount"
              required
            />

            <label htmlFor="joining_date">📅 Joining Date:</label>
            <input type="date" id="joining_date" name="joining_date" required />

            <label htmlFor="email">📧 Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
              required
            />

            <label htmlFor="phone">📞 Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter contact number"
              required
            />

            <button type="submit">🚀 Submit</button>
          </form>
        </div>
      </body>
    </>
  );
}

export default App;
