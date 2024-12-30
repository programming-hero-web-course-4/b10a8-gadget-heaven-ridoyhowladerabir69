import { toast } from "react-toastify";

//Add to card storage
const getStoredAddToCard = () => {
    const storedAddStr = localStorage.getItem('addToCart');
    if(storedAddStr){
        const storedAddCard = JSON.parse(storedAddStr);
        return storedAddCard;
    }else{
        return [];
    }
}

const addToStoredAddToCard = (id) => {
    const storedAddCard = getStoredAddToCard();
    if(storedAddCard.includes(id)){
        console.log(id, 'All ready Exists');
    }else{
        storedAddCard.push(id);
        const storedListStr = JSON.stringify(storedAddCard);
        localStorage.setItem('addToCart', storedListStr)
        toast('Add To Card Successful')
    }
}


// Add wishlist

const getStoredWishlist = () => {
    const storedAddWishStr = localStorage.getItem('addToWishlist');
    if(storedAddWishStr){
        const storedWishlist = JSON.parse(storedAddWishStr);
        return storedWishlist;
    }else{
        return [];
    }
}

const addToStoredWishlist = (id) => {
    const storedAddWishlist = getStoredWishlist();
    if(storedAddWishlist.includes(id)){
        console.log(id, 'All ready Exists');
    }else{
        storedAddWishlist.push(id);
        const storedWishlistStr = JSON.stringify(storedAddWishlist);
        localStorage.setItem('addToWishlist', storedWishlistStr)
        toast('Add Wish List Successful')
    }
}


export { addToStoredAddToCard, getStoredAddToCard, addToStoredWishlist, getStoredWishlist }