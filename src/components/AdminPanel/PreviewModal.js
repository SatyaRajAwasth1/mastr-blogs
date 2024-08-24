// src/components/AdminPanel/PreviewModal.js
import React from 'react';
// import './PreviewModal.css';

function PreviewModal({ title, author, postDate, category, tags, featured, content, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>{title}</h2>
        <div className="post-meta">
          <span>By {author}</span> | <span>{new Date(postDate).toLocaleString()}</span> |{' '}
          <span>Category: {category}</span> | <span>Tags: {tags}</span> |{' '}
          <span>{featured ? 'Featured' : 'Not Featured'}</span>
        </div>
        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  );
}

export default PreviewModal;
