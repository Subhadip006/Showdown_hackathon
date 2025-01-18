import React, { useState } from 'react';
import { 
  Building2, 
  FileSpreadsheet, 
  CheckCircle2, 
  XCircle,
  BarChart3,
  Clock,
  Search,
  Plus,
  CreditCard,
  DollarSign,
  Calendar,
  Briefcase,
  Shield,
  X
} from 'lucide-react';

interface Project {
  id: string;
  companyName: string;
  industry: string;
  requestedAmount: number;
  submissionDate: string;
  status: 'pending' | 'approved' | 'rejected';
  description: string;
  risk: 'low' | 'medium' | 'high';
  type: 'loan' | 'letter_of_credit';
  duration?: number;
  collateral?: string;
}

const mockProjects: Project[] = [
  {
    id: '1',
    companyName: 'TechStart Solutions',
    industry: 'Software',
    requestedAmount: 250000,
    submissionDate: '2024-03-15',
    status: 'pending',
    description: 'Cloud-based ERP system development for small businesses',
    risk: 'low',
    type: 'loan',
    duration: 24,
    collateral: 'Software IP and Revenue Stream'
  },
  {
    id: '2',
    companyName: 'Green Energy Co',
    industry: 'Renewable Energy',
    requestedAmount: 500000,
    submissionDate: '2024-03-14',
    status: 'pending',
    description: 'Solar panel installation project for commercial buildings',
    risk: 'medium',
    type: 'letter_of_credit',
    duration: 12,
    collateral: 'Solar Panel Equipment'
  },
  {
    id: '3',
    companyName: 'FoodTech Express',
    industry: 'Food & Beverage',
    requestedAmount: 150000,
    submissionDate: '2024-03-13',
    status: 'approved',
    description: 'Restaurant automation and delivery system',
    risk: 'low',
    type: 'loan',
    duration: 18,
    collateral: 'Business Assets'
  }
];

const industries = [
  'Software',
  'Renewable Energy',
  'Food & Beverage',
  'Manufacturing',
  'Healthcare',
  'E-commerce',
  'Education',
  'Real Estate'
];

function App() {
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);
  const [newProject, setNewProject] = useState<Partial<Project>>({
    type: 'loan',
    risk: 'low',
    status: 'pending'
  });
  const [filterType, setFilterType] = useState<'all' | 'loan' | 'letter_of_credit'>('all');

  const handleStatusChange = (projectId: string, newStatus: 'approved' | 'rejected') => {
    setProjects(projects.map(project => 
      project.id === projectId ? { ...project, status: newStatus } : project
    ));
    setSelectedProject(null);
  };

  const handleSubmitNewProject = () => {
    if (!newProject.companyName || !newProject.requestedAmount) {
      alert('Please fill in all required fields');
      return;
    }

    const project: Project = {
      id: Date.now().toString(),
      companyName: newProject.companyName!,
      industry: newProject.industry || 'Other',
      requestedAmount: Number(newProject.requestedAmount),
      submissionDate: new Date().toISOString().split('T')[0],
      status: 'pending',
      description: newProject.description || '',
      risk: newProject.risk as 'low' | 'medium' | 'high',
      type: newProject.type as 'loan' | 'letter_of_credit',
      duration: Number(newProject.duration) || 12,
      collateral: newProject.collateral
    };

    setProjects([project, ...projects]);
    setShowNewProjectModal(false);
    setNewProject({
      type: 'loan',
      risk: 'low',
      status: 'pending'
    });
  };

  const filteredProjects = projects.filter(project => 
    (project.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.industry.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filterType === 'all' || project.type === filterType)
  );

  const stats = {
    pending: projects.filter(p => p.status === 'pending').length,
    approved: projects.filter(p => p.status === 'approved').length,
    rejected: projects.filter(p => p.status === 'rejected').length,
    totalAmount: projects.reduce((sum, p) => sum + p.requestedAmount, 0),
    totalLoC: projects.filter(p => p.type === 'letter_of_credit').length
  };

  return (
    <div className="min-h-screen bg-transparent">
      {/* Header */}
      <header className="glassmorphic sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <Building2 className="h-8 w-8 text-blue-600" />
            <h1 className="ml-2 text-2xl font-bold text-gray-900">SME Project Review Dashboard</h1>
          </div>
          <button
            onClick={() => setShowNewProjectModal(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="h-5 w-5 mr-2" />
            New Application
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <div className="glassmorphic p-6 rounded-lg">
            <div className="flex items-center">
              <Clock className="h-6 w-6 text-yellow-500" />
              <p className="ml-2 text-sm font-medium text-gray-600">Pending Review</p>
            </div>
            <p className="mt-2 text-3xl font-semibold text-gray-900">{stats.pending}</p>
          </div>
          <div className="glassmorphic p-6 rounded-lg">
            <div className="flex items-center">
              <CheckCircle2 className="h-6 w-6 text-green-500" />
              <p className="ml-2 text-sm font-medium text-gray-600">Approved</p>
            </div>
            <p className="mt-2 text-3xl font-semibold text-gray-900">{stats.approved}</p>
          </div>
          <div className="glassmorphic p-6 rounded-lg">
            <div className="flex items-center">
              <XCircle className="h-6 w-6 text-red-500" />
              <p className="ml-2 text-sm font-medium text-gray-600">Rejected</p>
            </div>
            <p className="mt-2 text-3xl font-semibold text-gray-900">{stats.rejected}</p>
          </div>
          <div className="glassmorphic p-6 rounded-lg">
            <div className="flex items-center">
              <CreditCard className="h-6 w-6 text-purple-500" />
              <p className="ml-2 text-sm font-medium text-gray-600">Letters of Credit</p>
            </div>
            <p className="mt-2 text-3xl font-semibold text-gray-900">{stats.totalLoC}</p>
          </div>
          <div className="glassmorphic p-6 rounded-lg">
            <div className="flex items-center">
              <BarChart3 className="h-6 w-6 text-blue-500" />
              <p className="ml-2 text-sm font-medium text-gray-600">Total Requested</p>
            </div>
            <p className="mt-2 text-3xl font-semibold text-gray-900">
              ${stats.totalAmount.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Search and Project List */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3">
            <div className="glassmorphic rounded-lg">
              <div className="p-4 border-b border-gray-200/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center flex-1">
                    <Search className="h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search projects..."
                      className="ml-2 flex-1 bg-transparent border-none focus:ring-0 text-sm"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setFilterType('all')}
                      className={`px-3 py-1 rounded-full text-sm ${
                        filterType === 'all' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setFilterType('loan')}
                      className={`px-3 py-1 rounded-full text-sm ${
                        filterType === 'loan' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      Loans
                    </button>
                    <button
                      onClick={() => setFilterType('letter_of_credit')}
                      className={`px-3 py-1 rounded-full text-sm ${
                        filterType === 'letter_of_credit' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      LoC
                    </button>
                  </div>
                </div>
              </div>
              <div className="divide-y divide-gray-200/50">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className={`p-4 cursor-pointer hover:bg-white/50 transition-colors ${
                      selectedProject?.id === project.id ? 'bg-blue-50/50' : ''
                    }`}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {project.companyName}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-gray-500">{project.industry}</span>
                          <span className={`px-2 py-0.5 text-xs rounded-full ${
                            project.type === 'loan' 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'bg-purple-100 text-purple-800'
                          }`}>
                            {project.type === 'loan' ? 'Loan' : 'LoC'}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          project.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          project.status === 'approved' ? 'bg-green-100 text-green-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-gray-600">
                        Requested: ${project.requestedAmount.toLocaleString()}
                      </p>
                      <p className="text-xs text-gray-400">
                        Submitted: {new Date(project.submissionDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="w-full md:w-1/3">
            {selectedProject ? (
              <div className="glassmorphic rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Project Details
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Company</label>
                    <p className="mt-1 text-gray-900">{selectedProject.companyName}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Industry</label>
                    <p className="mt-1 text-gray-900">{selectedProject.industry}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Type</label>
                    <p className="mt-1 text-gray-900">
                      {selectedProject.type === 'loan' ? 'Business Loan' : 'Letter of Credit'}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Description</label>
                    <p className="mt-1 text-gray-900">{selectedProject.description}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Amount Requested</label>
                    <p className="mt-1 text-gray-900">${selectedProject.requestedAmount.toLocaleString()}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Duration</label>
                    <p className="mt-1 text-gray-900">{selectedProject.duration} months</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Collateral</label>
                    <p className="mt-1 text-gray-900">{selectedProject.collateral}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Risk Assessment</label>
                    <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                      selectedProject.risk === 'low' ? 'bg-green-100 text-green-800' :
                      selectedProject.risk === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {selectedProject.risk.toUpperCase()}
                    </span>
                  </div>
                  {selectedProject.status === 'pending' && (
                    <div className="flex gap-2 mt-6">
                      <button
                        onClick={() => handleStatusChange(selectedProject.id, 'approved')}
                        className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleStatusChange(selectedProject.id, 'rejected')}
                        className="flex-1 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="glassmorphic rounded-lg p-6 text-center text-gray-500">
                <FileSpreadsheet className="h-12 w-12 mx-auto text-gray-400" />
                <p className="mt-2">Select a project to view details</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* New Project Modal */}
      {showNewProjectModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="glassmorphic rounded-lg p-6 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900">New Application</h2>
              <button
                onClick={() => setShowNewProjectModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Application Type</label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={newProject.type}
                  onChange={(e) => setNewProject({...newProject, type: e.target.value as 'loan' | 'letter_of_credit'})}
                >
                  <option value="loan">Business Loan</option>
                  <option value="letter_of_credit">Letter of Credit</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Company Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={newProject.companyName || ''}
                  onChange={(e) => setNewProject({...newProject, companyName: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Industry</label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={newProject.industry || ''}
                  onChange={(e) => setNewProject({...newProject, industry: e.target.value})}
                >
                  <option value="">Select Industry</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Amount Requested</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    className="pl-7 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={newProject.requestedAmount || ''}
                    onChange={(e) => setNewProject({...newProject, requestedAmount: Number(e.target.value)})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Duration (months)</label>
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={newProject.duration || ''}
                  onChange={(e) => setNewProject({...newProject, duration: Number(e.target.value)})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  rows={3}
                  value={newProject.description || ''}
                  onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Collateral</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={newProject.collateral || ''}
                  onChange={(e) => setNewProject({...newProject, collateral: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Risk Assessment</label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={newProject.risk}
                  onChange={(e) => setNewProject({...newProject, risk: e.target.value as 'low' | 'medium' | 'high'})}
                >
                  <option value="low">Low Risk</option>
                  <option value="medium">Medium Risk</option>
                  <option value="high">High Risk</option>
                </select>
              </div>
              <div className="mt-6">
                <button
                  onClick={handleSubmitNewProject}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Submit Application
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;