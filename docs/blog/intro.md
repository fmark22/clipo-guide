---
layout: doc
---
<br>

# 블로그

<p>이곳에서 클리포 소식을 확인해 보세요🙌</p>

<div class="blog-grid">
  <!-- 첫 번째 포스트 -->
  <a href="first" class="post-link">
    <div class="blog-post">
      <span class="badge badge-new">활용사례</span>
      <h2>클리포 활용 사례 및 수기</h2>
      <p>안용중학교 유주열 선생님의 클리포 활용 사례와 수기를 통해 교육 현장에서의 AI 활용 경험을 공유합니다.</p>
      <div class="author-info">
        <span>안용중학교 유주열 선생님</span>
        <span class="date">2024/01/15</span>
      </div>
    </div>
  </a>

  <!-- 두 번째 포스트 -->
  <a href="second" class="post-link">
    <div class="blog-post">
      <span class="badge badge-new">활용사례</span>
      <h2>2024 클리포 교사 연수 후기</h2>
      <p>2024년 첫 클리포 교사 연수 현장의 생생한 후기와 참여 선생님들의 소감을 전합니다.</p>
      <div class="author-info">
        <span>안용중학교 이대원 선생님</span>
        <span class="date">2024/01/10</span>
      </div>
    </div>
  </a>

  <!-- 세 번째 포스트 -->
  <a href="third" class="post-link">
    <div class="blog-post">
      <span class="badge badge-new">활용사례</span>
      <h2>클리포로 만드는 새로운 교실</h2>
      <p>안용중학교 권병준 선생님이 전하는 클리포를 통한 교실 혁신 이야기를 소개합니다.</p>
      <div class="author-info">
        <span>안용중학교 권병준 선생님</span>
        <span class="date">2024/01/05</span>
      </div>
    </div>
  </a>

  <!-- 네 번째 포스트 -->
  <a href="fourth" class="post-link">
    <div class="blog-post">
      <span class="badge badge">박람회</span>
      <h2>2024 에듀테크 코리아 페어 참가</h2>
      <p>안용중학교 권병준 선생님이 전하는 클리포를 통한 교실 혁신 이야기를 소개합니다.</p>
      <div class="author-info">
        <span>안용중학교 권병준 선생님</span>
        <span class="date">2024/01/05</span>
      </div>
    </div>
  </a>
</div>

<style>
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.post-link {
  text-decoration: none;
  color: inherit;
  display: block;
  cursor: pointer;
}

.blog-post {
  background: #ffffff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
  height: 100%;
}

.blog-post:hover {
  transform: translateY(-3px);
}

.badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: #e0e0e0;
  border-radius: 15px;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.badge-new {
  background: #4CAF50;
  color: white;
}

.blog-post h2 {
  margin: 0.5rem 0;
  font-size: 1.25rem;
  color: #333;
  text-decoration: none;
}

.blog-post p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0.5rem 0;
  text-decoration: none;
}

.author-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #777;
}

/* 추가할 스타일 */
:deep(a) {
  text-decoration: none !important;
  color: inherit !important;
}

:deep(.blog-post *) {
  text-decoration: none !important;
}

/* VitePress 기본 스타일 덮어쓰기 */
.vp-doc a {
  text-decoration: none !important;
  color: inherit !important;
}

.vp-doc a:hover {
  text-decoration: none !important;
  color: inherit !important;
}
</style>
