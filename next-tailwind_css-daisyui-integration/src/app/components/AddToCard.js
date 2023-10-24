'use client';

const AddToCard = () => {
    return (
        <div>
            <button 
              className = "btn btn-primary"
              onClick={() => console.log('Add to card')}
            > 
              Add to Card
            </button>
        </div>
    )
}

export default AddToCard;