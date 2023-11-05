import notifee, { TimestampTrigger, TriggerType } from '@notifee/react-native';
import moment from 'moment';

import { CHANNEL_NOTIFY } from '../lib/config';

export const createNotification = async (
  title: string,
  body: string,
  time?: number,
) => {
  if (!time || time <= moment.now()) {
    const notifyId = await notifee.displayNotification({
      title,
      body,
      android: {
        channelId: CHANNEL_NOTIFY,
      },
    });
    return notifyId;
  } else {
    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: time,
    };
    const notifyId = await notifee.createTriggerNotification(
      {
        title,
        body,
        android: {
          channelId: 'your-channel-id',
        },
      },
      trigger,
    );
    return notifyId;
  }
};

export const updateNotification = async (
  id: string,
  title: string,
  body: string,
  time: number,
) => {
  const trigger: TimestampTrigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: time,
    // repeatFrequency: RepeatFrequency.WEEKLY,
  };
  const updated = await notifee.createTriggerNotification(
    {
      id,
      title,
      body,
      android: {
        channelId: CHANNEL_NOTIFY,
      },
    },
    trigger,
  );
  return updated;
};

export const cancelNotification = async (notifyId: string) => {
  return notifee.cancelNotification(notifyId);
};
