# Slack Notification API

A TypeScript Express API service for handling Slack notification requests.

## Installation

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

## Build and Start

Build the project:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## API Endpoint

### POST /send-notification

Accepts a JSON payload with the following structure:

```typescript
interface SlackNotificationEvent {
  channels: string[]; // Required: Array of channel names
  contextId?: string; // Optional: Context identifier
  title: string; // Required: Notification title
  body: string; // Required: Notification message body
  timestamp: string; // Required: Timestamp of the notification
}
```

#### Example Request

```bash
curl -X POST http://localhost:3000/send-notification \
  -H "Content-Type: application/json" \
  -d '{
    "channels": ["#general", "#alerts"],
    "contextId": "ctx-123",
    "title": "System Alert",
    "body": "Database backup completed successfully",
    "timestamp": "2024-01-01T12:00:00Z"
  }'
```

#### Response

Success (200):

```json
{
  "message": "Notification received successfully",
  "notification": {
    "channels": ["#general", "#alerts"],
    "contextId": "ctx-123",
    "title": "System Alert",
    "body": "Database backup completed successfully",
    "timestamp": "2024-01-01T12:00:00Z"
  }
}
```

Error (400/500):

```json
{
  "error": "Error message describing the issue"
}
```
