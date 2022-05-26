import styles from "./PostDetail.module.css";

const PostDetail = ({ post }) => {
    return (
        <div>
            <img src={post.image} alt={post.title} />
            <h2>{post.title}</h2>
            <p>Por: {post.createdBy}</p>
        </div>
    );
};

export default PostDetail;
