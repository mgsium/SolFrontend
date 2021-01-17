import Question from "../../../types/Question";

export default class LessonBuilder {

    private header: string;
    private description: string;
    private video_url: string;
    private author_name: string;
    private more_info: string;

    public LessonBuilder() {}

    public setHeader(header: string) {
        this.header = header;
    }

    public setDescription(description: string) {
        this.description = description;
    }

    public setVideoUrl(video_url: string) {
        this.video_url = video_url;
    }

    public setAuthorName(author_name: string) {
        this.author_name = author_name;
    }

    public setMoreInfo(more_info: string) {
        this.more_info = more_info;
    }

    public getHeader() {
        return this.header;
    }

    public getDescription() {
        return this.description;
    }

    public getVideoUrl() {
        return this.video_url;
    }

    public getAuthorName() {
        return this.author_name;
    }

    public getMoreInfoField() {
        return this.more_info;
    }

    public getLesson() {
        return {
            //@ts-ignore
            id: null,
            header: this.header,
            description: this.description,
            video_url: this.video_url,
            author_name: this.author_name,
            more_info: this.more_info,
            timestamp: "",
            questions: new Array<Question>()
        }
    }

}