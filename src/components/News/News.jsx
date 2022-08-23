import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import './News.css'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const News = () => {

    const [posts, setPosts] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(res => {
                setPosts(res)
                console.log(res)
            })
            .catch(error => console.log(error))
    }, [])


    return (
        <div>
            <Header />
                <h1 className='News-header'>News</h1>
            <div className='News-main-container'>
                {posts && posts.map(post => {
                    return (
                        <Link to={`/Comments?id=${post.id}`} className='News-box' key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </Link>
                    )
                })}
            </div>
            <Footer cl='static'/>
        </div>
    )
}

export default News;