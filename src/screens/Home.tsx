import {
  Alert,
  Platform,
  StatusBar,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import CText from '../components/CText';
import Button from '../components/Button';
import Loading from '../components/Loading';
import {readText, stopReading, useSpeechToText} from '../hooks/useSpeachTTS';
import {useVoiceRecognition} from '../hooks/useVoiceRecognition';
import {Canvas, Circle} from '@shopify/react-native-skia';
import {
  Easing,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
// import {callOpenAIAPI} from '../services/openAIQuery';

const Home = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isInterviewStarted, setInterveiwStarted] = useState<boolean>(false);
  const [isRecording, setIsRecording] = useState(false);
  const x = useSharedValue(0);
  const {gptSpeaking, setGptSpeaking} = useSpeechToText(x);

  const apiCalling = async (t?: string) => {
    if (t === undefined) {
      Alert.alert('PLease answer the question');
      return;
    }

    setLoading(true);
    setGptSpeaking(true);
    // api call to openAI for starting a interview with a random system design
    //TODO: create a array of system design ques and ask the gpt to start a convesration on it.
    // Actual Api call
    // const response = await callOpenAIAPI(t);
    // console.log(response);

    const res: string = await new Promise<string>((resolve, _reject) => {
      setTimeout(() => resolve(t), 3000);
    });
    console.log(res);
    // gets response, now use TTS to speak to user
    startAnimation();
    readText(res);

    setLoading(false);
  };

  const startInterview = async () => {
    setInterveiwStarted(true);
    apiCalling(
      "Let's start mock system design interview. Can you explain how a url shortner works?",
    );
  };

  const interupt = () => {
    x.value = 0;
    stopReading();
  };

  const {results, _startRecognizing, _stopRecognizing, _destroyRecognizer} =
    useVoiceRecognition();

  const startRecognition = () => {
    setIsRecording(true);
    _startRecognizing();
  };

  const StopRecognition = () => {
    setIsRecording(false);
    _stopRecognizing();
    _destroyRecognizer();
    apiCalling(results?.[0]);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {width, height} = useWindowDimensions();

  const startAnimation = () => {
    x.value = withRepeat(
      withTiming(100, {duration: 1000, easing: Easing.inOut(Easing.ease)}),
      -1,
      true,
    );
  };

  return (
    <View style={styles.container}>
      <CText style={styles.textStyle}>Mock System Design</CText>
      <CText>{results?.[0]}</CText>
      <Canvas style={[styles.canvas, {width: width - 30}]}>
        <Circle cx={(width - 30) / 2} cy={200} color="#FFFFFF" r={x} />
      </Canvas>
      <View>
        {isInterviewStarted && !gptSpeaking && (
          <Button
            style={styles.marginBottom}
            onPress={isRecording ? StopRecognition : startRecognition}>
            <CText>{isRecording ? 'Stop' : 'Speak'}</CText>
          </Button>
        )}
        {isInterviewStarted ? (
          gptSpeaking ? (
            <Button onPress={interupt}>
              <CText style={styles.buttonText}>Interupt</CText>
            </Button>
          ) : null
        ) : (
          <Button onPress={startInterview}>
            <CText style={styles.buttonText}>Start Mock Interview</CText>
          </Button>
        )}
      </View>
      <Loading visible={loading} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 15,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
  canvas: {
    height: 400,
  },
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 18,
  },
  marginBottom: {
    marginBottom: 15,
  },
});
