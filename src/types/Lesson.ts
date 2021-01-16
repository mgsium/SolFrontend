import Question from "./Question";

type Lesson = {
    id: string,
    header: string,
    video_url: string,
    description: string,
    author_name: string,
    more_info: string,
    timestamp: string,
    questions: Array<Question>
}

export default Lesson;