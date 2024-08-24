import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { TextField, Button, Typography, Paper, Grid } from '@mui/material';
import '../../styles/BlogWriter.css';

function BlogWriter() {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleEditorChange = (content) => {
    setContent(content);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Blog Title:', title);
    console.log('Blog Category:', category);
    console.log('Blog content:', content);
    // Add functionality to save the blog content
  };

  return (
    <Paper elevation={4} className="blog-writer-container">
      <Typography variant="h4" component="h2" className="title">
        Write Your Blog
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Blog Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              InputLabelProps={{ style: { color: '#9ca3af' } }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-control"
              InputLabelProps={{ style: { color: '#9ca3af' } }}
            />
          </Grid>
          <Grid item xs={12}>
            <Editor
              apiKey="signup in tinymce website and get the key and paste here"
              initialValue="<p>Start writing here...</p>"
              init={{
                height: 350,
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
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              className="submit-button"
            >
              Submit Blog
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default BlogWriter;
