const extraTexts = {
  climateGovernance: {
    title: "Climate Governance",
    content:
      "Develop and implement effective climate governance programs. These programs are designed to ensure that your organization integrates environmental concerns into decision-making processes, aligns with international climate frameworks, and meets local and global climate regulations. By setting clear policies and measurable targets, we help organizations track their progress toward reducing emissions and promote transparency in reporting. Effective climate governance empowers businesses to lead in sustainability efforts, while ensuring they stay ahead of regulatory requirements and demonstrate accountability to stakeholders.",
  },
  emissionReduction: {
    title: "Emission Reduction",
    content:
      "Drive initiatives to lower greenhouse gas emissions. This includes identifying key areas of emissions across operations, implementing energy-efficient technologies, and transitioning to renewable energy sources. By developing comprehensive strategies for emissions reduction, we help businesses not only comply with regulations but also actively contribute to global climate targets. Our approach integrates innovative solutions such as carbon capture technologies, waste management optimization, and sustainable transportation to ensure measurable reductions in carbon output, ultimately helping you reduce your environmental impact and improve operational efficiency.",
  },
  sustainabilityAdvocacy: {
    title: "Sustainability Advocacy",
    content:
      "Promote climate-friendly practices in organizations and communities. Through advocacy programs, we empower individuals and businesses to adopt sustainable behaviors, from reducing energy consumption to increasing waste recycling. By educating employees and local communities, we inspire collective action to fight climate change. Our advocacy initiatives also involve the development of sustainability campaigns and partnerships that encourage the widespread adoption of green practices. Together, we create a culture of sustainability that extends beyond the workplace and fosters environmental consciousness in everyday life.",
  },
  individualEmpowerment: {
    title: "Individual Empowerment",
    content:
      "Equip individuals with tools to understand and reduce their carbon footprint. This involves offering personalized solutions, such as carbon footprint calculators, guides on sustainable living, and tips for reducing personal waste. We help individuals understand the impact of their everyday choices on the environment and empower them to make informed, sustainable decisions. By fostering individual accountability, we create a community of eco-conscious individuals who are actively involved in making a meaningful impact in the fight against climate change.",
  },
  moreAbout: {
    title: "About Carbon Curb Innovations",
    content: `
    <p>Our work focuses on:</p>
    <ul>
      <li>Limiting global warming to below 2°C.</li>
      <li>Reducing greenhouse gas emissions and promoting net-zero targets.</li>
      <li>Advancing renewable energy, electrified transportation, and carbon capture technologies.</li>
      <li>Protecting natural carbon sinks and investing in climate-resilient infrastructure.</li>
      <li>Supporting adaptation efforts for vulnerable communities.</li>
    </ul>
    <p>Our mobile app, Carbon Curb, empowers individuals to:</p>
    <ul>
      <li>Understand climate change and its impacts.</li>
      <li>Calculate and reduce their carbon footprint through practical, daily actions.</li>
    </ul>
    <p>Together, we’re building a greener, more sustainable future for all.</p>
  `,
  },
};

// Get modal elements
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close-btn");

// Get all "more" buttons
const moreButtons = document.querySelectorAll(".more-btn");

const body = document.body;
const html = document.documentElement;

// Open the modal and show the corresponding additional text
moreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const divId = button.getAttribute("data-id");
    const additionalTitle = extraTexts[divId].title; // Get corresponding text from the object
    const additionalText = extraTexts[divId].content; // Get corresponding text from the object
    modalTitle.innerHTML = additionalTitle;
    modalText.innerHTML = additionalText;
    modal.style.display = "flex";
    body.style.overflow = "hidden";
    html.style.overflow = "hidden";
  });
});

// Close the modal when clicking the close button
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  body.style.overflow = "";
  html.style.overflow = "";
});

// Close the modal if clicked outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    body.style.overflow = "";
    html.style.overflow = "";
  }
});
