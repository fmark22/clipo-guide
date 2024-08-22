# 클리포 영상

클리포 활용 방법을 영상으로 확인해 보세요.


<script setup>
import { ref, nextTick } from 'vue'

const categories = ref([
  {
    id: 'category1',
    name: '기본 소개',
    videos: [
      //{ title: '클리포 소개', description: '영상 1 설명', youtubeId: 'wiTCb9JjTzs' },
      { title: '클리포 소개', youtubeId: 'wiTCb9JjTzs' },
      { title: '클리포 설계 이념', youtubeId: 'nosx6aoj8SE' },
      { title: '주요 기능', youtubeId: 'xyDQtWSewwo' },
    ]
  },
  {
    id: 'category2',
    name: '기능별 영상',
    videos: [
      { title: '기본 설정', youtubeId: 'lFhDbDG09TM' },
      { title: '관찰 기록', youtubeId: 'b0g-o2yNDIo' },
      { title: '수행평가 설계', youtubeId: '47k2yJ2DrFQ' },
      { title: '수행평가 과제', description: '+ 학생 과제 제출, PDF 일괄 업로드', youtubeId: 'qfOUth1cyNY' },
      { title: '수행평가 채점', youtubeId: 'sZ-WarOoQZY' },
      { title: '수행평가 자동 채점', youtubeId: 'ZPfXBXPk-vM' },
      { title: '수행평가 종합 기록', youtubeId: '1YKjy0OX0D4' },
      { title: '리포트', youtubeId: '4gr7qMDObzg' },
    ]
  },
  {
    id: 'category3',
    name: '연수 영상',
    videos: [
      { title: '7월 연수 영상', description: '7월 지식샘터 온라인 연수 영상입니다.', youtubeId: '-XW3Q87KAc4' },
    ]
  },
])

const selectedVideo = ref(null)

function selectVideo(video) {
  selectedVideo.value = video

  nextTick(() => {
    const videoElement = document.querySelector('.video-player')
    if (videoElement) {
      videoElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
}
</script>

<div v-if="selectedVideo" class="video-player">
  <p>
  <h1>{{ selectedVideo.title }}</h1>
  </p>
  <iframe 
    width="560" 
    height="315" 
    :src="`https://www.youtube.com/embed/${selectedVideo.youtubeId}`" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen
  ></iframe>
  <p>{{ selectedVideo.description }}</p>
</div>

<template v-for="category in categories" :key="category.id">
  <h2 :id="category.id">{{ category.name }}</h2>
  <div class="video-grid">
    <div v-for="video in category.videos" :key="video.title" class="video-item">
      <img :src="`https://img.youtube.com/vi/${video.youtubeId}/0.jpg`" :alt="`${video.title} 썸네일`">
      <h3>{{ video.title }}</h3>
      <p>{{ video.description }}</p>
      <button @click="selectVideo(video)" class="watch-button">시청하기</button>
    </div>
  </div>
</template>

<style scoped>
.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
.video-item {
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  padding: 10px;
}
.video-item img {
  width: 100%;
  height: auto;
}
.watch-button {
  display: inline-block;
  background-color: #1a73e8;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
  border: none;
  cursor: pointer;
}
.watch-button:hover {
  background-color: #1558b3;
}
.video-player {
  margin-bottom: 30px;
  padding: 20px;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
}
.video-player iframe {
  width: 100%;
  max-width: 560px;
  height: 315px;
  margin: 0 auto;
  display: block;
}
</style>
