import express from 'express';
const router = express.Router();


const genres = [
    {id: 1 , name: 'Romance'},
    {id: 2,  name: 'Action'},
    {id: 3 , name: 'Thriller'},
    {id: 4 , name: 'Comedy'},
    {id: 5 , name: 'Horror'},

];
//displays all the genres on the screen
router.get('/', (req,res)=>{
    res.send(genres);
    });
    
    //update the genres array section when new genre needs to be added
    router.post('/', (req,res)=>{
    //if updating, validate if it satisfies 
    const {error} = validateGenre(req.body);
    if(error) {return res.status(400).send('The length of the genre should be atleast three characters')};
    //push the elements to the array
    const genre = {
        id: genres.length +1,
        name: req.body.name
    }
    genres.push(genre);
    res.send(genre);
    });
    
    //put request to add an endpoint at the URL
    router.put('//:id', (req,res)=>{
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if(!genre) res.status(404).send('Requested id does not exist');
    
    const {error} = validateGenre(req.body);
    if(error) return res.status(400).send('The length of the genre should be atleast three characters');
    res.send(genre);
    });
    
    //delete request
    router.delete('//:id', (req,res)=>{
        const delGenre = genres.find(c => c.id === parseInt(req.params.id));
        if(!delGenre) return res.status(404).send('Requested id does not exist');
    const index = genres.indexOf(delGenre);
    genres.splice(index,1);
    res.send(delGenre);
    });
    
    //to get the results based on the input
    router.get('//:id',(req,res)=>{
        const getGenre = genres.find(c => c.id === parseInt(req.params.id));
        if(!getGenre) return res.status(404).send('Requested id does not exist');
        res.send(getGenre);
    });
    
    //validating function
    function validateGenre(genre){
        const result = genre.length > 3
    return result};

    export default router;