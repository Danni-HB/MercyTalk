import React, { useEffect,useState } from "react";
import ReactPlayer from "react-player/youtube";
import { Link } from 'react-router-dom';


const CharacterPage = ({ name, profileImage, description, abilities, counters, combos, isAuthenticated }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleVideoClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  function extractVideoId(url) {
    const match = url.match(/v=([^&]+)/);
    return match ? match[1] : null;
  }  


  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  const handleAddComment = () => {
    if (!newComment.trim() || !isAuthenticated) return;

    const commentData = {
      id: Date.now(),
      text: newComment,
      user: "Usuario registrado",
    };

    setComments([...comments, commentData]);
    setNewComment("");
  };

  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/images/background.png')" }}>
      <nav className="navbar-container">
        <div className="navbar-links">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/heroes" className="nav-item">Héroes</Link>
          <Link to="/login" className="nav-item">Login</Link>
          <Link to="/register" className="nav-item">Register</Link>
        </div>
      </nav>
      <main className="max-w-6xl mx-auto p-6">
        {/* Contenedor del personaje */}
        <div className="bg-gray-900 bg-opacity-80 rounded-lg p-6 text-white text-center backdrop-blur-lg">
          <h1 className="text-4xl font-bold">{name}</h1>
          <img src={profileImage} alt={name} className="max-width: 20%; y height: 10%; mx-auto mt-4 rounded-full shadow" /> {/* Tamaño ajustado */}
          <p className="mt-4 text-gray-300">{description}</p>
        </div>

        {/* Tabla de habilidades */}
        <div className="mt-8 bg-gray-900 bg-opacity-80 rounded-lg p-4 text-white backdrop-blur-lg flex h-100 w-screen flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold mb-4 text-center">Skills</h2>
          <table className="w-flex border-collapse border border-gray-700 text-center">
            <thead>
              <tr className="bg-gray-800 text-pink">
                <th className="p-2 border border-gray-700 text-center">Skill</th>
                <th className="p-2 border border-gray-700">Video</th>
              </tr>
            </thead>
            <tbody>
              {abilities.map((ability, index) => (
                <tr key={index}>
                  <td className="p-3 border border-gray-700">{ability.name}</td>
                  <td className="p-3 border border-gray-700 cursor-pointer" onClick={() => handleVideoClick(ability.videoUrl)}>
                    <img src={`https://img.youtube.com/vi/${ability.videoId}/hqdefault.jpg`} alt="Video Thumbnail" className="w-16 h-10 mx-auto rounded-lg" /> {/* Tamaño ajustado */}
                  </td>
                </tr>
              ))} 
            </tbody>
          </table>
        </div>

        {/* Sección de Counters y Mejores Combos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {[{ title: "Counters", data: counters }, { title: "Best Combos", data: combos }].map((section, index) => (
            <div key={index} className="bg-gray-900 bg-opacity-80 rounded-lg p-6 text-white text-center backdrop-blur-lg">
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <div className="grid grid-cols-3 gap-4">
                {section.data.map((item, idx) => (
                  <div key={idx} className="text-center">
                    
                    <img src={item.image} alt={item.name} className="w-12 h-12 mx-auto rounded-full border border-gray-500" /> {/* Tamaño ajustado */}
                    <p className="text-sm mt-2">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sección de Comentarios */}
        <div className="mt-8 bg-gray-900 bg-opacity-80 rounded-lg p-6 text-white text-center backdrop-blur-lg max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Comments</h2>
          {isAuthenticated ? (
            <>
              <textarea
                className="w-full p-2 rounded bg-gray-800 text-white"
                placeholder="Escribe tu comentario..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button
                className="mt-2 w-full bg-blue-600 hover:bg-blue-500 p-2 rounded"
                onClick={handleAddComment}
              >
                Comentar
              </button>
            </>
          ) : (
            <p className="text-gray-400">You must log in to comment.</p>
          )}

          {/* Lista de comentarios */}
          <div className="mt-4">
            {comments.length === 0 ? (
              <p className="text-gray-400">There are no comments yet. Be the first to comment.</p>
            ) : (
              comments.map((comment) => (
                <div key={comment.id} className="bg-gray-800 p-3 mt-2 rounded">
                  <p className="text-sm font-bold">{comment.user}</p>
                  <p className="text-gray-300">{comment.text}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </main>

      {/* Modal para video */}
      {selectedVideo && (
        <div 
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80"
          onClick={handleCloseVideo}
        >
          <div className="bg-gray-900 p-4 rounded-lg shadow-lg relative" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-2 right-2 text-white bg-red-600 px-2 rounded" 
              onClick={handleCloseVideo}
            >
              X
            </button>
            <ReactPlayer url={selectedVideo} controls width="600px" height="340px" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterPage;
