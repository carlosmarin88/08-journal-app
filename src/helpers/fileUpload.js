export const fileUpload = async(file) => {
    
    //if(!file) throw new Error('No tenemos ningun archivo a subir')
    if(!file) return null; 

    const cloudUrl = 'https://api.cloudinary.com/v1_1/curso-charly-udemy/upload'
    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {

        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });
        if(!resp.ok){
            //console.log(resp)
            throw new Error('No se pudo subir la imagen')
        }
        console.log('imagen subida')
        const cloudResp = await resp.json();
        //console.log(cloudResp)
        return cloudResp.secure_url; 
        
    } catch (error) {
        //console.log(error);
        //throw new Error(error.message)
        return null;
    }

}