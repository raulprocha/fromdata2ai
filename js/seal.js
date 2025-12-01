document.addEventListener('DOMContentLoaded', () => {
    const chartData = {
        models: ['GPT-4-Turbo', 'Claude 3 Opus', 'Gemini 1.5 Pro'],
        colors: ['rgba(0, 102, 204, 0.6)', 'rgba(120, 113, 108, 0.6)', 'rgba(76, 117, 163, 0.6)'],
        borderColors: ['rgb(0, 102, 204)', 'rgb(120, 113, 108)', 'rgb(76, 117, 163)'],
        overall: [92, 88, 85],
        bySkill: {
            'Search': [95, 90, 88],
            'Code': [98, 85, 82],
            'Math': [88, 92, 80],
            'Logic': [87, 85, 90]
        },
        byScenario: {
            'AI Stock Analyst': [94, 86, 83],
            'Trip Planner': [90, 92, 88],
            'Data Visualizer': [96, 84, 80]
        }
    };

    const insights = {
        overall: "GPT-4-Turbo shows the highest overall performance, but competition is tight at the top.",
        skill: "Performance varies significantly across different skills. Select a specific skill to see detailed comparisons.",
        scenario: "Complex scenarios reveal different model strengths. Select a scenario to explore."
    };

    const ctx = document.getElementById('performanceChart').getContext('2d');
    let chart;

    function createChart(view) {
        let labels, datasets, insight;

        if (view === 'overall') {
            labels = chartData.models;
            datasets = [{
                label: 'Overall Performance',
                data: chartData.overall,
                backgroundColor: chartData.colors,
                borderColor: chartData.borderColors,
                borderWidth: 2
            }];
            insight = insights.overall;
        } else if (view === 'skill') {
            labels = Object.keys(chartData.bySkill);
            datasets = chartData.models.map((model, i) => ({
                label: model,
                data: labels.map(skill => chartData.bySkill[skill][i]),
                backgroundColor: chartData.colors[i],
                borderColor: chartData.borderColors[i],
                borderWidth: 2
            }));
            insight = insights.skill;
        } else {
            labels = Object.keys(chartData.byScenario);
            datasets = chartData.models.map((model, i) => ({
                label: model,
                data: labels.map(scenario => chartData.byScenario[scenario][i]),
                backgroundColor: chartData.colors[i],
                borderColor: chartData.borderColors[i],
                borderWidth: 2
            }));
            insight = insights.scenario;
        }

        document.getElementById('chart-insight').textContent = insight;

        if (chart) chart.destroy();

        chart = new Chart(ctx, {
            type: 'bar',
            data: { labels, datasets },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        title: { display: true, text: 'Performance Score (%)' }
                    }
                },
                plugins: {
                    legend: { position: 'top' },
                    title: { display: true, text: 'Model Performance Comparison' }
                }
            }
        });
    }

    document.querySelectorAll('.chart-controls .btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.chart-controls .btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            createChart(e.target.dataset.view);
        });
    });

    createChart('overall');
});
