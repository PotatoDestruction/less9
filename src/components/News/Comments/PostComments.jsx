import { useEffect } from 'react';
import { useState } from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import './PostComments.css'

const PostComments = () => {
    let getPara = new URL(window.location.href);
    let params = getPara.search;
    let getInfo = new URLSearchParams(params);
    let id = getInfo.get('id');

    const [comments, setComments] = useState(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setComments(res)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <Header />
            <div className='Comments-main-container'>
                <h1 className='Comments-H'>Post Id: {id}</h1>
                <div className='Comments-container'>
                    {comments && comments.map((comment, i) => {
                        return(
                            <div key={i} className='Comment-box'>
                                <div>name</div>
                                <h1>{comment.name}</h1>

                                <div>Email</div>
                                <h2>{comment.email}</h2>

                                <div>Comment</div>
                                <p>{comment.body}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
                    <Footer cl='static'/>
        </div>
    )
}

export default PostComments;