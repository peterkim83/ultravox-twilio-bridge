// Pie Socket 설정 - 실제 값으로 변경 필요
const CONFIG = {
    // TODO: Pie Socket에서 받은 실제 값으로 변경하세요
    CHANNEL_ID: 'ultravox-twilio-bridge-' + Math.random().toString(36).substr(2, 9),
    API_KEY: 'qXA06KzSmWOcwJLzvXZmVVugaoKdvvxIf2ibv2Ge', // 반드시 변경 필요!
    ENDPOINT: 'wss://free.piesocket.com/v3/',
    
    // 디버그 및 연결 설정
    DEBUG: true,
    RECONNECT_INTERVAL: 3000,
    MAX_RECONNECT_ATTEMPTS: 10,
    
    // 오디오 설정
    AUDIO_SAMPLE_RATE: 8000,
    BUFFER_SIZE: 20000
};

// 설정 검증
function validateConfig() {
    if (!CONFIG.API_KEY || CONFIG.API_KEY === 'qXA06KzSmWOcwJLzvXZmVVugaoKdvvxIf2ibv2Ge') {
        const errorMsg = '⚠️ Pie Socket API 키를 설정해주세요!\n\n' +
                        '1. https://www.piesocket.com 에서 계정 생성\n' +
                        '2. 새 채널 생성\n' +
                        '3. API 키를 복사해서 config.js 파일에 붙여넣기';
        
        console.error(errorMsg);
        alert(errorMsg);
        return false;
    }
    return true;
}

// 페이지 로드 시 검증
document.addEventListener('DOMContentLoaded', validateConfig);
