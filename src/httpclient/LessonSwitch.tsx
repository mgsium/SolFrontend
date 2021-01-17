import LessonStructureMap from "../helpers/LessonStructureMap";
import Lesson from "../types/Lesson";
import Question from "../types/Question";

export default class LessonSwitch {
    static backend_url = "https://api.nmspace.org:8445";
    // static backend_url = "http://localhost:8443";
    static lesson_controller_path = "/api/v1/lesson";

    static std_get_req_headers = {
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "max-age=0",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1"
    };
    
    // IIFE to generate standard post request headers
    static std_post_req_headers = (function() {
        let std_post_req_headers: any = LessonSwitch.std_get_req_headers;
        std_post_req_headers["Content-Type"] = "application/json";
        std_post_req_headers["accept"] = "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9";
        std_post_req_headers["cache-control"] = "max-age=0";
        return std_post_req_headers;
    }());

    static std_get_req_options: RequestInit = {
        "headers": LessonSwitch.std_get_req_headers,
        "referrerPolicy": "strict-origin-when-cross-origin",
        "mode": "cors",
        "method": "GET",
        "credentials": "include"
    };

    static async getLesson(id: string, component: React.Component) {
        await fetch(`${this.backend_url}${this.lesson_controller_path}/get/${id}`, {
            "headers": this.std_get_req_headers,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "mode": "cors",
            "method": "GET",
            "credentials": "include"
        })
        .then( res => res.json() )
        .then( data => { component.setState({ lesson: data, loading: false }); } );
    }

    static async searchForLessons(searchString: string, component: React.Component) {
        await fetch(`${this.backend_url}${this.lesson_controller_path}/get/search/${searchString}`, {
            "headers": this.std_get_req_headers,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "mode": "cors",
            "method": "GET",
            "credentials": "include"
        })
        .then( res => res.json() )
        .then( data => {
            // @ts-ignore
            const lessonStructureMap = component.state.lessonStructureMap;
            lessonStructureMap.setColumnOneLessons(new Array<Lesson>());
            lessonStructureMap.setColumnTwoLessons(new Array<Lesson>());
            lessonStructureMap.addLessons(data);
            component.setState({ lessonStructureMap: lessonStructureMap });
        } );
    }

    static async getRandomLessons(maxResults: number, component: React.Component) {
        await fetch(`${this.backend_url}${this.lesson_controller_path}/get/random/${maxResults}`, {
            "headers": this.std_get_req_headers,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "mode": "cors",
            "method": "GET",
            "credentials": "include"
        })
        .then( res => res.json() )
        .then( data => { 
            // @ts-ignore
            const lessonStructureMap = component.state.lessonStructureMap;
            lessonStructureMap.addLessons(data); 
            component.setState({ lessonStructureMap: lessonStructureMap });
        } );
    }

    // TODO: Change to a request which creates multiple Question objects and a lesson object at once.

    // TODO: Add Error Handling
    static async createLesson(lesson: Lesson) {
        await fetch(`${this.backend_url}${this.lesson_controller_path}/new`, {
            "headers": this.std_post_req_headers,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "method": "POST",
            "mode": "cors",
            "credentials": "include",
            body: JSON.stringify(lesson)
        });
    }

}