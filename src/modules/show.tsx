export interface Show {
    id:             number;
    image?:{
        medium:string;
    }
    name:           string;
    type:           string;
    language:       string;
    genres:         string[];
    rating:        {average?:number};
    weight:         number;
    summary?:        string;
    updated:        number;
     
}