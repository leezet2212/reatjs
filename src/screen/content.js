import React, { useEffect, useState } from "react";

const tags = ["posts", "comments", "albums"];
const Content = () => {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showToButtonTop, setShowToButtonTop] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [countdown, setCountdown] = useState(200);
  const [avatar, setAvatar] = useState()

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);
  // time out function
  useEffect(()=>{
    const timerId = setInterval(()=>{
      setCountdown(preState => preState -1)
    }, 1000)
    return ()=>{
      clearInterval(timerId)
    }
  }, [])

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCountdown(countdown - 1);
  //   }, 1000);
  // }, [countdown]);

  useEffect(() => {
    const handleScroll = () => {
      // console.log(window.scrollY)
      if (window.scrollY > 200) {
        setShowToButtonTop(true);
      } else {
        setShowToButtonTop(false);
      }
      // setShowToButtonTop(window.scrollY > 200)
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      // console.log('unmountding...')
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleFiles = (e)=>{
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file)
    console.log(URL.createObjectURL(file))
    setAvatar(file)
  }
  useEffect(() => {
    return () => {
     avatar && URL.revokeObjectURL(avatar.preview)
    };
  }, [avatar]);

  return (
    <>
      <div>
        <div>
          <input type="file" onChange={handleFiles}/>
          {avatar && (<img src={avatar.preview} alt="" width="80%" />)}

        </div>
   
        <h1>{countdown}</h1>
        <h2>{width}</h2>
        {tags.map((tag) => (
          <button
            key={tag}
            style={
              type === tag ? { color: "#fff", backgroundColor: "#333" } : {}
            }
            onClick={() => setType(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>

      {showToButtonTop && (
        <button style={{ position: "fixed", right: 20, bottom: 20 }}>
          Go To Top
        </button>
      )}
    </>
  );
};
export default Content;
