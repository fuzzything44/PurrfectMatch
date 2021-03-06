import { SuccessStoryInfo, SUCCESS_STORY_PAGE_SIZE } from "./Definitions";
import { RecentlyAdoptedInfo, NUM_RECENTLY_ADOPTED } from "./Definitions";
import { SearchPageResults } from "./Definitions";
import { ShelterAccountInfo } from "./Definitions";
import axios from 'axios';

/*
    This class is used for whenever we need to get data from the server. 
*/
        
export class Api {

    // will initialize and either resolve or reject a promise depending on the status code returned by the server
    private static safeFetch = (endpoint: string, method: string, body: JSON) : Promise<Object> => {
        return Promise.resolve({});
    }

    // this will be used anytime data needs to be added to the backend (not idempotent)
    private static post = (endpoint: string, body: JSON) : Promise<Object> => {
        return Api.safeFetch(endpoint, 'POST', body);
    }
     
    // this will be used anytime data needs to be edited (idempotent)
    private static put = (endpoint: string, body: JSON) : Promise<Object> => {
        return Api.safeFetch(endpoint, 'PUT', body);
    }
     
    // this will be used anytime data needs to be retrieved from the backend (idempotent)
    // body would normally be empty
    private static get = (endpoint: string, body: JSON) : Promise<Object> => {
        return Api.safeFetch(endpoint, 'GET', body);
    }
     
    // this will be useful when allowing shelters to delete pet profiles later (idempotent)
    // body would normally be empty
    private static del = (endpoint: string, body: JSON) : Promise<Object> => {
        return Api.safeFetch(endpoint, "DELETE", body);
    }

    public static getShelterAccountInfo = (idNum: number) : Promise<ShelterAccountInfo> => {

        const ACCOUNT_RESULTS: ShelterAccountInfo = 
            {
                email: "example@email.com",
                shelterName: "Woods Humane Society",
                street: "123 Street Ave",
                city: "San Luis Obispo",
                state: "CA",
                zipCode: 93405,
                phoneNumber: 1233456789,
                website: "website.com",
                id: idNum
            };

        return Promise.resolve(ACCOUNT_RESULTS); // need to use GET to retrieve data from database
    }
    
    //should eventually connect up to safeFetch via Api.get
    public static getSearchResults = (filter: Object, sort: string) : Promise<SearchPageResults[]> => {
        //temporary values for sake of front end, but would normally call Api.get --> safeFetch will handle promises
        //would use input filter and sort info for "getting" the search results/will get sorted/filtered info from backend

        const SEARCH_RESULTS: SearchPageResults[] = [
            {
                name:"Ollie",
                breed: "American Shorthair",
                age: "5 years",
                gender: "Male",
                bio: "",
                daysInShelter: 1,
                daysLeft: 30,
                shelterId: 1,
                photo: "https://www.rd.com/wp-content/uploads/2019/11/cat-10-e1573844975155-1200x1200.jpg"
            },
            {
                name: "Meowasaurus",
                breed: "American Shorthair",
                age: "3.5 years", gender: "Male",
                bio: "",
                daysInShelter: 5,
                daysLeft: undefined,
                shelterId: 2,
                photo: "https://www.thesprucepets.com/thmb/49Mgi7EXkywd5aRMYnG4mhc4lHI=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/28153808_150772342209712_8095208665067290624_n-5a949ebcc673350037abdbdc.jpg"
            },
            {
                name: "Fuzzles",
                breed:"American Shorthair",
                age: "4 years", gender:"Female",
                bio: "",
                daysInShelter: 36,
                daysLeft: 20,
                shelterId: 3,
                photo: "https://kittenrescue.org/wp-content/uploads/2019/08/KittenRescue_TinyPanda4-570x570.jpg"
            },
            {
                name: "Mr. Meef",
                breed: "American Shorthair",
                age: "5 months",
                gender: "Male",
                bio: "",
                daysInShelter: 25,
                daysLeft: 40,
                shelterId: 4,
                photo: "https://nationaltoday.com/wp-content/uploads/2019/04/national-siamese-cat-day.jpg"
            },
            {
                name: "Poof",
                breed: "American Shorthair",
                age:"6 years",
                gender: "Female",
                bio: "",
                daysInShelter: 0,
                daysLeft: 105,
                shelterId: 5,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/June_odd-eyed-cat_cropped.jpg/712px-June_odd-eyed-cat_cropped.jpg"
            },
            {
                name: "Rex",
                breed: "American Shorthair",
                age: "1 year",
                gender: "Male",
                bio: "",
                daysInShelter: 4,
                daysLeft: undefined,
                shelterId: 6,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
            },
            {
                name: "Socks",
                breed: "American Shorthair",
                age: "8 years",
                gender: "Male",
                bio: "",
                daysInShelter: 3,
                daysLeft: undefined,
                shelterId: 7,
                photo: "https://felineengineering.com/wp-content/uploads/2019/04/innocent-kitten-e1556584502399-1024x1024.jpg"
            },
            {
                name: "Midnight",
                breed: "American Shorthair",
                age: "8 months",
                gender: "Female",
                bio: "",
                daysInShelter: 32,
                daysLeft: 2,
                shelterId: 8,
                photo: "https://www.thesprucepets.com/thmb/mnQh4QB3JmRmck_Ky3Pzo66Jp24=/3744x3744/smart/filters:no_upscale()/bombay-cat-black-cat-584192512-5808f21c3df78c2c730fe3c1.jpg"
            }
        ];

        return Promise.resolve(SEARCH_RESULTS); // in actuality, will be returning resolve or reject from safeFetch via Api.get

    }

    //should eventually connect up to safeFetch via Api.get
    public static getSuccessStories = (breakpoint?: number): Promise<SuccessStoryInfo[]> => {
        // The call to the server itself will be paginated, so which page of stories we want.
        // No value = first page. 
        if (breakpoint === undefined) {
            breakpoint = 0;
        }

        // This is pretty much all temporary code that will be replaced when we actually communicate with the server. 
        const ALL_SUCCESS_STORIES: SuccessStoryInfo[] = [
            {
                image: "cat.jpg",
                name: "Mittens",
                age: "4 years",
                storyText: "Some story about how this cat was saved from horrible living conditions and is doing much better now.",
                breed: "American shorthair",
                gender: "Female",
                adoptionDate: "10/24/19",
                owner: "Bob"
            },
            {
                image: "Cat_1.png",
                name: "Fluffy",
                age: "2 months",
                storyText: "Another success story here",
                breed: "American shorthair",
                gender: "Female",
                adoptionDate: "10/24/19",
                owner: "Bob"
            },
            {
                image: "Dog_1.png",
                name: "Mr. Woof",
                age: "10 years",
                storyText: "Okay, success stories really should be longer but eh. ",
                breed: "American shorthair",
                gender: "Female",
                adoptionDate: "10/24/19",
                owner: "Bob"

            }
        ];
        let fakeApiResult = ALL_SUCCESS_STORIES.slice(SUCCESS_STORY_PAGE_SIZE * breakpoint, SUCCESS_STORY_PAGE_SIZE * breakpoint + SUCCESS_STORY_PAGE_SIZE);
        return Promise.resolve(fakeApiResult);
    }
    
    //shouldEventually connect up to Api.get
    public static getRecentlyAdopted = (breakpoint?: number): Promise<RecentlyAdoptedInfo[]> => {
        // The call to the server itself will be paginated, so which page of stories we want.
        // No value = first page. 
        if (breakpoint === undefined) {
            breakpoint = 0;
        }

        // This is pretty much all temporary code that will be replaced when we actually communicate with the server. 
        const ALL_RECENTLY_ADOPTED: RecentlyAdoptedInfo[] = [
            {
                image: "cat.jpg",
                name: "Mittens",
                age: "4 years",
                breed: "American shorthair",
                gender: "Female",
                adoptionDate: "10/24/19",
                owner: "Bob"
            },
            {
                image: "Cat_1.png",
                name: "Fluffy",
                age: "2 months",
                breed: "American shorthair",
                gender: "Female",
                adoptionDate: "10/24/19",
                owner: "Bob"
            },
            {
                image: "Dog_1.png",
                name: "Mr. Woof",
                age: "10 years",
                breed: "American shorthair",
                gender: "Female",
                adoptionDate: "10/24/19",
                owner: "Bob"

            }
        ];
        //let fakeApiResult = ALL_RECENTLY_ADOPTED.slice(SUCCESS_STORY_PAGE_SIZE * breakpoint, SUCCESS_STORY_PAGE_SIZE * breakpoint + SUCCESS_STORY_PAGE_SIZE);
        let fakeApiResult = ALL_RECENTLY_ADOPTED;
        return Promise.resolve(fakeApiResult);
    }

    public static submitSuccessStory = (story: SuccessStoryInfo) : Promise<void> => {
        return Promise.resolve(); //will connect to Api.post
    }

    //should eventually connect up to Api.post
    public static submitContactInfo = (firstName: string, lastName: string, subject: string, email: string, shelterEmployee: string, message: string): Promise<any> => {
        // Normally, we'd actually submit to the backend and resolve or reject the promise based off of the response (was there an error submitting?)
        return axios({
            method: 'post',
            url: 'http://localhost:8080/contact',
            data: {
              firstName: firstName,
              lastName: lastName,
              subject: subject,
              email: email,
              shelterEmployee: shelterEmployee.toUpperCase(),
              message: message
            }
          })
    }

}