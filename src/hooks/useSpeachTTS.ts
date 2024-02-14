import {useState} from 'react';
import {SharedValue} from 'react-native-reanimated';
import Tts from 'react-native-tts';

export const useSpeechToText = (x: SharedValue<number>) => {
  const [gptSpeaking, setGptSpeaking] = useState<boolean>(false);
  Tts.setDefaultLanguage('en-IE');
  Tts.addEventListener('tts-start', event => console.log('start', event));
  Tts.addEventListener('tts-finish', event => {
    console.log('finish', event);
    setGptSpeaking(false);
    if (x) {
      x.value = 0;
    }
  });
  Tts.addEventListener('tts-cancel', event => console.log('cancel', event));

  return {
    gptSpeaking,
    setGptSpeaking,
  };
};

export const readText = (text: string) => {
  Tts.stop();
  Tts.speak(text);
};

export const stopReading = () => {
  Tts.stop();
};
