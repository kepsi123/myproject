import React from "react";
import "./Profile.css";
import Navbar from "./Navbar";
import UserNav from "./UserNav";

function Profile() {
  const teamMembers = [
    {
      name: "Jersin Reshika",
      password: "Reshi123",
      image: "jersin.jpg",
      bio: "A creative and dedicated team member who brings passion and positivity to every project.",
    },
    {
      name: "Kepsiyal",
      password: "Kepsi123",
      image: "kepsi.jpg",
      bio: "Always focused, inspired, and ready to explore new ideas and possibilities together.",
    },
  ];

  return (
    <div className="Profile-Layout">
      <UserNav />
      <div className="team-container">
        {/* Hero Section */}
        <section className="team-hero">
          <h1>Our Amazing Team 💫</h1>
          <p>
            We’re not just a team — we’re a family working together to create
            something wonderful.
          </p>
        </section>

        {/* Team Members */}
        <section className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-photo"
                />
              </div>
              <p className="team-info"><strong>Name:</strong> {member.name}</p>
              <p className="team-info"><strong>Password:</strong> {member.password}</p>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="team-footer">
          <p>📞 Contact Us: travelblog@gmail.com | 📍 Chennai, India</p>
        </footer>
      </div>
    </div>
  );
}

export default Profile;
