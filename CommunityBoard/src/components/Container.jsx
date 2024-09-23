import React from "react";
import Card from "./Card"
const Container = () => {
    return (
        <div className="Container">
            
            <Card 
            img="https://media-cdn.tripadvisor.com/media/photo-s/18/9b/89/12/phin-smith-coffee.jpg" 
            title="Phin Smith Coffee" 
            description="A cozy coffee shop with a warm ambiance, perfect for a relaxing evening." 
            />
            

            <Card
            img="https://static.wixstatic.com/media/c2d9c5_6d2723ebfa8a47249bfe50c3e8209c2e~mv2.jpg/v1/fill/w_824,h_740,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_9871.jpg"
            title="The Vox Kitchen"
            description="Popular spot serving Asian fusion fare, including seasonal veggies & small plates, in modern digs." 
            />

            <Card
            img="https://lh3.googleusercontent.com/p/AF1QipONXkaDJP21aT3W56KgnlMGhLxdtSVvMB7EClGl=s1360-w1360-h1020"
            title="Tim's Avenue"
            description="Korean and Mexican fusion food"
            />

            <Card
            img="https://lh3.googleusercontent.com/p/AF1QipP2O4bz5Xgj787d5ljVpWLWnrc1jXNKgV4mqrwa=s1360-w1360-h1020"
            title='Atoyobu'
            description="Asian fusion dining in the form of yubu – a popular Korean dish of tofu wrapped ingredients"
            />

            <Card
            img="https://koreatownladirectory.com/wp-content/uploads/2019/03/bcd-tofu-house-western-korean-meal.jpg"
            title='BCD Tofu House'
            description="Asian fusion dining in the form of yubu – a popular Korean dish of tofu wrapped ingredients"
            />
            
            <Card
            img="https://web.ineons.com/sites/default/files/storage/product_images/o_-_2019-11-20t185208.377.jpg"
            title='7 Leaves'
            description="Coffee place"
            />
            
            <Card
            img="https://images.squarespace-cdn.com/content/v1/65d3bea7b81ae223d8865122/8dc2bb8b-cd6c-4fc9-9e1a-aae405b9f279/IMG_9543-Edit.jpg"
            title='Da Vien'
            description="Coffee place"
            />


<Card
            img="https://static.wixstatic.com/media/c2d9c5_3e8fec1737f44881a32c0a371dbd6046~mv2.jpg/v1/fit/w_2500,h_1330,al_c/c2d9c5_3e8fec1737f44881a32c0a371dbd6046~mv2.jpg"
            title='Ini Ristorante'
            description="Asian Fusion restaurant"
            />

            <Card
            img='https://cdn.vox-cdn.com/thumbor/GfvQpQINLAXFaPjh86KZmy38rlA=/0x0:1440x1440/1200x800/filters:focal(496x813:726x1043)/cdn.vox-cdn.com/uploads/chorus_image/image/72388995/119732994_331354968205276_4863262647627850301_n.0.jpeg'
            title='Mokkoji Shabu Shabu'
            description="Hotpot"
            />


<Card
img='https://koreatownladirectory.com/wp-content/uploads/2014/05/coco-ichibanya-curry-house-koreatown.jpg'
            title='coco ichibanya'
            description="Japanese curry"
            />
        </div> 
    );
}
export default Container;