import './App.css';
import { Routes, Route } from 'react-router-dom'; // Removed unused 'Form' import
import Navigation from './Navigation';
import Forms from './Pages/Form';
import Project from './Pages/Projects';
import Dashboards from './Pages/Dashboard';
import NoticeBoard from './Pages/Noticeboard';
import YourProfile from './Pages/Profile';
import Signout from './Pages/Signout';
import Tabs from './Pages/Setting';
import Notification from './Pages/Notification';

// A simple NoMatch component for unmatched routes
const NoMatch = () => {
  return <h2>Page Not Found</h2>;
};

function App() {
  return (
    <>
      <Navigation />
      <Routes>
          <Route path="dashboard" element={<Dashboards />} />
          <Route path="form" element={<Forms />} />
          <Route path="projects" element={<Project />} />
          <Route path="noticeboard" element={<NoticeBoard />} />
          <Route path="profile" element={<YourProfile />} />
          <Route path="settings" element={<Tabs />} />
          <Route path="signout" element={<Signout />} />
          <Route path="notification" element={<Notification />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      
        
    </>
  );
}

export default App;
