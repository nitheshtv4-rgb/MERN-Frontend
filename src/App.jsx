import React, { useState } from "react";
import {
  AppBar, Toolbar, Typography, Button, Container, Box, Grid, Card,
  CardContent, TextField, MenuItem, Paper, Table, TableBody, TableCell,
  TableHead, TableRow, IconButton, Drawer, List, ListItem, ListItemButton,
  ListItemText, Stack, Alert
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SchoolIcon from "@mui/icons-material/School";

const navItems = ["Home", "About", "Facilities", "Courses", "Login", "Results", "Calendar", "Payment", "Events", "Placement"];
const facilities = [
  ["Library", "A peaceful space with books, journals and digital learning resources."],
  ["Laboratories", "Practical learning facilities for science subjects."],
  ["Computer Lab", "Computer systems and internet access for digital learning."],
  ["Auditorium", "A venue for seminars, meetings and college celebrations."],
  ["Placement Cell", "Career guidance and preparation for employment."],
  ["Campus", "A welcoming campus that supports student activities."]
];
const courses = [
  ["Bachelor of Arts (BA)", "Develop communication, critical thinking and humanities knowledge."],
  ["Bachelor of Science (BSc)", "Build scientific knowledge, analytical skills and practical understanding."]
];
const events = ["Annual Day", "Sports Day", "Technical Workshop", "Cultural Festival", "Career Seminar", "Science Exhibition"];
const placement = ["Career Guidance", "Communication Skills", "Interview Training", "Resume Preparation"];

function SectionTitle({ children }) {
  return <Typography className="heading" variant="h4">{children}</Typography>;
}

function InfoCards({ items }) {
  return (
    <Grid container spacing={3}>
      {items.map(([title, description]) => (
        <Grid item xs={12} sm={6} md={4} key={title}>
          <Card className="info-card">
            <CardContent>
              <SchoolIcon color="primary" sx={{ fontSize: 38, mb: 1 }} />
              <Typography variant="h6" fontWeight="bold" gutterBottom>{title}</Typography>
              <Typography color="text.secondary">{description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [result, setResult] = useState("");
  const [payment, setPayment] = useState("");
  const [paymentData, setPaymentData] = useState({ name: "", register: "", fee: "Tuition Fee", amount: "" });

  const goTo = (name) => {
    document.getElementById(name.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navButton = (name) => (
    <Button key={name} color="inherit" onClick={() => goTo(name)}>{name}</Button>
  );

  return (
    <>
      <AppBar position="sticky" className="navbar">
        <Toolbar className="toolbar">
          <Stack direction="row" alignItems="center" spacing={1} sx={{ flexGrow: 1 }}>
            <SchoolIcon />
            <Typography variant="h6" fontWeight="bold">HARI COLLEGE</Typography>
          </Stack>
          <Box className="desktop-menu">{navItems.map(navButton)}</Box>
          <IconButton color="inherit" className="mobile-menu" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <List sx={{ width: 250 }}>
          {navItems.map((name) => (
            <ListItem key={name} disablePadding>
              <ListItemButton onClick={() => goTo(name)}><ListItemText primary={name} /></ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box id="home" className="hero">
        <Container>
          <Typography variant="h2" fontWeight="bold" sx={{ maxWidth: 750, fontSize: { xs: 36, md: 54 } }}>
            HARI ARTS AND SCIENCE COLLEGE
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, mb: 3 }}>Knowledge • Excellence • Success</Typography>
          <Button variant="contained" color="secondary" size="large" onClick={() => goTo("courses")}>Explore Courses</Button>
        </Container>
      </Box>

      <Box id="about" className="section">
        <Container>
          <SectionTitle>About Our College</SectionTitle>
          <Typography className="about-text">
            Hari Arts and Science College is committed to providing quality education in a supportive learning environment.
            We encourage students to develop knowledge, practical skills, confidence and responsibility for a bright future.
          </Typography>
          <Grid container spacing={2} sx={{ mt: 3 }}>
            {[["2016", "Established"], ["40+", "Faculty Members"], ["6 Acres", "Campus"], ["BA & BSc", "Degree Streams"]].map(([number, label]) => (
              <Grid item xs={6} md={3} key={label}>
                <Paper className="stat-box" elevation={2}>
                  <Typography variant="h4" color="primary" fontWeight="bold">{number}</Typography>
                  <Typography>{label}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box id="facilities" className="section light-section">
        <Container>
          <SectionTitle>Our Facilities</SectionTitle>
          <InfoCards items={facilities} />
        </Container>
      </Box>

      <Box id="courses" className="section">
        <Container>
          <SectionTitle>Courses Offered</SectionTitle>
          <InfoCards items={courses} />
        </Container>
      </Box>

      <Box id="login" className="section light-section">
        <Container maxWidth="sm">
          <SectionTitle>Student Login</SectionTitle>
          <Paper className="form-box">
            <Stack spacing={2}>
              <TextField label="Username or Email" fullWidth />
              <TextField label="Password" type="password" fullWidth />
              <Button variant="contained" onClick={() => alert("Demo login only. Connect a secure backend to enable student accounts.")}>Login</Button>
              <Typography variant="caption" color="text.secondary">Forgot password? Contact the college office.</Typography>
            </Stack>
          </Paper>
        </Container>
      </Box>

      <Box id="results" className="section">
        <Container maxWidth="sm">
          <SectionTitle>Exam Results</SectionTitle>
          <Paper className="form-box">
            <Stack spacing={2}>
              <TextField label="Register Number" fullWidth />
              <TextField select label="Semester" defaultValue="1" fullWidth>
                {[1, 2, 3, 4, 5, 6].map((n) => <MenuItem key={n} value={String(n)}>Semester {n}</MenuItem>)}
              </TextField>
              <Button variant="contained" onClick={() => setResult("Demo only: connect your college result database to display marks.")}>Check Result</Button>
              {result && <Alert severity="info">{result}</Alert>}
            </Stack>
          </Paper>
        </Container>
      </Box>

      <Box id="calendar" className="section light-section">
        <Container>
          <SectionTitle>Academic Calendar</SectionTitle>
          <Paper sx={{ overflowX: "auto" }}>
            <Table>
              <TableHead><TableRow><TableCell><b>Activity</b></TableCell><TableCell><b>Date</b></TableCell></TableRow></TableHead>
              <TableBody>
                {["College Reopening", "Internal Examination", "Semester Examination", "Annual Day"].map((item) => (
                  <TableRow key={item}><TableCell>{item}</TableCell><TableCell>To be announced</TableCell></TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Container>
      </Box>

      <Box id="payment" className="section">
        <Container maxWidth="sm">
          <SectionTitle>Online Fee Payment</SectionTitle>
          <Paper className="form-box">
            <Stack spacing={2}>
              <TextField label="Student Name" value={paymentData.name} onChange={(e) => setPaymentData({ ...paymentData, name: e.target.value })} />
              <TextField label="Register Number" value={paymentData.register} onChange={(e) => setPaymentData({ ...paymentData, register: e.target.value })} />
              <TextField select label="Fee Type" value={paymentData.fee} onChange={(e) => setPaymentData({ ...paymentData, fee: e.target.value })}>
                {["Tuition Fee", "Exam Fee", "Library Fee", "Other Fee"].map((fee) => <MenuItem key={fee} value={fee}>{fee}</MenuItem>)}
              </TextField>
              <TextField label="Amount (₹)" type="number" value={paymentData.amount} onChange={(e) => setPaymentData({ ...paymentData, amount: e.target.value })} />
              <Button variant="contained" onClick={() => setPayment("Demo only — no money has been transferred. A secure payment gateway is required.")}>Continue</Button>
              {payment && <Alert severity="warning">{payment}</Alert>}
            </Stack>
          </Paper>
        </Container>
      </Box>

      <Box id="events" className="section light-section">
        <Container>
          <SectionTitle>College Events</SectionTitle>
          <Grid container spacing={2}>
            {events.map((event) => <Grid item xs={12} sm={6} md={4} key={event}><Paper className="event-card">{event}</Paper></Grid>)}
          </Grid>
        </Container>
      </Box>

      <Box id="placement" className="section">
        <Container>
          <Paper className="placement-banner" elevation={0}>
            <Typography variant="h4" fontWeight="bold">Training and Placement</Typography>
            <Typography sx={{ mt: 1 }}>Helping students prepare for career opportunities.</Typography>
          </Paper>
          <Grid container spacing={2}>
            {placement.map((item) => <Grid item xs={12} sm={6} md={3} key={item}><Paper className="event-card">{item}</Paper></Grid>)}
          </Grid>
        </Container>
      </Box>

      <Box component="footer" className="footer">
        <Typography variant="h6" fontWeight="bold">HARI ARTS AND SCIENCE COLLEGE</Typography>
        <Typography>Education for a better tomorrow.</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>© {new Date().getFullYear()} Hari Arts and Science College. All rights reserved.</Typography>
      </Box>
    </>
  );
}