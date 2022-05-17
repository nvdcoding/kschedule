import React, {
  memo,
  useRef,
  useState,
} from 'react';

import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from 'react-native';
import Orientation from 'react-native-orientation';
import Video from 'react-native-video';
import {getIconComponent} from 'src/assets/icon';
import {
  IS_IOS,
  isTablet,
} from 'src/base/common/Constants';
import {getSize} from 'src/base/common/responsive';
import {
  compoundLinkImg,
  formatTime,
} from 'src/base/utils/Utils';
import {
  Block,
  Text,
} from 'src/components';
import Color from 'src/theme/Color';

import ProgressVideo from './ProgressComponent';
import ProgressVolumeComponent from './ProgressVolumeComponent';
import styles from './styles';

interface IVideo {
  handleFullVideo?: (isFull: boolean) => void;
  poster: string;
  src: string;
  noFullScreen?: boolean;
  widthVideo?: number;
  heightVideo?: number;
  backgroundColor?: string;
}

const Icon = getIconComponent('goEdu');

const VideoComponent = ({
  handleFullVideo,
  poster,
  src,
  noFullScreen,
  widthVideo,
  heightVideo,
  backgroundColor,
}: IVideo) => {
  const {width, height} = useWindowDimensions();
  const [isPlay, setPlay] = useState<boolean>(false);
  const [paused, setPaused] = useState<boolean>(true);
  const [totalTime, setTotalTime] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const player = useRef(null);
  const [volume, setVolume] = useState<number>(1);
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const [showControl, setShowControl] = useState<boolean>(false);

  const handlePause = () => setPaused(!paused);

  const handleProgressVideo = progress => {
    setCurrentTime(progress.currentTime);
  };

  const handleLoadVideo = data => {
    setTotalTime(data.duration);
  };

  const handleProgress = time => {
    player.current.seek(time);
  };

  const handleFullScreen = () => {
    handleFullVideo(!fullScreen);
    if (IS_IOS) {
      player.current.presentFullscreenPlayer();
    } else {
      setFullScreen(!fullScreen);
      !isTablet &&
        (fullScreen
          ? Orientation.lockToPortrait()
          : Orientation.lockToLandscape());
    }
  };

  const handlePlayVideo = () => {
    setPlay(true);
    setPaused(false);
  };

  const handleShowControl = () => setShowControl(!showControl);

  return (
    <Block
      style={
        fullScreen
          ? {...StyleSheet.absoluteFillObject, zIndex: 100}
          : [styles.video, backgroundColor && {backgroundColor}]
      }>
      {!isPlay && (
        <ImageBackground
          style={[
            styles.stylesBackgroundVideo,
            widthVideo && {width: widthVideo, height: heightVideo},
          ]}
          source={{
            uri: compoundLinkImg(poster),
          }}>
          <Block style={styles.fillBackgroundVideo} />
          <TouchableOpacity
            style={styles.btnPlayVideo}
            activeOpacity={0.5}
            onPress={handlePlayVideo}>
            <Icon name={'Polygon-1'} size={getSize.m(18)} color={Color.WHITE} />
          </TouchableOpacity>
        </ImageBackground>
      )}
      <Block
        style={[
          {
            display: isPlay ? 'flex' : 'none',
            backgroundColor: '#2D2A3F',
          },
        ]}>
        <TouchableWithoutFeedback onPress={handleShowControl}>
          <Video
            source={{
              uri: compoundLinkImg(src),
            }}
            ref={player}
            style={
              fullScreen
                ? {width, height}
                : isTablet
                ? widthVideo
                  ? {width: widthVideo, height: heightVideo}
                  : styles.stylesVideoTablet
                : styles.stylesVideo
            }
            paused={paused}
            resizeMode={fullScreen ? 'contain' : 'cover'}
            onProgress={handleProgressVideo}
            onLoad={handleLoadVideo}
            volume={volume}
            controls={false}
          />
        </TouchableWithoutFeedback>
        {showControl && (
          <Block
            style={[
              styles.barControl,
              isTablet && styles.barControlTablet,
              {
                width: fullScreen
                  ? width
                  : widthVideo
                  ? widthVideo
                  : width - getSize.m(isTablet ? 280 : 40),
              },
            ]}>
            {fullScreen && <StatusBar hidden />}
            <TouchableOpacity
              onPress={handlePause}
              activeOpacity={0.5}
              style={styles.btnPause}>
              <Icon
                name={paused ? 'Polygon-1' : 'Pause'}
                size={getSize.m(paused ? 12 : 22)}
                color={'#F7F7FC'}
              />
            </TouchableOpacity>
            <ProgressVideo
              handleProgress={handleProgress}
              totalTime={totalTime}
              currentTime={currentTime}
            />
            <Text style={styles.textTime}>
              {formatTime(currentTime, totalTime)}
            </Text>
            <ProgressVolumeComponent handleVolume={setVolume} />
            {!noFullScreen ? (
              <TouchableOpacity
                onPress={handleFullScreen}
                activeOpacity={0.5}
                style={styles.btnPause}>
                <Icon
                  name={'Frame-688'}
                  size={getSize.m(18)}
                  color={'#F7F7FC'}
                />
              </TouchableOpacity>
            ) : (
              <Block marginRight={15} />
            )}
          </Block>
        )}
      </Block>
    </Block>
  );
};

export default memo(VideoComponent);
