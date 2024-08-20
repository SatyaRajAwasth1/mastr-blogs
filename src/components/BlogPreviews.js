import React from 'react';
import '../App.css';
import '../styles/BlogPreviews.css';

function BlogPreviews() {
  const featuredPosts = [
    {
      id: 1,
      title: 'How to Use Emoji in Your Blog',
      date: 'Jul 15, 21',
      description: 'A comprehensive guide to using emojis in your blog posts.',
      image: 'https://fastly.picsum.photos/id/1015/400/250.jpg?hmac=lN47f1TdLxeJFj5YqpUhXXHdk00TBKZgYm3ea7vHl0A',
      link: '#'
    },
    {
      id: 2,
      title: 'Understanding Markdown Syntax',
      date: 'Jul 14, 21',
      description: 'Learn the basics of Markdown and how to use it effectively.',
      image: 'https://fastly.picsum.photos/id/1019/500/200.jpg?hmac=4Vl-0p8aIPQiCqFgwiuw3Tmo4605BkLsfAcpAEa4E1Y',
      link: '#'
    },
    {
      id: 3,
      title: 'Sample post for demo',
      date: 'Jul 14, 21',
      description: 'Learn the basics of Markdown and how to use it effectively.',
      image: 'https://fastly.picsum.photos/id/1050/400/250.jpg?hmac=aIppwE-YLtk-VJZER9_Um32dQMQK5sd1ZJeOH4X1JVo',
      link: '#'
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: 'Introduction to React Hooks',
      date: 'Jul 13, 21',
      description: 'A beginner’s guide to React Hooks and how to use them.',
      image: 'https://fastly.picsum.photos/id/1050/400/250.jpg?hmac=aIppwE-YLtk-VJZER9_Um32dQMQK5sd1ZJeOH4X1JVo',
      link: '#'
    },
    {
      id: 5,
      title: 'Setting Up a Personal Blog',
      date: 'Jul 12, 21',
      description: 'Step-by-step guide to setting up your personal blog.',
      image: 'https://fastly.picsum.photos/id/1015/400/250.jpg?hmac=lN47f1TdLxeJFj5YqpUhXXHdk00TBKZgYm3ea7vHl0A',
      link: '#'
    },
  ];

  return (
    <section className="blog-previews">
      <div className='section-content'>
        <div className="featured-posts">
          <h2>Featured Posts</h2>
          <div className="posts-grid">
            {featuredPosts.map(post => (
              <a key={post.id} href={post.link} className="post-card">
                <div className="post-image-container">
                  <img src={post.image} alt={post.title} className="post-image" />
                  <div className="date-overlay">{post.date}</div>
                </div>
                <div className="post-info">
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="recent-posts">
          <h2>Recent Posts</h2>
          <div className="posts-grid">
            {recentPosts.map(post => (
              <a key={post.id} href={post.link} className="post-card">
                <div className="post-image-container">
                  <img src={post.image} alt={post.title} className="post-image" />
                  <div className="date-overlay">{post.date}</div>
                </div>
                <div className="post-info">
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogPreviews;
