import React, { useState } from 'react';

const AddForm = props => {
    const { onSubmitHandler, initialImage, initialName, initialType, initialDescription, initialSkill1, initialSkill2, initialSkill3, poster_id, owner_id } = props
    const [image, setImage] = useState(initialImage);
    const [name, setName] = useState(initialName);
    const [type, setType] = useState(initialType);
    const [description, setDescription] = useState(initialDescription);
    const [skill1, setSkill1] = useState(initialSkill1);
    const [skill2, setSkill2] = useState(initialSkill2);
    const [skill3, setSkill3] = useState(initialSkill3);

    return (
        <form onSubmit={e => { onSubmitHandler(e, {image, name, type, description, skill1, skill2, skill3, poster_id, owner_id} ) } }>
            <div id="img-field" >
                <p>Add an Image Link (Optional):</p>
                <input type="text" value={image} onChange={(e)=>{setImage(e.target.value)}}/>
            </div>
            <div id="form">
                <div id="row">
                    <p>
                        <p>Pet Name:</p>
                        <input type="text" value={name} name="name" onChange={(e)=>{setName(e.target.value)}}/>
                    </p>
                    <p>
                        <p>Pet Type:</p>
                        <input type="text" value={type} name="type" onChange={(e)=>{setType(e.target.value)}}/>
                    </p>
                    <p>
                        <p>Pet Description:</p>
                        <input type="text" value={description} name="description" onChange={(e)=>{setDescription(e.target.value)}}/>
                    </p>
                </div>
                <div id="row">
                    <p>
                        <p>Skill 1:</p>
                        <input type="text" value={skill1} name="skill1" onChange={(e)=>{setSkill1(e.target.value)}}/>
                    </p>
                    <p>
                        <p>Skill 2:</p>
                        <input type="text" value={skill2} name="skill2" onChange={(e)=>{setSkill2(e.target.value)}}/>
                    </p>
                    <p>
                        <p>Skill 3:</p>
                        <input type="text" value={skill3} name="skill3" onChange={(e)=>{setSkill3(e.target.value)}}/>
                    </p>
                </div>
                <input type="hidden" value={poster_id} name="poster_id"/>
                <input type="hidden" value={owner_id} name="owner_id"/>
            </div>           
            <div id="input-btn">
            <input type="submit" value="Add Pet" class="form-btn"/>
            </div>
        </form>
    )
}

export default AddForm;