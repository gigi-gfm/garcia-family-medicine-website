
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Garcia Family Medicine - Weight Management Tracker</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }

        .app-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .header {
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            margin-bottom: 30px;
            text-align: center;
        }

        .header h1 {
            color: #2c5282;
            margin-bottom: 10px;
        }

        .header p {
            color: #666;
            font-size: 18px;
        }

        .logo {
            width: 150px;
            margin-bottom: 20px;
        }

        .dashboard {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }

        .card {
            background: white;
            padding: 25px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .card h2 {
            color: #2c5282;
            margin-bottom: 20px;
            font-size: 22px;
            border-bottom: 3px solid #FF8C42;
            padding-bottom: 10px;
        }

        .stat-box {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 15px;
        }

        .stat-number {
            font-size: 36px;
            font-weight: bold;
            display: block;
        }

        .stat-label {
            font-size: 14px;
            opacity: 0.9;
            margin-top: 5px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-label {
            display: block;
            margin-bottom: 8px;
            color: #2c5282;
            font-weight: 600;
        }

        .form-input {
            width: 100%;
            padding: 12px;
            border: 2px solid #e2e8f0;
            border-radius: 8px;
            font-size: 16px;
            transition: border-color 0.3s;
        }

        .form-input:focus {
            outline: none;
            border-color: #667eea;
        }

        .btn {
            background: linear-gradient(135deg, #FF8C42 0%, #FF6B35 100%);
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            width: 100%;
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(255, 107, 53, 0.4);
        }

        .btn-secondary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .entry-list {
            max-height: 400px;
            overflow-y: auto;
        }

        .entry-item {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 10px;
            border-left: 4px solid #FF8C42;
        }

        .entry-date {
            font-weight: 600;
            color: #2c5282;
            margin-bottom: 5px;
        }

        .entry-value {
            font-size: 18px;
            color: #333;
        }

        .chart-container {
            position: relative;
            height: 300px;
            margin-top: 20px;
        }

        .welcome-section {
            background: white;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            text-align: center;
            margin-bottom: 30px;
        }

        .welcome-section h2 {
            color: #2c5282;
            margin-bottom: 20px;
            font-size: 28px;
        }

        .welcome-section p {
            color: #666;
            font-size: 18px;
            line-height: 1.8;
            margin-bottom: 15px;
        }

        .cta-buttons {
            display: flex;
            gap: 15px;
            justify-content: center;
            margin-top: 30px;
            flex-wrap: wrap;
        }

        .cta-btn {
            padding: 15px 40px;
            font-size: 18px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: bold;
            transition: all 0.3s;
            display: inline-block;
        }

        .cta-btn-primary {
            background: linear-gradient(135deg, #FF8C42 0%, #FF6B35 100%);
            color: white;
        }

        .cta-btn-secondary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }

        .cta-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        }

        .footer {
            text-align: center;
            color: white;
            margin-top: 40px;
            padding: 20px;
        }

        .footer a {
            color: white;
            text-decoration: underline;
        }

        @media (max-width: 768px) {
            .dashboard {
                grid-template-columns: 1fr;
            }

            .cta-buttons {
                flex-direction: column;
            }

            .cta-btn {
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        const { useState, useEffect } = React;

        function WeightManagementApp() {
            const [view, setView] = useState('welcome'); // 'welcome' or 'tracker'
            const [weight, setWeight] = useState('');
            const [goal, setGoal] = useState('');
            const [meal, setMeal] = useState('');
            const [entries, setEntries] = useState([]);
            const [meals, setMeals] = useState([]);

            // Load data from localStorage
            useEffect(() => {
                const savedEntries = localStorage.getItem('weightEntries');
                const savedMeals = localStorage.getItem('mealEntries');
                const savedGoal = localStorage.getItem('weightGoal');
                
                if (savedEntries) setEntries(JSON.parse(savedEntries));
                if (savedMeals) setMeals(JSON.parse(savedMeals));
                if (savedGoal) setGoal(savedGoal);
            }, []);

            // Save to localStorage
            useEffect(() => {
                localStorage.setItem('weightEntries', JSON.stringify(entries));
            }, [entries]);

            useEffect(() => {
                localStorage.setItem('mealEntries', JSON.stringify(meals));
            }, [meals]);

            useEffect(() => {
                if (goal) localStorage.setItem('weightGoal', goal);
            }, [goal]);

            const addWeightEntry = (e) => {
                e.preventDefault();
                if (!weight) return;

                const newEntry = {
                    id: Date.now(),
                    date: new Date().toLocaleDateString(),
                    weight: parseFloat(weight),
                    timestamp: Date.now()
                };

                setEntries([newEntry, ...entries]);
                setWeight('');
            };

            const addMealEntry = (e) => {
                e.preventDefault();
                if (!meal) return;

                const newMeal = {
                    id: Date.now(),
                    date: new Date().toLocaleDateString(),
                    time: new Date().toLocaleTimeString(),
                    meal: meal
                };

                setMeals([newMeal, ...meals]);
                setMeal('');
            };

            const currentWeight = entries.length > 0 ? entries[0].weight : 0;
            const startWeight = entries.length > 0 ? entries[entries.length - 1].weight : 0;
            const weightLost = startWeight - currentWeight;
            const goalWeight = parseFloat(goal) || 0;
            const toGoal = currentWeight - goalWeight;

            if (view === 'welcome') {
                return (
                    <div className="app-container">
                        <div className="welcome-section">
                            <h1 style={{color: '#2c5282', fontSize: '36px', marginBottom: '10px'}}>Welcome to Your Weight Management Journey</h1>
                            <p style={{fontSize: '20px', color: '#666', marginBottom: '30px'}}>Garcia Family Medicine</p>
                            
                            <div style={{maxWidth: '800px', margin: '0 auto'}}>
                                <p>Transform your health with our comprehensive weight management program. Track your progress, log your meals, and stay connected with your wellness coach.</p>
                                
                                <p><strong>Your journey includes:</strong></p>
                                <ul style={{listStyle: 'none', padding: 0, marginTop: '20px'}}>
                                    <li style={{marginBottom: '10px'}}>✓ Daily weight and meal tracking</li>
                                    <li style={{marginBottom: '10px'}}>✓ Visual progress charts</li>
                                    <li style={{marginBottom: '10px'}}>✓ Goal setting and monitoring</li>
                                    <li style={{marginBottom: '10px'}}>✓ Access to your wellness coach</li>
                                    <li style={{marginBottom: '10px'}}>✓ Personalized nutrition guidance</li>
                                </ul>

                                <div className="cta-buttons">
                                    <button className="cta-btn cta-btn-primary" onClick={() => setView('tracker')}>
                                        Start Tracking Now
                                    </button>
                                    <a href="https://www.garciafamilymedicine.care/#contact" className="cta-btn cta-btn-secondary">
                                        Schedule Consultation
                                    </a>
                                </div>

                                <div style={{marginTop: '40px', padding: '20px', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', borderRadius: '10px', color: 'white'}}>
                                    <p style={{fontSize: '16px', fontWeight: '500', margin: 0}}>
                                        Face the voices from your past telling you that you can't succeed. Our program is based on unlearning the lies you have been taught and discovering the truth about yourself, your dreams, and your plans.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="footer">
                            <p>&copy; 2025 Garcia Family Medicine | <a href="https://www.garciafamilymedicine.care">Back to Main Website</a></p>
                            <p>801 NW Saint Mary's Drive, Suite 209, Blue Springs, MO 64014 | (816) 427-5320</p>
                        </div>
                    </div>
                );
            }

            return (
                <div className="app-container">
                    <div className="header">
                        <h1>Weight Management Tracker</h1>
                        <p>Garcia Family Medicine - Track Your Journey to Wellness</p>
                        <button 
                            onClick={() => setView('welcome')} 
                            style={{marginTop: '15px', background: '#f8f9fa', color: '#2c5282', padding: '8px 20px', border: '1px solid #e2e8f0', borderRadius: '5px', cursor: 'pointer'}}
                        >
                            ← Back to Welcome
                        </button>
                    </div>

                    <div className="dashboard">
                        <div className="card">
                            <h2>Your Progress</h2>
                            <div className="stat-box">
                                <span className="stat-number">{currentWeight || '--'} lbs</span>
                                <span className="stat-label">Current Weight</span>
                            </div>
                            <div className="stat-box" style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}>
                                <span className="stat-number">{weightLost > 0 ? weightLost.toFixed(1) : '--'} lbs</span>
                                <span className="stat-label">Total Lost</span>
                            </div>
                            <div className="stat-box" style={{background: 'linear-gradient(135deg, #FF8C42 0%, #FF6B35 100%)'}}>
                                <span className="stat-number">{goalWeight || '--'} lbs</span>
                                <span className="stat-label">Goal Weight</span>
                            </div>
                            {toGoal > 0 && (
                                <div style={{marginTop: '15px', textAlign: 'center', color: '#2c5282', fontWeight: '600'}}>
                                    {toGoal.toFixed(1)} lbs to goal!
                                </div>
                            )}
                        </div>

                        <div className="card">
                            <h2>Log Weight</h2>
                            <form onSubmit={addWeightEntry}>
                                <div className="form-group">
                                    <label className="form-label">Current Weight (lbs)</label>
                                    <input 
                                        type="number" 
                                        step="0.1"
                                        className="form-input"
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
                                        placeholder="Enter your weight"
                                    />
                                </div>
                                <button type="submit" className="btn">Log Weight</button>
                            </form>

                            <div className="form-group" style={{marginTop: '20px'}}>
                                <label className="form-label">Goal Weight (lbs)</label>
                                <input 
                                    type="number" 
                                    step="0.1"
                                    className="form-input"
                                    value={goal}
                                    onChange={(e) => setGoal(e.target.value)}
                                    placeholder="Set your goal"
                                />
                            </div>
                        </div>

                        <div className="card">
                            <h2>Log Meal</h2>
                            <form onSubmit={addMealEntry}>
                                <div className="form-group">
                                    <label className="form-label">What did you eat?</label>
                                    <textarea 
                                        className="form-input"
                                        rows="4"
                                        value={meal}
                                        onChange={(e) => setMeal(e.target.value)}
                                        placeholder="Describe your meal..."
                                    />
                                </div>
                                <button type="submit" className="btn">Log Meal</button>
                            </form>
                        </div>
                    </div>

                    <div className="dashboard">
                        <div className="card">
                            <h2>Weight History</h2>
                            <div className="entry-list">
                                {entries.length === 0 ? (
                                    <p style={{textAlign: 'center', color: '#666'}}>No entries yet. Start tracking!</p>
                                ) : (
                                    entries.map(entry => (
                                        <div key={entry.id} className="entry-item">
                                            <div className="entry-date">{entry.date}</div>
                                            <div className="entry-value">{entry.weight} lbs</div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>

                        <div className="card">
                            <h2>Meal Log</h2>
                            <div className="entry-list">
                                {meals.length === 0 ? (
                                    <p style={{textAlign: 'center', color: '#666'}}>No meals logged yet.</p>
                                ) : (
                                    meals.slice(0, 10).map(m => (
                                        <div key={m.id} className="entry-item">
                                            <div className="entry-date">{m.date} - {m.time}</div>
                                            <div style={{marginTop: '5px', color: '#555'}}>{m.meal}</div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="footer">
                        <p>&copy; 2025 Garcia Family Medicine | <a href="https://www.garciafamilymedicine.care">Back to Main Website</a></p>
                        <p>801 NW Saint Mary's Drive, Suite 209, Blue Springs, MO 64014 | (816) 427-5320</p>
                    </div>
                </div>
            );
        }

        ReactDOM.render(<WeightManagementApp />, document.getElementById('root'));
    </script>
</body>
</html>
