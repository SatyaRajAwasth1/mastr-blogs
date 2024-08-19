import React from 'react';
import '../styles/BlogPreviews.css';

function BlogPreviews() {
  return (
    <section className="blog-previews">
      <div className="featured-posts">
        <h2>Featured Posts</h2>
        <div className="posts-grid">
          {/* Add your featured posts here */}
        </div>
      </div>
      <div className="recent-posts">
        <h2>Recent Posts</h2>
        <div className="posts-grid">
          {/* Add your recent posts here */}
        </div>
      </div>
    </section>
  );
}

export default BlogPreviews;
