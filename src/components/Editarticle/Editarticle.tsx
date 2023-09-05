import { useState,useRef,useEffect } from "react";
import { Editarticle, updateArticle } from "../../services/userApi";
import JoditEditor from 'jodit-react';
import { useParams,useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Edit(){
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');
    const editor = useRef(null);
    const { articleId } = useParams();
    const navigate=useNavigate()
    useEffect(() => {
        // Fetch the article details when the component mounts
        fetchArticleDetails(articleId);
      }, [articleId]);
    
    const fetchArticleDetails=async(id:any)=>{
        try{
            const response=await Editarticle(id)
            const { articleDetail } = response.data;
            setTitle(articleDetail.title);
            setCategory(articleDetail.category);
            setContent(articleDetail.content);
        }catch(error){
            console.error('error in fetching',error)
        }
    }

    const handleCreatepost = async () => {
        try {
          // Make an API request to update the article
          const response = await updateArticle({
            title,
            category,
            content,
            articleId, // Replace 'your-article-id' with the actual article ID
        });
          console.log('Article updated successfully:', response.data);
          Swal.fire("Updated")
        } catch (error) {
          console.error('Error updating article:', error);
        }
      };
      
    


    const config:any =  {
        zIndex: 0,
        readonly: false,
        activeButtonsInReadOnly: ['source', 'fullsize', 'print', 'about'],
        toolbarButtonSize: 'middle',
        theme: 'default',
        enableDragAndDropFileToEditor: true,
        saveModeInCookie: false,
        spellcheck: true,
        editorCssClass: false,
        triggerChangeEvent: true,
        height: 220,
        direction: 'ltr',
        language: 'en',
        debugLanguage: false,
        i18n: 'en',
        tabIndex: -1,
        toolbar: true,
        enter: 'P',
        useSplitMode: false,
        colorPickerDefaultTab: 'background',
        imageDefaultWidth: 100,
        removeButtons: ['source', 'fullsize', 'about', 'outdent', 'indent', 'video', 'print', 'table', 'fontsize', 'superscript', 'subscript', 'file', 'cut', 'selectall'],
        disablePlugins: ['paste', 'stat'],
        events: {},
        textIcons: false,
        // uploader: {
        //   insertImageAsBase64URI: true
        // },
        uploader: {
          insertImageAsBase64URI: true,
          url: '/upload',
          format:'json',
          files: {
            mimeTypes: [
              'application/pdf',
              'application/msword',
              'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
              'image/webp', // Add support for .webp files
              'image/jpeg',  // Add support for JPEG images
              'image/png',   // Add support for PNG images
              'image/gif',   // Add support for GIF images
            ],
            maxFileSize: 1024 * 1024 * 10, // 10 MB
            insertFileAsBase64URI: true,
          },
        },
        placeholder: '',
        showXPathInStatusbar: false
      };
    
    return(
        <>
        <div className="bg-contain bg-zinc-100">
        <div className="max-w-3xl mx-auto p-8">
          <h1 className="text-3xl font-bold mb-4">Title:</h1>
          <input
            type="text"
            className="w-full border rounded-lg p-2 mb-4 font-bold text-2xl"
            placeholder="Enter blog title here..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div>
            <label className="block text-xl font-bold mb-2" htmlFor="category">
              Category:
            </label>
            <input
              type="text"
              id="category"
              name="category"
              className="w-full border rounded-lg p-2 mb-4 text-xl"
              placeholder="Enter blog category here..."
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <h2 className="text-xl font-bold mb-2">Paragraph:</h2>
          <div className="border rounded-lg p-4 mb-4">
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              tabIndex={1}
              onBlur={(newContent) => setContent(newContent)}
              onChange={(newContent) => {}}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleCreatepost}
          >
            Update Post
          </button>
        </div>
      </div>
        </>
    )
}
export default Edit