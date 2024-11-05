# Daily Event Scheduler

This project is a simple scheduling application that manages events within a 24-hour day. The application consists of a frontend built with Angular and a backend built with Node.js. The core functionality ensures that events do not overlap, providing a user-friendly interface for easy scheduling and viewing of events.

## Project Structure

- **frontend/**: Contains the Angular application for the user interface.
- **backend/**: Contains the Node.js application that manages the event scheduling logic and data storage.

## Features

- **Add Event**: Add events with start and end times, with automatic overlap checking.
- **View Events**: Displays all scheduled events in a clear, visual layout.
- **Input Validation**: Ensures only valid, non-overlapping events are added to the schedule.

## Getting Started

### Prerequisites

- **Node.js**: Make sure Node.js is installed on your system.
- **Angular CLI**: Ensure the Angular CLI is installed globally. You can install it with the following command:

    ```bash
    npm install -g @angular/cli
    ```

- **Git**: Ensure Git is available to clone the repository.

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/daily-event-scheduler.git
    cd daily-event-scheduler
    ```

2. **Set up the backend**:

   - Navigate to the backend folder:

    ```bash
    cd backend
    ```

   - Install backend dependencies:

    ```bash
    npm install
    ```

   - Start the backend server:

    ```bash
    node app.js
    ```

3. **Set up the frontend**:

   - Open a new terminal window and navigate to the frontend folder:

    ```bash
    cd ../frontend
    ```

   - Install frontend dependencies:

    ```bash
    npm install
    ```

   - Start the frontend application:

    ```bash
    ng serve
    ```

4. **Open the application**:  
   Once both the frontend and backend servers are running, the application should be accessible at `http://localhost:4200` (or the specified port for Angular). Make sure the backend server is running on a separate port (default is 3000 for Node.js).

### Using the Application

1. **Adding Events**:  
   - Enter the start and end times in the 24-hour format (e.g., 9 for 9:00 AM, 17 for 5:00 PM).
   - Click on "Add Event" to schedule it.
   - If the event overlaps with an existing event, an error message will appear.

2. **Viewing Events**:  
   - All scheduled events are displayed on the main interface.
   - Events are shown in a visual format, making it easy to see existing schedules and gaps.

## Screenshots

<!-- Include screenshots of the application here -->
![Add Event UI](screenshots/add-event.png)
![Event List UI](screenshots/event-list.png)

## Contributing

If you want to contribute to this project, feel free to fork the repository and submit pull requests.
