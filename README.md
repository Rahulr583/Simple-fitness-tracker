# Simple Fitness Tracker

This is a lightweight web application I built to help track daily physical activities and calorie burn. It’s designed to be simple, fast, and private by keeping all your data right in your browser.

## Key Features
*   **Calorie Calculation:** Automatically estimates calories burned using MET values based on your weight and workout duration.
*   **Progress Tracking:** Features a dynamic progress bar that fills up as you get closer to your daily 500-calorie goal[cite: 5, 6].
*   **Persistent Storage:** Uses `localStorage` so your workout history doesn't disappear when you refresh the page[cite: 5].
*   **Activity Management:** View a timestamped list of today's activities and delete entries if you make a mistake[cite: 4, 5].

##  Project Structure
*   `index.html`: The core layout featuring the activity form, daily list, and progress visualization[cite: 4].
*   `style.css`: Clean, centered styling with a custom-built progress bar component[cite: 6].
*   `script.js`: Handles the math for calorie burn, date filtering for "today's" activities, and data persistence[cite: 5].

##  How to Use
1.  Enter your activity (e.g., "Running"), your weight in kg, and how many minutes you exercised[cite: 4].
2.  Click **Add** to log the session[cite: 4].
3.  Watch the **Total Calories** update and the green progress bar grow[cite: 4, 5].
4.  If you need to remove an entry, just click the **X** button next to that activity[cite: 5].

##  What I Practiced
*   **Data Persistence:** Implementing `JSON.parse` and `JSON.stringify` to manage data in `localStorage`[cite: 5].
*   **DOM Manipulation:** Dynamically creating list items and updating CSS styles (like progress bar width) through JavaScript[cite: 5].
*   **Math Logic:** Converting time to hours and applying metabolic formulas to generate user-specific data[cite: 5].

