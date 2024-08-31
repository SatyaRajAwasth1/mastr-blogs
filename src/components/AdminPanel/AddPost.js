import React, { useState } from 'react';
import '../../styles/AdminPanel/AddPost.css';
import { Editor } from '@tinymce/tinymce-react';
import PreviewModal from './PreviewModal';
import { GrView } from 'react-icons/gr';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { FaArrowUp, FaArrowDown, FaTrash } from 'react-icons/fa';
import { RiDragMove2Line } from 'react-icons/ri';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useDropzone } from 'react-dropzone';

function AddPost() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [postDate, setPostDate] = useState('');
  const [postTime, setPostTime] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [featured, setFeatured] = useState(false);
  const [contentBlocks, setContentBlocks] = useState([{ type: 'text', content: '' }]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [showSaveOptions, setShowSaveOptions] = useState(false);
  const [showAddBlockOptions, setAddBlockOptions] = useState(false);
  const [selectedTab, setSelectedTab] = useState('Content');

  const handleEditorChange = (content, index) => {
    const updatedBlocks = [...contentBlocks];
    updatedBlocks[index].content = content;
    setContentBlocks(updatedBlocks);
  };

  const handleAddBlock = (type) => {
    setContentBlocks([...contentBlocks, { type, content: '' }]);
    setAddBlockOptions(false);
  };

  const handleRemoveBlock = (index) => {
    const updatedBlocks = contentBlocks.filter((_, i) => i !== index);
    setContentBlocks(updatedBlocks);
  };

  const handleSaveOption = (option) => {
    console.log(`Save as ${option}`);
    setShowSaveOptions(false);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedBlocks = Array.from(contentBlocks);
    const [movedBlock] = reorderedBlocks.splice(result.source.index, 1);
    reorderedBlocks.splice(result.destination.index, 0, movedBlock);

    setContentBlocks(reorderedBlocks);
  };

  const moveBlock = (index, direction) => {
    const updatedBlocks = [...contentBlocks];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;

    if (targetIndex < 0 || targetIndex >= updatedBlocks.length) return;

    const [movedBlock] = updatedBlocks.splice(index, 1);
    updatedBlocks.splice(targetIndex, 0, movedBlock);

    setContentBlocks(updatedBlocks);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      // Handle file upload logic here
      console.log(acceptedFiles);
    }
  });

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
          <div className="tabs-container">
            <div
              className={`tab ${selectedTab === 'Content' ? 'active' : ''}`}
              onClick={() => setSelectedTab('Content')}
            >
              Content
            </div>
            <div
              className={`tab ${selectedTab === 'Meta' ? 'active' : ''}`}
              onClick={() => setSelectedTab('Meta')}
            >
              Meta
            </div>
            <div
              className={`tab ${selectedTab === 'SEO' ? 'active' : ''}`}
              onClick={() => setSelectedTab('SEO')}
            >
              SEO
            </div>
          </div>

          {selectedTab === 'Content' && (
            <div className="content-container">
              <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      {contentBlocks.map((block, index) => (
                        <Draggable key={index} draggableId={String(index)} index={index}>
                          {(provided) => (
                            <div
                              className={`block-container ${provided.isDragging ? 'dragging' : ''}`}
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <div className="block-header">
                                <div className="block-header-left">
                                  <h3>{block.type.charAt(0).toUpperCase() + block.type.slice(1)} </h3>
                                </div>
                                <div className="block-controls">
                                  <FaTrash
                                    className="control-icon delete-icon"
                                    onClick={() => handleRemoveBlock(index)}
                                  />
                                  <FaArrowDown
                                    className={`control-icon ${index === contentBlocks.length - 1 ? 'control-icon-disabled' : ''}`}
                                    onClick={() => moveBlock(index, 'down')}
                                  />
                                  <FaArrowUp
                                    className={`control-icon ${index === 0 ? 'control-icon-disabled' : ''}`}
                                    onClick={() => moveBlock(index, 'up')}
                                  />
                                  <RiDragMove2Line
                                    className="drag-icon"
                                    {...provided.dragHandleProps}
                                  />
                                </div>
                              </div>

                              <div className="block-content">
                                {block.type === 'text' && (
                                  <Editor
                                    apiKey="..."
                                    value={block.content}
                                    init={{
                                      height: 200,
                                      menubar: false,
                                      plugins: [
                                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                        'anchor', 'searchreplace', 'visualblocks', 'fullscreen', 'code',
                                        'insertdatetime', 'media', 'table', 'help', 'wordcount', 'codesample',
                                        'emoticons', 'quickbars', 'accordion', 'charactermap'
                                      ],
                                      toolbar: 'undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | '+
                                      ' bullist numlist outdent indent | fullscreen | image link removeformat emoticons codesample  | ' +
                                         'preview searchreplace accordion | insertdatetime charmap | code help',
                                         content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                    }}
                                    onEditorChange={(content) => handleEditorChange(content, index)}
                                  />
                                )}
                                {block.type === 'image' && (
                                  <div className="image-block-container" {...getRootProps()}>
                                    <label htmlFor={`upload-image-${index}`}>
                                      Upload Image
                                    </label>
                                    <input
                                      id={`upload-image-${index}`}
                                      type="file"
                                      {...getInputProps()}
                                    />
                                    <p>Drag & drop an image here, or click to select one</p>
                                  </div>
                                )}
                                {block.type === 'code' && (
                                  <Editor
                                    apiKey="..."
                                    value={block.content}
                                    init={{
                                      height: 200,
                                      menubar: false,
                                      plugins: ['codesample', 'fullscreen'],
                                      toolbar: 'codesample | fullscreen',
                                      readonly: true
                                    }}
                                    onEditorChange={(content) => handleEditorChange(content, index)}
                                  />
                                )}
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>

              <div className="add-block-btn-container">
                <button
                  type="button"
                  className="preview-btn"
                  onClick={() => setAddBlockOptions(!showAddBlockOptions)}
                >
                  <IoMdAddCircleOutline />
                  Add block
                </button>
                {showAddBlockOptions && (
                  <div className="add-block-options">
                    <button type="button" onClick={() => handleAddBlock('text')}>
                      Text
                    </button>
                    <button type="button" onClick={() => handleAddBlock('image')}>
                      Image
                    </button>
                    <button type="button" onClick={() => handleAddBlock('code')}>
                      Code Snippet
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Add content for Meta and SEO tabs */}
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
            <label>Featured</label>
            <label className="switch">
              <input
                type="checkbox"
                checked={featured}
                onChange={() => setFeatured(!featured)}
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
          featured={featured}
          contentBlocks={contentBlocks}
          onClose={() => setPreviewVisible(false)}
        />
      )}
    </div>
  );
}

export default AddPost;
