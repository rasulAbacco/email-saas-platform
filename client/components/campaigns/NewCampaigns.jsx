import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Upload, 
  FileText, 
  Users, 
  Settings, 
  CheckCircle, 
  AlertCircle,
  Info,
  Calendar,
  Clock,
  Mail,
  Target,
  Zap,
  Save,
  Play,
  Eye,
  X,
  Plus
} from 'lucide-react';

const NewCampaigns = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [campaignData, setCampaignData] = useState({
    name: '',
    description: '',
    emailSource: 'upload',
    uploadedFile: null,
    targetAudience: 'all',
    verificationLevel: 'standard',
    scheduleType: 'immediate',
    scheduledDate: '',
    scheduledTime: '',
    notifications: true,
    autoResend: false
  });

  const [dragActive, setDragActive] = useState(false);

  const steps = [
    { id: 1, name: 'Basic Info', icon: Info },
    { id: 2, name: 'Email Source', icon: Upload },
    { id: 3, name: 'Configuration', icon: Settings },
    { id: 4, name: 'Schedule', icon: Calendar },
    { id: 5, name: 'Review', icon: Eye }
  ];

  const handleInputChange = (field, value) => {
    setCampaignData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (file) => {
    setCampaignData(prev => ({ ...prev, uploadedFile: file }));
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
     case 1:
      return (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Campaign Name *</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter campaign name"
              value={campaignData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
            <textarea
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows="4"
              placeholder="Describe your campaign purpose and goals"
              value={campaignData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
            />
          </div>

          <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-blue-900 dark:text-blue-200">Campaign Tips</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                  Choose a descriptive name that helps you identify the campaign later. Include the purpose and target audience for better organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      );


     case 2:
      return (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">Email Source</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['upload', 'manual'].map((source) => (
                <div
                  key={source}
                  className={`border-2 border-dashed rounded-lg p-6 cursor-pointer transition-colors ${
                    campaignData.emailSource === source 
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-950' 
                      : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                  }`}
                  onClick={() => handleInputChange('emailSource', source)}
                >
                  {source === 'upload' ? (
                    <Upload className="w-8 h-8 text-gray-600 dark:text-gray-300 mx-auto mb-3" />
                  ) : (
                    <FileText className="w-8 h-8 text-gray-600 dark:text-gray-300 mx-auto mb-3" />
                  )}
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white text-center mb-2">
                    {source === 'upload' ? 'Upload File' : 'Manual Entry'}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    {source === 'upload' 
                      ? 'CSV, Excel, or TXT file with email addresses' 
                      : 'Type or paste email addresses manually'}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {campaignData.emailSource === 'upload' && (
            <div
              className={`border-2 border-dashed rounded-lg p-8 transition-colors ${
                dragActive ? 'border-blue-500 bg-blue-50 dark:bg-blue-950' : 'border-gray-300 dark:border-gray-600'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <div className="text-center">
                {campaignData.uploadedFile ? (
                  <div className="flex items-center justify-center gap-3">
                    <FileText className="w-8 h-8 text-green-600" />
                    <div>
                      <p className="text-lg font-medium text-gray-900 dark:text-white">{campaignData.uploadedFile.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{(campaignData.uploadedFile.size / 1024).toFixed(1)} KB</p>
                    </div>
                    <button
                      className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                      onClick={() => handleFileUpload(null)}
                    >
                      <X className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                    </button>
                  </div>
                ) : (
                  <>
                    <Upload className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                    <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">Drop your file here</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">or click to browse</p>
                    <input
                      type="file"
                      className="hidden"
                      id="file-upload"
                      accept=".csv,.xlsx,.xls,.txt"
                      onChange={(e) => e.target.files[0] && handleFileUpload(e.target.files[0])}
                    />
                    <label
                      htmlFor="file-upload"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg cursor-pointer transition-colors"
                    >
                      Choose File
                    </label>
                  </>
                )}
              </div>
            </div>
          )}

          {campaignData.emailSource === 'manual' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Addresses</label>
              <textarea
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows="8"
                placeholder="Enter email addresses (one per line or comma-separated)"
              />
            </div>
          )}
        </div>
      );


    case 3:
      return (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">Verification Level</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { id: 'basic', name: 'Basic', desc: 'Syntax validation only', icon: CheckCircle },
                { id: 'standard', name: 'Standard', desc: 'Domain validation included', icon: Target },
                { id: 'premium', name: 'Premium', desc: 'Full SMTP verification', icon: Zap }
              ].map((level) => (
                <div
                  key={level.id}
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                    campaignData.verificationLevel === level.id
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/10'
                      : 'border-gray-200 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-500'
                  }`}
                  onClick={() => handleInputChange('verificationLevel', level.id)}
                >
                  <level.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-3" />
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1">{level.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{level.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">Target Audience</label>
            <div className="space-y-3">
              {['all', 'new', 'failed'].map((audience) => (
                <label className="flex items-center text-gray-800 dark:text-gray-200" key={audience}>
                  <input
                    type="radio"
                    name="targetAudience"
                    value={audience}
                    checked={campaignData.targetAudience === audience}
                    onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                    className="mr-3"
                  />
                  <span>
                    {audience === 'all'
                      ? 'Verify all email addresses'
                      : audience === 'new'
                      ? 'Only new/unverified addresses'
                      : 'Previously failed verifications'}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <label className="flex items-center text-gray-800 dark:text-gray-200">
              <input
                type="checkbox"
                checked={campaignData.notifications}
                onChange={(e) => handleInputChange('notifications', e.target.checked)}
                className="mr-3"
              />
              <span className="text-sm">Send email notifications when campaign completes</span>
            </label>

            <label className="flex items-center text-gray-800 dark:text-gray-200">
              <input
                type="checkbox"
                checked={campaignData.autoResend}
                onChange={(e) => handleInputChange('autoResend', e.target.checked)}
                className="mr-3"
              />
              <span className="text-sm">Automatically retry failed verifications after 24 hours</span>
            </label>
          </div>
        </div>
      );

      case 4:
      return (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">Campaign Schedule</label>
            <div className="space-y-4">
              <label className="flex items-center text-gray-800 dark:text-gray-200">
                <input
                  type="radio"
                  name="scheduleType"
                  value="immediate"
                  checked={campaignData.scheduleType === 'immediate'}
                  onChange={(e) => handleInputChange('scheduleType', e.target.value)}
                  className="mr-3"
                />
                <div>
                  <span className="font-medium">Start Immediately</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Begin verification as soon as campaign is created
                  </p>
                </div>
              </label>

              <label className="flex items-start text-gray-800 dark:text-gray-200">
                <input
                  type="radio"
                  name="scheduleType"
                  value="scheduled"
                  checked={campaignData.scheduleType === 'scheduled'}
                  onChange={(e) => handleInputChange('scheduleType', e.target.value)}
                  className="mr-3 mt-1"
                />
                <div className="flex-1">
                  <span className="font-medium">Schedule for Later</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Set a specific date and time to start verification
                  </p>

                  {campaignData.scheduleType === 'scheduled' && (
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Date</label>
                        <input
                          type="date"
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={campaignData.scheduledDate}
                          onChange={(e) => handleInputChange('scheduledDate', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Time</label>
                        <input
                          type="time"
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={campaignData.scheduledTime}
                          onChange={(e) => handleInputChange('scheduledTime', e.target.value)}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </label>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-yellow-900 dark:text-yellow-200">Scheduling Notice</h4>
                <p className="text-sm text-yellow-700 dark:text-yellow-400 mt-1">
                  Scheduled campaigns will automatically start at the specified time. Make sure your account has sufficient credits before the scheduled start time.
                </p>
              </div>
            </div>
          </div>
        </div>
      );

     case 5:
      return (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Campaign Summary</h3>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Campaign Name:</span>
                <span className="font-medium text-gray-900 dark:text-white">{campaignData.name || 'Untitled Campaign'}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Email Source:</span>
                <span className="font-medium text-gray-900 dark:text-white capitalize">{campaignData.emailSource}</span>
              </div>

              {campaignData.uploadedFile && (
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Uploaded File:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{campaignData.uploadedFile.name}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Verification Level:</span>
                <span className="font-medium text-gray-900 dark:text-white capitalize">{campaignData.verificationLevel}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Schedule:</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {campaignData.scheduleType === 'immediate'
                    ? 'Start Immediately'
                    : `${campaignData.scheduledDate} at ${campaignData.scheduledTime}`}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Notifications:</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {campaignData.notifications ? 'Enabled' : 'Disabled'}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-blue-900 dark:text-blue-200">Ready to Launch</h4>
                <p className="text-sm text-blue-700 dark:text-blue-400 mt-1">
                  Your campaign is configured and ready to start. Click "Launch Campaign" to begin the email verification process.
                </p>
              </div>
            </div>
          </div>
        </div>
      );

      default:
        return null;
    }
  };

  return (
   <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="px-6 py-4">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">New Campaign</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Create a new email verification campaign</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                      currentStep >= step.id
                        ? 'bg-blue-600 border-blue-600 text-white'
                        : 'border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    <step.icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`ml-3 text-sm font-medium ${
                      currentStep >= step.id
                        ? 'text-blue-600'
                        : 'text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {step.name}
                  </span>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-16 h-0.5 ml-4 ${
                        currentStep > step.id
                          ? 'bg-blue-600'
                          : 'bg-gray-300 dark:bg-gray-700'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-8">
            {renderStepContent()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              className={`px-6 py-3 border rounded-lg transition-colors ${
                currentStep === 1
                  ? 'text-gray-400 border-gray-300 dark:border-gray-700 cursor-not-allowed'
                  : 'text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
              onClick={() => currentStep > 1 && setCurrentStep(currentStep - 1)}
              disabled={currentStep === 1}
            >
              Previous
            </button>

            <div className="flex gap-3">
              {currentStep === steps.length ? (
                <>
                  <button className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors flex items-center gap-2">
                    <Save className="w-4 h-4" />
                    Save as Draft
                  </button>
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    Launch Campaign
                  </button>
                </>
              ) : (
                <button
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => setCurrentStep(currentStep + 1)}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

 

export default NewCampaigns
