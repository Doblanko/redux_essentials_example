import { useSelector } from "react-redux";

/**
 * React router will pass in a match object as a prop
 * that contains the URL info we're looking for.
 * 
 * The route will parse the second part of the URL as a
 * variable named postId and we can read that value from
 * match.params
 */
export const SinglePostPage = ({ match }) => {
    const { postId } = match.params

    // state.posts shoud be an array of all posts objects
    const post = useSelector(state => 
        state.posts.find(post => post.id === postId)
    )

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    return (
        <section>
            <article className="post">
                <h2>{post.title}</h2>
                <p className="post-content">{post.content}</p>
            </article>
        </section>
    )
}