import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TinyMCE = ({ value, onChange, plugins = '' }) => (
  <Editor
    initialValue={value}
    init={{
      height: 200,
      menubar: false,
      plugins: `image code ${plugins}`,
      toolbar: 'undo redo | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | image code',
    }}
    onEditorChange={onChange}
  />
);

export default TinyMCE;
