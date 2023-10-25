import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const vimeoPlayer = new Player('vimeo-player');

const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

const updateCurrentTime = (time) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, time);
};

const getSavedTime = () => {
    return Number(localStorage.getItem(LOCAL_STORAGE_KEY)) || 0;
};

vimeoPlayer.on('timeupdate', throttle((event) => {
  const currentTime = event.seconds;
  updateCurrentTime(currentTime);
}, 1000));

vimeoPlayer.setCurrentTime(getSavedTime());
