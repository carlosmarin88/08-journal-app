import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers/fileUpload';

cloudinary.config({
  cloud_name: 'curso-charly-udemy',
  api_key: '563874988431769',
  api_secret: 'KC_VijNjst4PzfY4ych851d-5wU',
  secure: true
})

describe('Pruebas en fileUpload', () => { 

    test('debe de subir el archivo correctamente a cloudinary', async() => { 

        const imageUrl = 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png';
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload(file);
        expect(typeof url).toBe('string');
        //console.log(url);
        //https://res.cloudinary.com/curso-charly-udemy/image/upload/v1709905056/journal/zgilqn9nsyu2znwavf60.png
        const segments = url.split('/');
        const imageID = segments[segments.length - 1].replace('.png', '');
       
        const cloudResp = await cloudinary.api.delete_resources(['journal/' + imageID], {
          resource_type: 'image'
        });
        //console.log({cloudResp})
     })

     test('debe de retornar null', async() => { 

        const file = new File([], 'foto.jpg')
        const url = await fileUpload(file);
        expect(url).toBe(null)
      })
 })