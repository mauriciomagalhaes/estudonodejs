import styles from "./PostDetail.module.css";

const PostDetail = ({ post }) => {
    return (
        <>
            <img src={post.image} alt={post.title} />
            <h2>{post.title}</h2>
        </>
    );
};

export default PostDetail;
