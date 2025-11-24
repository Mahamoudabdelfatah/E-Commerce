import React from 'react'
import { List, ListItem, Card } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const CategoriesList = () => {

    const [isCategories, setIsCategories] = useState([])

    function getCategories() {
        axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
            .then((response) => {
                setIsCategories(response.data.data)
            })
            .catch((error) => error)
    }

    useEffect(() => {
        getCategories()
    }, [])


    return (
        <Card className="w-full shadow-lg rounded-xl overflow-hidden">
            <List className="p-0">


                {isCategories.map((category) =>
                    <ListItem key={category._id} >
                        <Link to={`/category/${category._id}`} >
                            {category.name}
                        </Link>
                    </ListItem>
                )}



            </List>
        </Card>
    )
}

export default CategoriesList
