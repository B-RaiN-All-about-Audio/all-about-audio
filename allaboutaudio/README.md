# All About Audio — Functional Portfolio Prototype

A responsive, single-page DIY car-audio website built with plain HTML, CSS, and JavaScript.

This version keeps the original dark/orange visual direction but replaces decorative placeholder sections with working front-end features that can be demonstrated in a portfolio.

## Working Features

### 1. Final Impedance Calculator
- Supports 1–4 subwoofers
- Supports SVC and DVC configurations
- Supports 1, 2, 4, and 8-ohm coils
- Calculates series/parallel coil wiring
- Calculates series/parallel wiring between multiple subwoofers
- Shows warnings for sub-1-ohm loads

### 2. Power and Wire Estimator
- Estimates amplifier current demand from RMS power, system voltage, and amplifier efficiency
- Provides a planning fuse size
- Provides a conservative starting cable-size recommendation
- Adjusts the recommendation for longer cable runs

These values are educational planning estimates. The amplifier manual, wire manufacturer, correct fusing practices, and a qualified installer take priority.

### 3. Troubleshooter
Provides ordered diagnostic checklists for:
- Amplifier with no power
- Protect mode
- Voltage drop and dimming lights
- Weak or missing bass
- Whine, hiss, and popping

### 4. Searchable Guides
- Six built-in starter guides
- Text search
- Category filters
- Keyboard-accessible cards
- Native dialog windows with full guide content

### 5. Build Planner
- Saves named vehicle and system plans
- Uses browser `localStorage`, so no account or backend is required
- Keeps plans after refreshing the page
- Supports copying one plan or all plans
- Supports deleting plans

### 6. Feedback Form
The feedback form validates user input and opens the visitor's default email application with a prepared message.

The destination email is configured near the top of:

```text
js/main.js
```

Change this line when needed:

```javascript
const CONTACT_EMAIL = 'hello@allaboutaudio.org';
```

The mailbox must actually exist for messages to be received.

## Project Structure

```text
allaboutaudio/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/
```

The `images` directory is currently empty because the visual design uses CSS, inline SVG, and emoji icons. Real project photography can be added later without changing the app functionality.

## Run Locally

The site can be opened by double-clicking `index.html`. Running a local server is recommended during development.

Using Python:

```bash
cd allaboutaudio
python -m http.server 8000
```

Then open `http://localhost:8000`.

Using VS Code, the Live Server extension is another straightforward option.

## Deploy on GitHub Pages

1. Create a GitHub repository.
2. Upload the contents of the `allaboutaudio` folder.
3. Commit and push the files.
4. Open the repository's **Settings**.
5. Select **Pages**.
6. Choose deployment from the main branch and root folder.
7. Save and wait for the published URL.

## Portfolio Talking Points

This project demonstrates:
- Responsive layout and mobile navigation
- Semantic HTML and accessible form labels
- DOM manipulation
- Event handling
- Form validation
- Calculation logic
- Filtering and search
- Native dialogs
- Browser storage with `localStorage`
- Clipboard interaction
- Safe rendering of user-entered content
- Progressive enhancement and reduced-motion support

## Recommended Next Version

The best next additions are:
1. Real wiring-diagram illustrations
2. A ported-box volume calculator
3. Unit tests for calculator functions
4. A small backend for actual contact submissions
5. Project photos and an honest build showcase
6. Deployment with a custom domain

Do not add user accounts, forums, live workshops, product reviews, or a database until the existing tools have been tested and the content is real. Version 1 is supposed to prove that the project works, not reenact the collapse of an overfunded startup.
