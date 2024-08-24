import React, { useState } from 'react';
import '../../styles/AdminPanel/AddPost.css';
import { Editor } from '@tinymce/tinymce-react';
import PreviewModal from './PreviewModal';

function AddPost() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [postDate, setPostDate] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [featured, setFeatured] = useState(false);
  const [content, setContent] = useState('');
  const [previewVisible, setPreviewVisible] = useState(false);

  const handleEditorChange = (content, editor) => {
    setContent(content);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., save post)
    console.log({
      title,
      author,
      postDate,
      category,
      tags,
      featured,
      content,
    });
  };

  return (
    <div className="add-post-container">
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-left">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter author name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="postDate">Post Date & Time</label>
            <input
              type="datetime-local"
              id="postDate"
              value={postDate}
              onChange={(e) => setPostDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter category"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="tags">Tags</label>
            <input
              type="text"
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="Enter tags, separated by commas"
            />
          </div>
          <div className="form-group toggle-group">
            <label htmlFor="featured">Feature on Homepage</label>
            <label className="switch">
              <input
                type="checkbox"
                id="featured"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <div className="form-right">
          <div className="editor-container">
            <Editor
              apiKey="..."
              value={content}
              init={{
                height: 400,
                menubar: false,
                plugins: [
                  'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                  'anchor', 'searchreplace', 'visualblocks', 'fullscreen', 'code',
                  'insertdatetime', 'media', 'table', 'help', 'wordcount', 'codesample',
                  'emoticons', 'quickbars', 'accordion', 'charactermap'
                ],
                toolbar: 'undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | '+
                ' bullist numlist outdent indent | image link removeformat emoticons codesample | fullscreen  | ' +
                   'preview searchreplace accordion | insertdatetime charmap | code help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
              }}
              onEditorChange={handleEditorChange}
            />
          </div>
        </div>
        <div className="form-actions">
          <button type="button" className="preview-btn" onClick={() => setPreviewVisible(true)}>
            Preview
          </button>
          <button type="submit" className="save-btn">
            Save
          </button>
        </div>
      </form>
      {previewVisible && (
        <PreviewModal
          title={title}
          author={author}
          postDate={postDate}
          category={category}
          tags={tags}
          featured={featured}
          content={content}
          onClose={() => setPreviewVisible(false)}
        />
      )}
    </div>
  );
}

export default AddPost;
