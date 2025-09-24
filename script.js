function triggerAlert() {
    alert("🚨 Emergency Alert Triggered!");
}

function startDrill() {
    alert("📢 Virtual Drill Started!");
}

function generateReport() {
    alert("📊 Report Generated!");
}

function viewAnalytics() {
    alert("📈 Viewing Analytics!");
}
function dashboard() {
    document.location.href = ("index.html");
}
function learningModule() {
    document.location.href = ("learningModule.html")
}
function virtualDrills() {
    document.location.href = ("virtualDrill.html")
}
function chatBot() {
    document.location.href = ("chatBot.html");
}
function alerts() {
    document.location.href = ("alert.html");
}
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});
const tabs1 = document.querySelectorAll('.tabs div');
tabs1.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs1.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

function currentA() {
    document.querySelector(".createAlert").innerHTML = `<div class="alert-card">
                    <h3>🌧 Heavy Rainfall Warning
                        <span class="tag high">high priority</span>
                        <span class="tag active">active</span>
                    </h3>
                    <p>Heavy rainfall expected in the region from 2:00 PM to 8:00 PM today. Consider postponing outdoor
                        activities and review flood preparedness protocols.</p>
                    <div class="alert-meta">
                        <span>⏰ 2 hours ago</span>
                        <span>📍 Mumbai Region</span>
                        <span>🔔 Weather Alert</span>
                    </div>
                    <div class="buttons">
                        <button class="btn edit">✏ Edit</button>
                        <button class="btn resolve">✔ Resolve</button>
                    </div>
                </div>

                <div class="alert-card">
                    <h3>🔥 Fire Drill Scheduled
                        <span class="tag medium">medium priority</span>
                        <span class="tag active">active</span>
                    </h3>
                    <p>Mandatory fire evacuation drill scheduled for tomorrow at 10:30 AM. All students and staff must
                        participate.</p>
                    <div class="alert-meta">
                        <span>⏰ 5 hours ago</span>
                        <span>📍 Main Campus</span>
                        <span>🔔 System Alert</span>
                    </div>
                    <div class="buttons">
                        <button class="btn edit">✏ Edit</button>
                        <button class="btn resolve">✔ Resolve</button>
                    </div>
                </div>

                <div class="alert-card">
                    <h3>🌡 Heat Wave Advisory
                        <span class="tag medium">medium priority</span>
                        <span class="tag active">active</span>
                    </h3>
                    <p>Extreme heat conditions expected. Ensure adequate hydration and limit outdoor exposure during
                        peak
                        hours
                        (11 AM – 4 PM).</p>
                    <div class="alert-meta">
                        <span>⏰ 1 day ago</span>
                        <span>📍 All Locations</span>
                        <span>🔔 Health Alert</span>
                    </div>
                    <div class="buttons">
                        <button class="btn edit">✏ Edit</button>
                        <button class="btn resolve">✔ Resolve</button>
                    </div>
                </div>`
}
function reateA() {
    document.querySelector(".createAlert").innerHTML = `<div class="container3">
    <h2>Create New Alert</h2>
    <form class="alert-form">
      <div class="form-group">
        <label for="alertTitle">Alert Title</label>
        <input type="text" id="alertTitle" placeholder="Enter alert title..." required>
      </div>

      <div class="form-group">
        <label for="priorityLevel">Priority Level</label>
        <select id="priorityLevel">
          <option>Low Priority</option>
          <option selected>Medium Priority</option>
          <option>High Priority</option>
        </select>
      </div>

      <div class="form-group full-width">
        <label for="alertMessage">Alert Message</label>
        <textarea id="alertMessage" placeholder="Enter detailed alert message..." required></textarea>
      </div>

      <div class="form-group">
        <label for="alertType">Alert Type</label>
        <select id="alertType">
          <option selected>Weather Alert</option>
          <option>System Alert</option>
          <option>Security Alert</option>
        </select>
      </div>

      <div class="form-group">
        <label for="location">Location</label>
        <select id="location">
          <option selected>All Locations</option>
          <option>Head Office</option>
          <option>Remote Branch</option>
        </select>
      </div>

      <div class="form-group">
        <label for="audience">Target Audience</label>
        <select id="audience">
          <option selected>All Users</option>
          <option>Admins</option>
          <option>Employees</option>
        </select>
      </div>

      <div class="buttons">
        <button type="button3" class="draft-btn">Save as Draft</button>
        <button type="submit" class="send-btn">Send Alert</button>
      </div>
    </form>
  </div>
`;
}
function emergencyC() {
    document.querySelector(".createAlert").innerHTML = `<div class="container4">
        <h1>Emergency Contacts</h1>
        <div class="cards4">

            <!-- Emergency Services Card -->
            <div class="card4">
                <h2>Emergency Services</h2>
                <p><strong>Category:</strong> Emergency</p>
                <p><strong>Number:</strong> 108</p>
                <div class="buttons4">
                    <button onclick="callNumber('108')">Call</button>
                    <button onclick="messageNumber('108')">Message</button>
                </div>
            </div>

            <!-- Fire Department Card -->
            <div class="card4">
                <h2>Fire Department</h2>
                <p><strong>Category:</strong> Fire</p>
                <p><strong>Number:</strong> 101</p>
                <div class="buttons4">
                    <button onclick="callNumber('101')">Call</button>
                    <button onclick="messageNumber('101')">Message</button>
                </div>
            </div>

            <!-- Police Card -->
            <div class="card4">
                <h2>Police</h2>
                <p><strong>Category:</strong> Security</p>
                <p><strong>Number:</strong> 100</p>
                <div class="buttons4">
                    <button onclick="callNumber('100')">Call</button>
                    <button onclick="messageNumber('100')">Message</button>
                </div>
            </div>

            <!-- School Principal Card -->
            <div class="card4">
                <h2>School Principal</h2>
                <p><strong>Category:</strong> Administration</p>
                <p><strong>Number:</strong> +91 98765 43210</p>
                <p><strong>Time:</strong> 9 A.M - 6 P.M</p>
                <div class="buttons4">
                    <button onclick="callNumber('+919876543210')">Call</button>
                    <button onclick="messageNumber('+919876543210')">Message</button>
                </div>
            </div>

            <!-- Safety Coordinator Card -->
            <div class="card4">
                <h2>Safety Coordinator</h2>
                <p><strong>Category:</strong> Safety</p>
                <p><strong>Number:</strong> +91 98765 43211</p>
                <p><strong>Time:</strong> 24/7</p>
                <div class="buttons4">
                    <button onclick="callNumber('+919876543211')">Call</button>
                    <button onclick="messageNumber('+919876543211')">Message</button>
                </div>
            </div>

            <!-- Medical Officer Card -->
            <div class="card4">
                <h2>Medical Officer</h2>
                <p><strong>Category:</strong> Medical</p>
                <p><strong>Number:</strong> +91 98765 43212</p>
                <p><strong>Time:</strong> 9 A.M - 8 P.M</p>
                <div class="buttons4">
                    <button onclick="callNumber('+919876543212')">Call</button>
                    <button onclick="messageNumber('+919876543212')">Message</button>
                </div>
            </div>

        </div>
    </div>`
}
function alertH() {
    document.querySelector(".createAlert").innerHTML = `<div class="container5">
        <h1>
            Alert History
            <button class="export-btn" onclick="exportHistory()">Export History</button>
        </h1>

        <!-- Alert Card 1 -->
        <div class="alert-card5">
            <div class="alert-header5">
                <div class="alert-title5">
                    <span>&#10003;</span> Earthquake Drill Completed
                    <span class="badge low">low priority</span>
                    <span class="badge resolved">resolved</span>
                </div>
                <div class="buttons5">
                    <button class="view-btn" onclick="viewDetails('Earthquake Drill Completed')">View Details</button>
                    <button class="delete-btn" onclick="deleteAlert(this)">Delete</button>
                </div>
            </div>
            <div class="alert-description">
                Earthquake evacuation drill completed successfully. Response time: 3.2 minutes. Participation rate: 94%.
            </div>
            <div class="alert-meta5">
                &#128340; 3 days ago &nbsp; | &nbsp; Science Block &nbsp; | &nbsp; Emergency Alert
            </div>
        </div>

        <!-- Alert Card 2 -->
        <div class="alert-card5">
            <div class="alert-header5">
                <div class="alert-title5">
                    <span>&#10003;</span> Cyclone Warning Lifted
                    <span class="badge medium">medium priority</span>
                    <span class="badge resolved">resolved</span>
                </div>
                <div class="buttons5">
                    <button class="view-btn" onclick="viewDetails('Cyclone Warning Lifted')">View Details</button>
                    <button class="delete-btn" onclick="deleteAlert(this)">Delete</button>
                </div>
            </div>
            <div class="alert-description">
                Cyclone threat has passed. Normal operations can resume. Continue monitoring weather updates.
            </div>
            <div class="alert-meta5">
                &#128340; 1 week ago &nbsp; | &nbsp; Coastal Areas &nbsp; | &nbsp; Weather Alert
            </div>
        </div>

    </div>`
}
function report() {
    document.location.href = ("report.html")
}
document.querySelector('.alert-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('alertTitle').value.trim();
    const message = document.getElementById('alertMessage').value.trim();

    if (title && message) {
        alert("✅ Alert sent successfully!");
    } else {
        alert("⚠️ Please fill in the required fields.");
    }
});

document.querySelector('.draft-btn').addEventListener('click', function () {
    alert("💾 Draft saved.");
});
function overview() {
    document.querySelector(".createChangeDiv").innerHTML = `<div class="card">
                    <h4>Preparedness Breakdown</h4>
                    <div class="bar-list">
                        <div class="bar-item"><span>Emergency Procedures</span>
                            <div class="bar"><span style="width:92%"></span></div><span>92%</span>
                        </div>
                        <div class="bar-item"><span>Equipment Readiness</span>
                            <div class="bar"><span style="width:88%"></span></div><span>88%</span>
                        </div>
                        <div class="bar-item"><span>Staff Training</span>
                            <div class="bar"><span style="width:85%"></span></div><span>85%</span>
                        </div>
                        <div class="bar-item"><span>Communication Systems</span>
                            <div class="bar"><span style="width:90%"></span></div><span>90%</span>
                        </div>
                        <div class="bar-item"><span>Student Awareness</span>
                            <div class="bar"><span style="width:87%"></span></div><span>87%</span>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <h4>Recent Activity Summary</h4>
                    <div class="activity">
                        <div class="a-green">✅ Fire Drill Completed — Score: 94% | 2 hours ago</div>
                        <div class="a-blue">📘 Monthly Report Generated — November 2024 | 1 day ago</div>
                        <div class="a-yellow">⚠️ Equipment Maintenance Due — Fire extinguishers | 3 days ago</div>
                        <div class="a-purple">👥 Training Session Completed — 45 staff members | 5 days ago</div>
                    </div>
                </div>

                <div class="summary">
                    <div class="card"><small>Total Students</small>
                        <h3>2,847</h3><small class="positive">+12% this semester</small>
                    </div>
                    <div class="card"><small>Staff Members</small>
                        <h3>156</h3><small>98% trained</small>
                    </div>
                    <div class="card"><small>Drills This Quarter</small>
                        <h3>24</h3><small class="positive">Target: 20</small>
                    </div>
                </div>`
}
function drillperformance() {
    document.querySelector(".createChangeDiv").innerHTML = `<div class="container6">
        <h1 class="h1">Drill Performance Analysis</h1>

        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Drill Type</th>
                        <th>Conducted</th>
                        <th>Avg Score</th>
                        <th>Avg Time</th>
                        <th>Participation</th>
                        <th>Trend</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Fire Evacuation</td>
                        <td>4</td>
                        <td class="green">92%</td>
                        <td>3.1 min</td>
                        <td>96%</td>
                        <td class="trend">&#9650;</td>
                    </tr>
                    <tr>
                        <td>Earthquake Drill</td>
                        <td>4</td>
                        <td class="orange">89%</td>
                        <td>2.8 min</td>
                        <td>94%</td>
                        <td class="trend">&#9650;</td>
                    </tr>
                    <tr>
                        <td>Lockdown Drill</td>
                        <td>4</td>
                        <td class="green">91%</td>
                        <td>1.5 min</td>
                        <td>98%</td>
                        <td class="trend">&#9650;</td>
                    </tr>
                    <tr>
                        <td>Medical Emergency</td>
                        <td>3</td>
                        <td class="green">90%</td>
                        <td>4.2 min</td>
                        <td>85%</td>
                        <td class="trend">&#9650;</td>
                    </tr>
                    <tr>
                        <td>Flood Response</td>
                        <td>3</td>
                        <td class="orange">85%</td>
                        <td>5.1 min</td>
                        <td>92%</td>
                        <td class="trend">&#9660;</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="cards6">
            <div class="card6">
                <h3>Top Performing Areas</h3>
                <div class="card-item">Lockdown Procedures <span class="green">95%</span></div>
                <div class="card-item">Fire Evacuation <span class="green">92%</span></div>
                <div class="card-item">Medical Response <span class="green">93%</span></div>
            </div>
            <div class="card6">
                <h3>Areas for Improvement</h3>
                <div class="card-item">Flood Response <span class="yellow">85%</span></div>
                <div class="card-item">Medical/Emergency Participation <span class="yellow">85%</span></div>
                <div class="card-item">Response Time Consistency <span class="neutral">Needs Focus</span></div>
            </div>
        </div>
    </div>`
}
function department() {
    document.querySelector(".createChangeDiv").innerHTML = `<div class="container7">
        <h1 class="h17">Department-wise Performance</h1>

        <div class="department">
            <div class="dept-header">
                <span class="dept-name">Administration</span>
                <span class="dept-score">95%</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: 95%;"></div>
            </div>
            <div class="dept-meta">
                45 students, 12 staff &nbsp; <button class="view-details" onclick="viewDetails('Administration')">View Details</button>
            </div>
        </div>

        <div class="department">
            <div class="dept-header">
                <span class="dept-name">Science Block</span>
                <span class="dept-score">89%</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: 89%;"></div>
            </div>
            <div class="dept-meta">
                150 students, 28 staff &nbsp; <button class="view-details" onclick="viewDetails('Science Block')">View Details</button>
            </div>
        </div>

        <div class="department">
            <div class="dept-header">
                <span class="dept-name">Arts & Humanities</span>
                <span class="dept-score">92%</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: 92%;"></div>
            </div>
            <div class="dept-meta">
                120 students, 32 staff &nbsp; <button class="view-details" onclick="viewDetails('Arts & Humanities')">View Details</button>
            </div>
        </div>

        <div class="department">
            <div class="dept-header">
                <span class="dept-name">Engineering</span>
                <span class="dept-score">87%</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: 87%;"></div>
            </div>
            <div class="dept-meta">
                80 students, 25 staff &nbsp; <button class="view-details" onclick="viewDetails('Engineering')">View Details</button>
            </div>
        </div>

        <div class="department">
            <div class="dept-header">
                <span class="dept-name">Sports Complex</span>
                <span class="dept-score">94%</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: 94%;"></div>
            </div>
            <div class="dept-meta">
                220 students, 35 staff &nbsp; <button class="view-details" onclick="viewDetails('Sports Complex')">View Details</button>
            </div>
        </div>

        <div class="department">
            <div class="dept-header">
                <span class="dept-name">Library</span>
                <span class="dept-score">91%</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: 91%;"></div>
            </div>
            <div class="dept-meta">
                60 students, 15 staff &nbsp; <button class="view-details" onclick="viewDetails('Library')">View Details</button>
            </div>
        </div>

    </div>`
}
function trend() {
    document.querySelector(".createChangeDiv").innerHTML = `<h2 class="h28">📈 Performance Trends</h2>

  <table class="table8">
    <thead>
      <tr class="tr8">
        <th class="th8">Month</th>
        <th class="th8">Drills Conducted</th>
        <th class="th8">Average Score</th>
        <th class="th8">Participation Rate</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="td8">Aug 2024</td>
        <td class="td8">6</td>
        <td class="td8">82%</td>
        <td class="td8">89%</td>
      </tr>
      <tr>
        <td class="td8">Sep 2024</td>
        <td class="td8">8</td>
        <td class="td8">85%</td>
        <td class="td8">91%</td>
      </tr>
      <tr>
        <td class="td8">Oct 2024</td>
        <td class="td8">7</td>
        <td class="td8">87%</td>
        <td class="td8">93%</td>
      </tr>
      <tr>
        <td class="td8">Nov 2024</td>
        <td class="td8">9</td>
        <td class="td8">89%</td>
        <td class="td8">94%</td>
      </tr>
      <tr>
        <td class="td8">Dec 2024</td>
        <td class="td8">8</td>
        <td class="td8">87%</td>
        <td class="td8">94%</td>
      </tr>
    </tbody>
  </table>

  <div class="cards8">
    <div class="card8">
      <h3>+5%</h3>
      <p>Score Improvement<br>Over Last 3 Months</p>
    </div>
    <div class="card8">
      <h3>+5%</h3>
      <p>Participation Growth<br>Steady Increase</p>
    </div>
    <div class="card8">
      <h3>33%</h3>
      <p>More Drills<br>Than Last Quarter</p>
    </div>
  </div>`
}
function playSOS() {
    const sound = document.getElementById("sosSound");
    sound.currentTime = 0; // restart sound if clicked again
    sound.play();
}
