import React, { useState } from 'react';
import '../../styles/AdminPanel/AddPost.css';
import { Editor } from '@tinymce/tinymce-react';
import PreviewModal from './PreviewModal';
import { GrView } from "react-icons/gr";
import { RiArrowDropDownLine } from "react-icons/ri";

function AddPost() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [postDate, setPostDate] = useState('');
  const [postTime, setPostTime] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [publishedGlobally, setPublishedGlobally] = useState(false);
  const [publishedInEnglish, setPublishedInEnglish] = useState(false);
  const [contentBlocks, setContentBlocks] = useState([{ type: 'text', content: '' }]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [showSaveOptions, setShowSaveOptions] = useState(false);

  const handleEditorChange = (content, index) => {
    const updatedBlocks = [...contentBlocks];
    updatedBlocks[index].content = content;
    setContentBlocks(updatedBlocks);
  };

  const handleAddBlock = () => {
    setContentBlocks([...contentBlocks, { type: 'text', content: '' }]);
  };

  const handleRemoveBlock = (index) => {
    const updatedBlocks = contentBlocks.filter((_, i) => i !== index);
    setContentBlocks(updatedBlocks);
  };

  const handleSaveOption = (option) => {
    // Handle save draft or schedule post based on the selected option
    console.log(`Save as ${option}`);
    setShowSaveOptions(false);
  };

  return (
    <div className="add-post-container">
      <div className="top-bar">
        <input
          type="text"
          className="post-title-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title"
          required
        />
        <div className="right-actions">
          <button type="button" className="preview-btn" onClick={() => setPreviewVisible(true)}>
            <GrView /> Preview
          </button>
          <div className="save-btn-container">
            <button
              type="button"
              className="save-btn"
              onClick={() => setShowSaveOptions(!showSaveOptions)}
            >
            Save <RiArrowDropDownLine /> 
            </button>
            {showSaveOptions && (
              <div className="save-options">
                <button type="button" onClick={() => handleSaveOption('Draft')}>
                  Save Draft
                </button>
                <button type="button" onClick={() => handleSaveOption('Schedule')}>
                  Schedule Post
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <form className="post-form">
        <div className="form-left">
          {contentBlocks.map((block, index) => (
            <div className="block-container" key={index}>
              <div className="block-header">
                <h3>Block {index + 1}</h3>
                <div className="block-controls">
                  <button type="button" onClick={() => handleRemoveBlock(index)}>
                    Remove
                  </button>
                </div>
              </div>
              <div className="block-content">
                <Editor
                  apiKey="..."
                  value={block.content}
                  init={{
                    height: 200,
                    menubar: false,
                    plugins: [
                      'advlist autolink lists link image charmap preview anchor',
                      'searchreplace visualblocks code fullscreen',
                      'insertdatetime media table help wordcount',
                    ],
                    toolbar:
                      'undo redo | formatselect | bold italic | \
                      alignleft aligncenter alignright alignjustify | \
                      bullist numlist outdent indent | removeformat | help',
                  }}
                  onEditorChange={(content) => handleEditorChange(content, index)}
                />
              </div>
            </div>
          ))}
          <button type="button" className="add-block-btn" onClick={handleAddBlock}>
            Add Block
          </button>
        </div>
        <div className="form-right">
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
            <label htmlFor="postDate">Post Date</label>
            <input
              type="date"
              id="postDate"
              value={postDate}
              onChange={(e) => setPostDate(e.target.value)}
              required
            />
            <label htmlFor="postTime">Post Time</label>
            <input
              type="time"
              id="postTime"
              value={postTime}
              onChange={(e) => setPostTime(e.target.value)}
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
              placeholder="Enter categories (comma-separated)"
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
              placeholder="Enter tags (comma-separated)"
            />
          </div>
          <div className="form-group">
            <label>Featured </label>
            <label className="switch">
              <input
                type="checkbox"
                checked={publishedGlobally}
                onChange={(e) => setPublishedGlobally(e.target.checked)}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </form>
      {previewVisible && (
        <PreviewModal
          title={title}
          author={author}
          postDate={postDate}
          postTime={postTime}
          category={category}
          tags={tags}
          publishedGlobally={publishedGlobally}
          publishedInEnglish={publishedInEnglish}
          contentBlocks={contentBlocks}
          onClose={() => setPreviewVisible(false)}
        />
      )}
    </div>
  );
}

export default AddPost;
