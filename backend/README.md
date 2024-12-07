# Backend Server

## Overview
This backend server provides API endpoints for interacting with machine learning models. It leverages FastAPI for the server framework and integrates various tools for model hosting and performance optimization.

## Setup Instructions

### Prerequisites
- Python 3.8 or higher
- A compatible NVIDIA GPU with CUDA (if using GPU acceleration)

### Installation
1. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

### GPU Initialization
To configure your environment for GPU usage, follow the instructions in `commands.md`

## Running the Server
Start the server using:
```bash
python run.py
```
The server will be accessible at `http://127.0.0.1:5032`.

## Testing
1. Use the included Postman collection (`postman_collection.json`) for testing endpoints.
2. Import the collection into Postman and run the predefined test cases.

## Development Notes
- Source code is located in the `src` directory.
- Tests are located in the `tests` directory.

## Additional Notes
Refer to `commands.md` for advanced setup and troubleshooting tips.
