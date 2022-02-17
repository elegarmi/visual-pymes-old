import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Create.css";

const Create = () => {


    // const navigate = useNavigate();

    // const [name, setName] = useState("");
    // const [description, setDescription] = useState("");
    // const [price, setPrice] = useState("");
        
      
    //     const handleChangeName = (event) => {
    //       setName(event.target.value);
    //     };
    //     const handleChangeDescription = (event) => {
    //         setDescription(event.target.value);
    //       };
        
    //       const handleChangePrice = (event) => {
    //         setPrice(event.target.value);
    //       };

    //     //   const handleClick = (event) => {
    //     //     event.preventDefault();
    //     //     const create = { name, description, price };
    //     //     fetch("http://localhost:3000/", {
    //     //       method: "POST",
    //     //       headers: { "Content-Type": "application/json" },
    //     //       body: JSON.stringify(create),
    //     //     }).then(() => {
    //     //       navigate("/");
    //     //     });
    //     //   };
    return (
        

        <Form className="create__form">
            <h5>Crear nuevo anuncio</h5>
            <Form.Group className="mb-3" controlId="formProductName">
                <Form.Control type="text" 
                            // value={name}
                            // onChange={handleChangeName} 
                            placeholder="Nombre del producto" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPrice">
                <Form.Control 
                        //     value={price}
                        //    onChange={handleChangePrice} 
                         aria-label="Cuantía en euros (con coma antes de los decimales)" 
                        placeholder="Precio (0,00 €)" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
                <Form.Control  
                            //     value={description}
                            // onChange={handleChangeDescription} 
                                  as="textarea" 
                                 type="textarea" 
                            placeholder="Descripción" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCheckbox">
                <Form.Check type="checkbox" label="Acepto las condiciones de uso y la Protección de Datos" />
            </Form.Group>

            <Button 
                    // onClick={handleClick}
                     variant="primary"
                     type="submit">
                Crear
            </Button>
        </Form >
    );
};

export default Create;
