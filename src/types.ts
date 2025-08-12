export interface SlackNotificationEvent {
  channels: string[];
  contextId?: string;
  title: string;
  body: string;
  timestamp: Date;
}
