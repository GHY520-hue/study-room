import { AppProvider, useApp } from './context/AppContext';
import Home from './pages/Home';
import Settings from './pages/Settings';
import StudyRoom from './pages/StudyRoom';

function AppContent() {
  const { currentPage } = useApp();

  switch (currentPage) {
    case 'settings':
      return <Settings />;
    case 'study':
      return <StudyRoom />;
    default:
      return <Home />;
  }
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;