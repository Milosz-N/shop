import "../category-item/category-item.scss"
function CategoryItem({category}) {
 

  return (
    <div style={{backgroundImage: `url(${category.imageUrl})`}} className='category-container' key={category.id}>
        <div>
        <h2>{category.title}</h2>
      <p>Shop now</p>
        </div>
    
      </div>
  );
}

export default CategoryItem;
