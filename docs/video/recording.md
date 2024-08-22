<script setup>
import { ref, nextTick } from 'vue'

const categories = ref([
  {
    id: 'category1',
    name: '기본 소개',
    videos: [
      { title: '종합 기록', youtubeId: '1YKjy0OX0D4' },
    ]
  }
])

const selectedVideo = ref(categories.value[0].videos[0])

function selectVideo(video) {
  selectedVideo.value = video

  nextTick(() => {
    const videoElement = document.querySelector('.video-player')
    if (videoElement) {
      videoElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
}

// function handleMoreInfo() {
//   alert('더 알아보기를 클릭했습니다.')
// }

// function handleShare() {
//   alert('공유하기를 클릭했습니다.')
// }
</script>

<!-- 비디오 제목 -->
<h1 class="video-title">{{ selectedVideo.title }}</h1>

<!-- 비디오 플레이어 -->
<div v-if="selectedVideo" class="video-player">
  <iframe 
    width="560" 
    height="315" 
    :src="`https://www.youtube.com/embed/${selectedVideo.youtubeId}`" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen
  ></iframe>
  
  <!-- 더 알아보기 및 공유하기 버튼
  <div class="video-actions">
    <button class="action-button" @click="handleMoreInfo">더 알아보기</button>
    <button class="action-button" @click="handleShare">공유하기</button>
  </div> -->
</div>

<style scoped>
/* 제목 스타일 */
.video-title {
  font-size: 24px;
  margin-bottom: 10px;
}

/* 플레이어 스타일 */
.video-player {
  margin-bottom: 30px;
  padding: 20px;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  position: relative;
  max-width: 600px;
}

/* iframe 스타일 */
.video-player iframe {
  width: 100%;
  max-width: 560px;
  height: 315px;
  margin: 0 auto;
  display: block;
}

/* 액션 버튼 컨테이너 */
.video-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

/* 액션 버튼 스타일 */
.action-button {
  display: inline-block;
  background-color: #1a73e8;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
  border: none;
  cursor: pointer;
}

.action-button:hover {
  background-color: #1558b3;
} 
</style>
