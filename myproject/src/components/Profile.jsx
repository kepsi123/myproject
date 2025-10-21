import React from "react";
import "./Profile.css";

function Profile() {
  const teamMembers = [
    {
      name: "Jersin Reshika",
      bio: "A creative and dedicated team member who brings passion and positivity to every project.",
    },
    {
      name: "Kepsiyal",
      bio: "Always focused, inspired, and ready to explore new ideas and possibilities together.",
    },
  ];

  return (
    <div className="team-container">
      {/* Hero Section */}
      <section className="team-hero">
        <h1>Our Amazing Team 💫</h1>
        <p>We’re not just a team — we’re a family working together to create something wonderful.</p>
      </section>

      {/* Team Members */}
      <section className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <h3>{member.name}</h3>
            <p className="team-bio">{member.bio}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="team-footer">
        <p>📞 Contact Us: travelblog@gmail.com | 📍 Chennai, India</p>
      </footer>
    </div>
  );
}

export default Profile;
