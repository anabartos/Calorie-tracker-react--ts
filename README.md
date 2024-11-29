#  Calorie Tracker

This project is an application that allows users to record activities, either related to **food** or **exercise**, and track the calories consumed and burned. Users can also add, edit, and delete activities through an interactive form.

## Features

- Record food and exercise activities.
- View calories consumed, burned, and the difference.
- Add, edit, and delete activities.
- Persistent storage of activities in `localStorage`.

## Technologies

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **Tailwind CSS**: A utility-first CSS framework for creating fast, modern interfaces.
- **UUID**: A library to generate unique identifiers for activities.

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/anabartos/Calorie-tracker-react--ts
cd calorie-tracker-recat--ts
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
To start the project in development mode, use the following command:
```bash
npm run dev
```
The project will be available at http://localhost:3000.

## Usage

Once you open the app, you will see an interface that allows you to:

- **Add an activity**: Choose the category (Food or Exercise), enter the activity name, and the associated calories.
- **View the calorie summary**: At the top, you will see a summary of calories consumed, burned, and the difference.
- **Edit an activity**: Click the pencil icon to modify an existing activity.
- **Delete an activity**: Click the X icon to delete an activity.



## Project Structure
The basic structure of the project is as follows:

bash
src/
├── components/           
│   ├── ActivityList.tsx  
│   ├── CalorieTracker.tsx 
│   ├── Form.tsx          
│   └── CalorieDisplay.tsx 
├── data/
│   └── categories.ts     
├── reducer/
│   ├── activityReducer.ts 
│   └── activityActions.ts 
├── types/
│   └── index.ts          
└── App.tsx               

## Contributing
Contributions are welcome. If you would like to improve the project or add new features, follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-new-feature).
Make your changes and commit them (git commit -am 'Add new feature').
Submit a pull request.
