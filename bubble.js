// script.js

document.addEventListener('DOMContentLoaded', function() {
    const bubblesContainer = document.querySelector('.bubbles');
    const numberOfBubbles = 10; // 생성할 버블의 총 개수

    function createBubble() {
        const bubble = document.createElement('img/bubble.png');
        // 여기에 사용할 버블 이미지 경로를 넣어주세요.
        // 예시: bubble.png, circle.svg 등
        
        // 랜덤 너비 설정 (최소 20px, 최대 80px)
        const randomWidth = Math.random() * (80 - 20) + 20;
        bubble.style.width = `${randomWidth}px`;
        bubble.style.height = `${randomWidth}px`; // 원형을 유지하기 위해 width와 동일하게

        // 랜덤 애니메이션 딜레이 설정 (최소 0초, 최대 5초)
        const randomDelay = Math.random() * 5;
        bubble.style.animationDelay = `${randomDelay}s`;

        // 랜덤 시작 위치 (좌우로 퍼지게)
        // 화면 너비의 10% ~ 90% 사이에서 랜덤 위치
        const randomLeft = Math.random() * 80 + 10; // 10% ~ 90%
        bubble.style.left = `${randomLeft}vw`; // viewport width 단위 사용

        // z-index를 랜덤으로 주어 겹칠 때 순서가 다르게 보이게
        bubble.style.zIndex = Math.floor(Math.random() * 10);

        // 애니메이션 속도도 랜덤으로 (7초 ~ 15초)
        const randomDuration = Math.random() * (15 - 7) + 7;
        bubble.style.animationDuration = `${randomDuration}s`;
        
        // 생성된 버블을 컨테이너에 추가
        bubblesContainer.appendChild(bubble);

        // 애니메이션이 끝나면 버블을 제거하고 다시 생성하여 무한 반복
        bubble.addEventListener('animationend', () => {
            bubble.remove(); // 기존 버블 제거
            createBubble(); // 새 버블 생성
        });
    }

    // 초기 버블들을 생성
    for (let i = 0; i < numberOfBubbles; i++) {
        createBubble();
    }
});