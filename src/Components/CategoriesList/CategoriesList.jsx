import React from 'react'
import { List, ListItem, Card } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const CategoriesList = () => {
    return (
        <Card className="w-full shadow-lg rounded-xl overflow-hidden">
            <List className="p-0">

                {[
                    "Music", "Men's Fashion", "Women's Fashion", "SuperMarket",
                    "Baby & Toys", "Home", "Books", "Beauty & Health",
                    "Mobiles", "Electronics"
                ].map((category, index) => (
                    <Link
                        key={index}
                        to={`/show-products/${category.toLowerCase().replace(" & ", "-")}`}
                        className="block"
                    >
                        <ListItem
                            className="px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-black transition-all duration-200"
                        >
                            {category}
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Card>
    )
}

export default CategoriesList
