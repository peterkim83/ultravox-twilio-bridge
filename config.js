const CONFIG = {
    API_KEY: 'qXA06KzSmWOcwJLzvXZmVVugaoKdvvxIf2ibv2Ge',
    API_SECRET: 'Dk43nGkByA57W28owcEHEpGqnh6aJNOt',
    API_ID: '19573',
    CLUSTER_ID: 's14927.nyc1',
    CHANNEL_ID: '1',  // 숫자 채널 ID 사용
    ENDPOINT: 'wss://s14927.nyc1.piesocket.com/v3/',
    
    DEBUG: true,
    RECONNECT_INTERVAL: 3000,
    MAX_RECONNECT_ATTEMPTS: 10
};

// 웹소켓 연결 URL (Example URL 기준)
const wsUrl = `wss://s14927.nyc1.piesocket.com/v3/1?api_key=${CONFIG.API_KEY}&notify_self=1`;
