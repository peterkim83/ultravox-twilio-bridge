const CONFIG = {
    API_KEY: 'qXA06KzSmWOcwJLzvXZmVVugaoKdvvxIf2ibv2Ge', // Example에서 제공된 키
    CLUSTER_ID: 's14927',
    REGION: 'nyc1',
    CHANNEL_ID: 'ultravox', // 실제 채널 ID (숫자일 가능성)
    ENDPOINT: 'wss://s14927.nyc1.piesocket.com/v3/',
    
    DEBUG: true,
    RECONNECT_INTERVAL: 3000,
    MAX_RECONNECT_ATTEMPTS: 10
};

// 웹소켓 연결 URL 생성
function buildWebSocketUrl() {
    return `${CONFIG.ENDPOINT}${CONFIG.CHANNEL_ID}?api_key=${CONFIG.API_KEY}&notify_self=1`;
}
