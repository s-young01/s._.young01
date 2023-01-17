import React, {useEffect} from 'react';

const Timer = () => {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('1초마다 타이머 돌아가는 중...');
        }, 1000)
        // 이래의 return문은 cleanup함수다 => useEffect에 대한 뒷정리를 해주는 함수
        return () => {
            clearInterval(timer);
            console.log('타이머가 종료되었습니다.');
        }
    }, [])
    return (
        <div>
           <span>타이머를 시작합니다. 콘솔을 봐주세요</span> 
        </div>
    );
};

export default Timer;