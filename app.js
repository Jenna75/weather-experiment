// Weather data from the provided JSON
const weatherData = [
  {"Temperature": 25.5, "Solar Radiation": 483.0, "Relative Humidity": 75.2, "Rain": 1, "High_AI": 0, "Low_AI": 1},
  {"Temperature": 32.6, "Solar Radiation": 521.6, "Relative Humidity": 83.1, "Rain": 1, "High_AI": 1, "Low_AI": 1},
  {"Temperature": 29.0, "Solar Radiation": 594.9, "Relative Humidity": 72.0, "Rain": 1, "High_AI": 0, "Low_AI": 0},
  {"Temperature": 32.3, "Solar Radiation": 536.2, "Relative Humidity": 74.0, "Rain": 1, "High_AI": 1, "Low_AI": 0},
  {"Temperature": 26.4, "Solar Radiation": 606.8, "Relative Humidity": 56.5, "Rain": 1, "High_AI": 1, "Low_AI": 0},
  {"Temperature": 31.2, "Solar Radiation": 452.0, "Relative Humidity": 53.4, "Rain": 0, "High_AI": 1, "Low_AI": 0},
  {"Temperature": 28.4, "Solar Radiation": 736.6, "Relative Humidity": 58.8, "Rain": 0, "High_AI": 0, "Low_AI": 0},
  {"Temperature": 28.4, "Solar Radiation": 543.1, "Relative Humidity": 53.8, "Rain": 1, "High_AI": 1, "Low_AI": 1},
  {"Temperature": 31.7, "Solar Radiation": 338.7, "Relative Humidity": 58.7, "Rain": 1, "High_AI": 1, "Low_AI": 1},
  {"Temperature": 28.9, "Solar Radiation": 680.0, "Relative Humidity": 44.4, "Rain": 0, "High_AI": 0, "Low_AI": 0},
  {"Temperature": 27.1, "Solar Radiation": 512.1, "Relative Humidity": 73.9, "Rain": 1, "High_AI": 1, "Low_AI": 1},
  {"Temperature": 28.9, "Solar Radiation": 669.4, "Relative Humidity": 58.4, "Rain": 0, "High_AI": 0, "Low_AI": 1},
  {"Temperature": 28.3, "Solar Radiation": 678.4, "Relative Humidity": 67.6, "Rain": 1, "High_AI": 1, "Low_AI": 1},
  {"Temperature": 30.2, "Solar Radiation": 535.6, "Relative Humidity": 82.9, "Rain": 1, "High_AI": 1, "Low_AI": 0},
  {"Temperature": 40.0, "Solar Radiation": 621.7, "Relative Humidity": 57.6, "Rain": 0, "High_AI": 0, "Low_AI": 0},
  {"Temperature": 34.8, "Solar Radiation": 421.9, "Relative Humidity": 47.7, "Rain": 0, "High_AI": 0, "Low_AI": 0},
  {"Temperature": 33.6, "Solar Radiation": 525.6, "Relative Humidity": 52.1, "Rain": 0, "High_AI": 0, "Low_AI": 1},
  {"Temperature": 31.0, "Solar Radiation": 446.4, "Relative Humidity": 73.7, "Rain": 1, "High_AI": 1, "Low_AI": 1},
  {"Temperature": 33.1, "Solar Radiation": 548.9, "Relative Humidity": 57.6, "Rain": 0, "High_AI": 0, "Low_AI": 0},
  {"Temperature": 30.5, "Solar Radiation": 877.0, "Relative Humidity": 50.4, "Rain": 0, "High_AI": 0, "Low_AI": 0},
  {"Temperature": 29.8, "Solar Radiation": 445.2, "Relative Humidity": 68.3, "Rain": 1, "High_AI": 1, "Low_AI": 0},
  {"Temperature": 35.2, "Solar Radiation": 589.1, "Relative Humidity": 49.7, "Rain": 0, "High_AI": 0, "Low_AI": 1},
  {"Temperature": 26.7, "Solar Radiation": 398.4, "Relative Humidity": 78.2, "Rain": 1, "High_AI": 1, "Low_AI": 1},
  {"Temperature": 32.8, "Solar Radiation": 712.5, "Relative Humidity": 55.9, "Rain": 0, "High_AI": 0, "Low_AI": 0},
  {"Temperature": 27.9, "Solar Radiation": 467.3, "Relative Humidity": 71.4, "Rain": 1, "High_AI": 1, "Low_AI": 0},
  {"Temperature": 34.1, "Solar Radiation": 634.8, "Relative Humidity": 51.2, "Rain": 0, "High_AI": 0, "Low_AI": 0},
  {"Temperature": 28.6, "Solar Radiation": 523.7, "Relative Humidity": 69.8, "Rain": 1, "High_AI": 1, "Low_AI": 1},
  {"Temperature": 31.4, "Solar Radiation": 687.2, "Relative Humidity": 48.6, "Rain": 0, "High_AI": 0, "Low_AI": 1},
  {"Temperature": 25.8, "Solar Radiation": 412.9, "Relative Humidity": 76.5, "Rain": 1, "High_AI": 1, "Low_AI": 1},
  {"Temperature": 33.7, "Solar Radiation": 598.3, "Relative Humidity": 54.1, "Rain": 0, "High_AI": 0, "Low_AI": 0},
  {"Temperature": 29.3, "Solar Radiation": 478.6, "Relative Humidity": 67.2, "Rain": 1, "High_AI": 1, "Low_AI": 0},
  {"Temperature": 32.9, "Solar Radiation": 654.1, "Relative Humidity": 52.8, "Rain": 0, "High_AI": 0, "Low_AI": 1},
  {"Temperature": 27.2, "Solar Radiation": 434.5, "Relative Humidity": 74.6, "Rain": 1, "High_AI": 1, "Low_AI": 1},
  {"Temperature": 35.6, "Solar Radiation": 723.4, "Relative Humidity": 46.3, "Rain": 0, "High_AI": 0, "Low_AI": 0},
  {"Temperature": 28.1, "Solar Radiation": 389.7, "Relative Humidity": 79.1, "Rain": 1, "High_AI": 1, "Low_AI": 1},
  {"Temperature": 34.3, "Solar Radiation": 612.8, "Relative Humidity": 50.9, "Rain": 0, "High_AI": 0, "Low_AI": 0},
  {"Temperature": 26.9, "Solar Radiation": 456.2, "Relative Humidity": 72.7, "Rain": 1, "High_AI": 1, "Low_AI": 0},
  {"Temperature": 32.1, "Solar Radiation": 698.5, "Relative Humidity": 47.4, "Rain": 0, "High_AI": 0, "Low_AI": 1},
  {"Temperature": 29.7, "Solar Radiation": 501.3, "Relative Humidity": 66.8, "Rain": 1, "High_AI": 1, "Low_AI": 1},
  {"Temperature": 33.4, "Solar Radiation": 576.9, "Relative Humidity": 53.5, "Rain": 0, "High_AI": 0, "Low_AI": 0}
];

// Main experiment data
const experimentData = {
  participantId: '',
  group: '',
  oxAnswer: '', // Added OX answer field
  trials: [],
  trustRating: 0,
  learningRating: 0,
  startTime: new Date(),
  timestamp: function() {
    return new Date().getTime() - this.startTime.getTime();
  }
};

// Section navigation
const sections = ['welcome-section', 'pre-survey-section', 'instructions-section', 'baseline-section', 'feedback-section', 'post-survey-section', 'results-section'];
let currentSectionIndex = 0;

// Current trial indices
let baselineTrialIndex = 0;
let feedbackTrialIndex = 0;

// Trial data for each phase (we'll shuffle these later)
let baselineTrials = [];
let feedbackTrials = [];

// Show the active section and hide others
function showSection(index) {
  sections.forEach((sectionId, i) => {
    const section = document.getElementById(sectionId);
    if (i === index) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
  currentSectionIndex = index;
}

// Navigate to the next section
function nextSection() {
  if (currentSectionIndex < sections.length - 1) {
    showSection(currentSectionIndex + 1);
  }
}

// Shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Randomly assign participant to High or Low AI group
function assignGroup() {
  const groups = ['High_AI', 'Low_AI'];
  experimentData.group = groups[Math.floor(Math.random() * groups.length)];
  
  // Update group display
  document.getElementById('group-name').textContent = 
    experimentData.group === 'High_AI' ? 'High AI 그룹' : 'Low AI 그룹';
    
  // Set appropriate class for styling
  document.getElementById('group-name').className = 
    'status ' + (experimentData.group === 'High_AI' ? 'status--success' : 'status--info');
}

// Prepare trial data - using all 40 weather data points for 20 trials each phase
function prepareTrialData() {
  // Create indices for shuffling
  const indices = Array.from({length: weatherData.length}, (_, i) => i);
  const shuffledIndices = shuffleArray([...indices]);
  
  // Take first 20 for baseline phase
  baselineTrials = shuffledIndices.slice(0, 20).map((dataIndex, trialIndex) => ({
    ...weatherData[dataIndex],
    idx: dataIndex,
    trialNumber: trialIndex + 1,
    phase: 'Baseline',
    firstDecision: null,
    aiPredictionShown: 0,
    aiPrediction: null,
    acceptedAI: null,
    finalDecision: null,
    correct: null,
    startTime: null
  }));
  
  // Take next 20 for feedback phase
  feedbackTrials = shuffledIndices.slice(20, 40).map((dataIndex, trialIndex) => ({
    ...weatherData[dataIndex],
    idx: dataIndex,
    trialNumber: trialIndex + 1,
    phase: 'Feedback',
    firstDecision: null,
    aiPredictionShown: 0,
    aiPrediction: null,
    acceptedAI: null,
    finalDecision: null,
    correct: null,
    startTime: null
  }));
}

// Start Baseline trial
function startBaselineTrial() {
  const trial = baselineTrials[baselineTrialIndex];
  
  // Update progress indicator
  document.getElementById('baseline-progress').textContent = `진행 상황: ${trial.trialNumber}/20`;
  
  // Display weather data
  document.getElementById('baseline-temperature').textContent = `${trial.Temperature}°C`;
  document.getElementById('baseline-solar').textContent = `${trial['Solar Radiation']} W/m²`;
  document.getElementById('baseline-humidity').textContent = `${trial['Relative Humidity']}%`;
  
  // Reset UI state
  document.getElementById('baseline-prediction-container').style.display = 'block';
  document.getElementById('baseline-ai-recommendation').style.display = 'none';
  document.getElementById('baseline-final-decision').style.display = 'none';
  
  // Record start time
  trial.startTime = experimentData.timestamp();
}

// Start Feedback trial
function startFeedbackTrial() {
  const trial = feedbackTrials[feedbackTrialIndex];
  
  // Update progress indicator
  document.getElementById('feedback-progress').textContent = `진행 상황: ${trial.trialNumber}/20`;
  
  // Display weather data
  document.getElementById('feedback-temperature').textContent = `${trial.Temperature}°C`;
  document.getElementById('feedback-solar').textContent = `${trial['Solar Radiation']} W/m²`;
  document.getElementById('feedback-humidity').textContent = `${trial['Relative Humidity']}%`;
  
  // Reset UI state
  document.getElementById('feedback-prediction-container').style.display = 'block';
  document.getElementById('feedback-ai-recommendation').style.display = 'none';
  document.getElementById('feedback-final-decision').style.display = 'none';
  
  // Record start time
  trial.startTime = experimentData.timestamp();
}

// Handle participant's initial prediction for Baseline
function handleBaselineInitialPrediction(prediction) {
  const trial = baselineTrials[baselineTrialIndex];
  trial.firstDecision = prediction;
  
  // Get AI prediction based on group
  trial.aiPrediction = trial[experimentData.group];
  
  // Core logic: Only show AI recommendation if initial decision ≠ AI prediction
  if (trial.firstDecision !== trial.aiPrediction) {
    trial.aiPredictionShown = 1;
    displayBaselineAIRecommendation();
  } else {
    // If same, no AI recommendation shown, final decision = initial decision
    trial.aiPredictionShown = 0;
    trial.acceptedAI = null;
    trial.finalDecision = trial.firstDecision;
    completeBaselineTrial();
  }
}

// Handle participant's initial prediction for Feedback
function handleFeedbackInitialPrediction(prediction) {
  const trial = feedbackTrials[feedbackTrialIndex];
  trial.firstDecision = prediction;
  
  // Get AI prediction based on group
  trial.aiPrediction = trial[experimentData.group];
  
  // Core logic: Only show AI recommendation if initial decision ≠ AI prediction
  if (trial.firstDecision !== trial.aiPrediction) {
    trial.aiPredictionShown = 1;
    displayFeedbackAIRecommendation();
  } else {
    // If same, no AI recommendation shown, final decision = initial decision
    trial.aiPredictionShown = 0;
    trial.acceptedAI = null;
    trial.finalDecision = trial.firstDecision;
    completeFeedbackTrial();
  }
}

// Display AI recommendation for Baseline
function displayBaselineAIRecommendation() {
  const trial = baselineTrials[baselineTrialIndex];
  
  // Hide prediction container and show AI recommendation
  document.getElementById('baseline-prediction-container').style.display = 'none';
  document.getElementById('baseline-ai-recommendation').style.display = 'block';
  
  // Update AI value display
  const aiValueElement = document.getElementById('baseline-ai-value');
  aiValueElement.textContent = trial.aiPrediction === 1 ? '1 (비가 옴)' : '0 (비가 오지 않음)';
  aiValueElement.className = trial.aiPrediction === 1 ? 'status status--rain' : 'status status--no-rain';
}

// Display AI recommendation for Feedback
function displayFeedbackAIRecommendation() {
  const trial = feedbackTrials[feedbackTrialIndex];
  
  // Hide prediction container and show AI recommendation
  document.getElementById('feedback-prediction-container').style.display = 'none';
  document.getElementById('feedback-ai-recommendation').style.display = 'block';
  
  // Update AI value display
  const aiValueElement = document.getElementById('feedback-ai-value');
  aiValueElement.textContent = trial.aiPrediction === 1 ? '1 (비가 옴)' : '0 (비가 오지 않음)';
  aiValueElement.className = trial.aiPrediction === 1 ? 'status status--rain' : 'status status--no-rain';
}

// Handle AI acceptance for Baseline
function handleBaselineAIAcceptance(accepted) {
  const trial = baselineTrials[baselineTrialIndex];
  trial.acceptedAI = accepted ? 1 : 0;
  
  // Set final decision based on acceptance
  trial.finalDecision = accepted ? trial.aiPrediction : trial.firstDecision;
  
  completeBaselineTrial();
}

// Handle AI acceptance for Feedback
function handleFeedbackAIAcceptance(accepted) {
  const trial = feedbackTrials[feedbackTrialIndex];
  trial.acceptedAI = accepted ? 1 : 0;
  
  // Set final decision based on acceptance
  trial.finalDecision = accepted ? trial.aiPrediction : trial.firstDecision;
  
  completeFeedbackTrial();
}

// Complete Baseline trial
function completeBaselineTrial() {
  const trial = baselineTrials[baselineTrialIndex];
  
  // Calculate correctness
  trial.correct = trial.finalDecision === trial.Rain ? 1 : 0;
  
  // Hide AI recommendation and show final decision
  document.getElementById('baseline-ai-recommendation').style.display = 'none';
  document.getElementById('baseline-final-decision').style.display = 'block';
  
  // Update final value display
  const finalValueElement = document.getElementById('baseline-final-value');
  finalValueElement.textContent = trial.finalDecision === 1 ? '1 (비가 옴)' : '0 (비가 오지 않음)';
  finalValueElement.className = trial.finalDecision === 1 ? 'status status--rain' : 'status status--no-rain';
  
  // Add trial to experiment data
  experimentData.trials.push({ ...trial });
}

// Complete Feedback trial
function completeFeedbackTrial() {
  const trial = feedbackTrials[feedbackTrialIndex];
  
  // Calculate correctness
  trial.correct = trial.finalDecision === trial.Rain ? 1 : 0;
  
  // Hide AI recommendation and show final decision
  document.getElementById('feedback-ai-recommendation').style.display = 'none';
  document.getElementById('feedback-final-decision').style.display = 'block';
  
  // Update final value display
  const finalValueElement = document.getElementById('feedback-final-value');
  finalValueElement.textContent = trial.finalDecision === 1 ? '1 (비가 옴)' : '0 (비가 오지 않음)';
  finalValueElement.className = trial.finalDecision === 1 ? 'status status--rain' : 'status status--no-rain';
  
  // Update correct answer display
  const correctAnswerElement = document.getElementById('feedback-correct-answer');
  correctAnswerElement.textContent = trial.Rain === 1 ? '1 (비가 옴)' : '0 (비가 오지 않음)';
  correctAnswerElement.className = trial.Rain === 1 ? 'status status--rain' : 'status status--no-rain';
  
  // Update correctness display
  const correctnessElement = document.getElementById('feedback-correctness');
  correctnessElement.textContent = trial.correct === 1 ? '정답' : '오답';
  correctnessElement.className = trial.correct === 1 ? 'status status--correct' : 'status status--incorrect';
  
  // Add trial to experiment data
  experimentData.trials.push({ ...trial });
}

// Move to next trial in Baseline
function nextBaselineTrial() {
  baselineTrialIndex++;
  
  if (baselineTrialIndex < baselineTrials.length) {
    startBaselineTrial();
  } else {
    // Move to Feedback phase
    nextSection();
    feedbackTrialIndex = 0;
    startFeedbackTrial();
  }
}

// Move to next trial in Feedback
function nextFeedbackTrial() {
  feedbackTrialIndex++;
  
  if (feedbackTrialIndex < feedbackTrials.length) {
    startFeedbackTrial();
  } else {
    // Move to post-survey
    nextSection();
  }
}

// Handle rating button click
function handleRatingClick(event) {
  const button = event.target;
  const container = button.closest('.rating-container');
  const buttons = container.querySelectorAll('.rating-btn');
  const inputId = container.querySelector('input[type="hidden"]').id;
  const value = button.dataset.value;
  
  // Clear previous selection
  buttons.forEach(btn => btn.classList.remove('selected'));
  
  // Set new selection
  button.classList.add('selected');
  
  // Store value
  document.getElementById(inputId).value = value;
  
  // If both ratings are selected, enable the next button
  if (document.getElementById('trust-rating').value && document.getElementById('learning-rating').value) {
    document.getElementById('post-survey-next').disabled = false;
  }
  
  // Store in experiment data
  if (inputId === 'trust-rating') {
    experimentData.trustRating = parseInt(value);
  } else if (inputId === 'learning-rating') {
    experimentData.learningRating = parseInt(value);
  }
}

// Create CSV from experiment data
function createCSV() {
  // Define headers with added OX_Answer column
  let headers = [
    'Participant ID', 'Group', 'Phase', 'Trial Number',
    'Temperature', 'Solar Radiation', 'Relative Humidity', 'Actual Rain',
    'Initial Decision', 'AI Recommendation', 'Accepted AI', 'Final Decision',
    'Initial Response Time (ms)', 'AI Acceptance Response Time (ms)', 'Total Response Time (ms)',
    'Trust Rating', 'Learning Rating', 'OX_Answer'
  ];
  
  // Create CSV content
  let csvContent = headers.join(',') + '\n';
  
  // Add trial data
  experimentData.trials.forEach(trial => {
    let row = [
      experimentData.participantId,
      experimentData.group,
      trial.phase,
      trial.trialNumber,
      trial.Temperature,
      trial['Solar Radiation'],
      trial['Relative Humidity'],
      trial.Rain,
      trial.firstDecision,
      trial.aiPrediction,
      trial.acceptedAI === null ? 'NA' : trial.acceptedAI,
      trial.finalDecision,
      trial.startTime,
      0, // Placeholder for AI acceptance time
      0, // Placeholder for total time
      experimentData.trustRating,
      experimentData.learningRating,
      experimentData.oxAnswer
    ];
    
    csvContent += row.join(',') + '\n';
  });
  
  return csvContent;
}

// Download data as CSV
function downloadResults() {
  const csvContent = createCSV();
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `weather_experiment_${experimentData.participantId}_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  
  link.click();
  document.body.removeChild(link);
}

// Update summary in results section
function updateResultSummary() {
  document.getElementById('summary-participant-id').textContent = experimentData.participantId;
  document.getElementById('summary-group').textContent = experimentData.group === 'High_AI' ? 'High AI 그룹' : 'Low AI 그룹';
  document.getElementById('summary-trust').textContent = `${experimentData.trustRating}/7`;
  document.getElementById('summary-learning').textContent = `${experimentData.learningRating}/7`;
}

// Check if pre-survey is complete (both ID and O/X answer)
function checkPreSurveyComplete() {
  const participantId = document.getElementById('participant-id').value.trim();
  if (participantId && experimentData.oxAnswer) {
    document.getElementById('pre-survey-next').disabled = false;
  }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Initialize the first section
  showSection(0);
  
  // Welcome page - start button
  document.getElementById('start-button').addEventListener('click', () => {
    nextSection();
  });
  
  // Pre-survey - O/X buttons
  document.getElementById('ox-yes').addEventListener('click', () => {
    document.getElementById('ox-yes').classList.add('selected');
    document.getElementById('ox-no').classList.remove('selected');
    experimentData.oxAnswer = 'O';
    checkPreSurveyComplete();
  });
  
  document.getElementById('ox-no').addEventListener('click', () => {
    document.getElementById('ox-no').classList.add('selected');
    document.getElementById('ox-yes').classList.remove('selected');
    experimentData.oxAnswer = 'X';
    checkPreSurveyComplete();
  });
  
  // Pre-survey - participant ID input
  document.getElementById('participant-id').addEventListener('input', () => {
    checkPreSurveyComplete();
  });
  
  // Pre-survey - next button
  document.getElementById('pre-survey-next').addEventListener('click', () => {
    const participantId = document.getElementById('participant-id').value.trim();
    
    if (!participantId) {
      alert('참가자 ID를 입력해주세요.');
      return;
    }
    
    if (!experimentData.oxAnswer) {
      alert('O/X 문항에 답해주세요.');
      return;
    }
    
    experimentData.participantId = participantId;
    
    // Assign group and prepare trials
    assignGroup();
    prepareTrialData();
    
    nextSection();
  });
  
  // Instructions - next button
  document.getElementById('instructions-next').addEventListener('click', () => {
    nextSection();
    startBaselineTrial();
  });
  
  // Baseline phase - prediction buttons
  document.getElementById('baseline-predict-no-rain').addEventListener('click', () => {
    handleBaselineInitialPrediction(0);
  });
  
  document.getElementById('baseline-predict-rain').addEventListener('click', () => {
    handleBaselineInitialPrediction(1);
  });
  
  // Baseline phase - AI acceptance buttons
  document.getElementById('baseline-accept-ai-yes').addEventListener('click', () => {
    handleBaselineAIAcceptance(true);
  });
  
  document.getElementById('baseline-accept-ai-no').addEventListener('click', () => {
    handleBaselineAIAcceptance(false);
  });
  
  // Baseline phase - next button
  document.getElementById('baseline-next').addEventListener('click', () => {
    nextBaselineTrial();
  });
  
  // Feedback phase - prediction buttons
  document.getElementById('feedback-predict-no-rain').addEventListener('click', () => {
    handleFeedbackInitialPrediction(0);
  });
  
  document.getElementById('feedback-predict-rain').addEventListener('click', () => {
    handleFeedbackInitialPrediction(1);
  });
  
  // Feedback phase - AI acceptance buttons
  document.getElementById('feedback-accept-ai-yes').addEventListener('click', () => {
    handleFeedbackAIAcceptance(true);
  });
  
  document.getElementById('feedback-accept-ai-no').addEventListener('click', () => {
    handleFeedbackAIAcceptance(false);
  });
  
  // Feedback phase - next button
  document.getElementById('feedback-next').addEventListener('click', () => {
    nextFeedbackTrial();
  });
  
  // Post-survey - rating buttons
  const ratingButtons = document.querySelectorAll('.rating-btn');
  ratingButtons.forEach(button => {
    button.addEventListener('click', handleRatingClick);
  });
  
  // Post-survey - next button
  document.getElementById('post-survey-next').addEventListener('click', () => {
    updateResultSummary();
    nextSection();
  });
  
  // Results - download button
  document.getElementById('download-results').addEventListener('click', downloadResults);
});

// Prevent accidental navigation away
window.addEventListener('beforeunload', (event) => {
  // Cancel the event
  event.preventDefault();
  // Chrome requires returnValue to be set
  event.returnValue = '';
});