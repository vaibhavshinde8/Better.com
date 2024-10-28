// src/app/home/page.js
import styles from './HomePage.module.css'; 

export default function HomePage() {
  return (
    <div className={styles.container}> 
      <h1 className={styles.title}>
        <span>The rate drop you’ve</span>
        <span>been waiting for</span>
      </h1>

<div className={styles.sider}>
  <div className={styles.left}>Start My Aproval</div>
      <img 
  className={styles.image} 
  src="/img.webp" 
  alt="Rate Drop Notification" 
/>

<div className={styles.rating}>
  <div className={styles.flexcompo}>
  <div>
  
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
    
  
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2v15.27z" />
      <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27V2z" fill="rgba(0, 0, 0, 0.1)" />
    </svg>
    <p>4.6 Stars | 3177 Google reviews</p>
  </div>
  
  
  </div>
</div>

</div>
    </div>
  );
}
