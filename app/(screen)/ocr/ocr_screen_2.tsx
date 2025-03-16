import React, { useState, useEffect, useRef } from 'react';
import { View, Button, Text } from 'react-native';
import { CameraView, CameraType, Camera } from 'expo-camera';
import { useRouter } from 'expo-router';

export default function OcrScreen2() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const cameraRef = useRef<CameraView>(null);
  const [isCameraReady, setIsCameraReady] = useState<boolean>(false);
  const [type, setType] = useState<CameraType>('back');
  const router = useRouter()

  // Request camera permissions
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync(); // Fixed method name
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleCameraReady = () => {
    setIsCameraReady(true);
  };

  const takePicture = async () => {
    router.push('/(screen)/ocr/ocr_screen_3')
    if (cameraRef.current && isCameraReady) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        if (photo) {
          console.log('Photo taken:', photo.uri);
          // Handle the photo URI as needed
        }
      } catch (error) {
        console.log('Error taking photo:', error);
      }
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <CameraView
        style={{ flex: 1 }}
        facing={type}
        ref={cameraRef}
        onCameraReady={handleCameraReady}
      />
      <Button title="Take Picture" onPress={takePicture} disabled={!isCameraReady} />
      <Button
        title="Flip Camera"
        onPress={() => {
          setType(
            type === 'back' ? 'front' : 'back'
          );
        }}
      />
    </View>
  );
}
