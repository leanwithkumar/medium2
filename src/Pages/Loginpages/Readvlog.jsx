import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Readvlog() {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`https://medium2backend.onrender.com/${blogId}`);
        setBlog(res.data);
      } catch (err) {
        console.error("Failed to fetch blog", err);
      }
    };

    fetchBlog();
  }, [blogId]);

  if (!blog) {
    return <div className="text-center py-10">Loading blog...</div>;
  }

  return (
    <div className="text-gray-700 p-5 font-mono">
      <div className="text-4xl break-words">{blog.title}</div>
      <div className="px-2 text-xl py-2">- {blog.author?.username || 'Unknown'}</div>
      <div className="text-sm text-gray-500">
        {new Date(blog.createdAt).toLocaleString()}
      </div>

      {blog.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {blog.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
              #{tag}
            </span>
          ))}
        </div>
      )}

      <div className="text-xl py-10 whitespace-pre-line break-words">
        {blog.content}
      </div>
    </div>
  );
}

export default Readvlog;
