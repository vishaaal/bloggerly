import "./singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit.
          <div className="singlePostEdit">
            <i class="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i class="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Vishal</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illum
          rem natus sapiente magni iste dolor tenetur dignissimos libero
          accusamus quasi quos eaque, ex sunt tempore quam et, consequatur
          perspiciatis, voluptatem praesentium. Aliquid explicabo nihil
          distinctio quod beatae recusandae provident. Inventore consequuntur
          harum ullam, dolore, mollitia nam nihil exercitationem molestias, sed
          veritatis iusto odio saepe rerum? Molestiae voluptatem eos accusantium
          architecto ipsa, esse ipsum iure suscipit rem? Possimus consequatur
          cumque accusamus beatae, ex quasi nemo blanditiis quo esse neque earum
          fugit provident, vitae modi minus assumenda quidem perferendis ipsa
          reprehenderit veniam quisquam placeat. Natus enim officia, ratione ad
          expedita quis. Quaerat dolorem magnam error ipsam doloribus architecto
          saepe sed. Praesentium deleniti quaerat a eaque. Expedita cumque cum
          autem voluptas similique.
        </p>
      </div>
    </div>
  );
}
