<template>
    <div>
      <h1>
        {{ title }}
        <!-- 공유 버튼 추가 -->
        <button @click="sharePage" class="share-button">
          Share
        </button>
      </h1>
      <Content />
    </div>
  </template>
  
  <script setup>
  import { useData } from 'vitepress'
  
  const { page } = useData()
  
  function sharePage() {
    const url = window.location.href
    const title = page.value.title || document.title
  
    if (navigator.share) {
      navigator.share({
        title: title,
        url: url
      }).catch(error => console.log('Error sharing', error))
    } else {
      alert(`Share this link: ${url}`)
    }
  }
  </script>
  
  <style>
  .share-button {
    margin-left: 10px;
    cursor: pointer;
    padding: 5px 10px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    font-size: 14px;
  }
  </style>
  