export default class QuestionBuilder {

    private header: string;
    private ans_one: string;
    private ans_two: string;
    private ans_three: string;
    private ans_four: string;
    private correct_ans: number;
    private explanation: string;
    private timestamp: number;

    constructor() {
        this.correct_ans = 1;
    }

    public setHeader(header: string) {
        this.header = header;
    }

    public setAnsOne(ans_one: string) {
        this.ans_one = ans_one;
    }

    public setAnsTwo(ans_two: string) {
        this.ans_two = ans_two;
    }

    public setAnsThree(ans_three: string) {
        this.ans_three = ans_three;
    }

    public setAnsFour(ans_four: string) {
        this.ans_four = ans_four;
    }

    public setCorrectAns(correct_ans: number) {
        this.correct_ans = correct_ans;
    }

    public setExplanation(explanation: string) {
        this.explanation = explanation;
    }

    public setTimestamp(timestamp: number) {
        this.timestamp = timestamp;
    }

    public getHeader() {
        return this.header;
    }

    public getAnsOne() {
        return this.ans_one;
    }

    public getAnsTwo() {
        return this.ans_two;
    }

    public getAnsThree() {
        return this.ans_three;
    }

    public getAnsFour() {
        return this.ans_four;
    }

    public getAnswers() {
        return [this.ans_one, this.ans_two, this.ans_three, this.ans_four];
    }

    public getExplanation() {
        return this.explanation;
    }

    public getCorrectAns() {
        return this.correct_ans;
    }

    public getTimestamp() {
        return this.timestamp;
    }

    public getQuestion() {
        return {
            // @ts-ignore
            id: null,
            header: this.header,
            ans_one: this.ans_one,
            ans_two: this.ans_two,
            ans_three: this.ans_three,
            ans_four: this.ans_four,
            correct_ans: this.correct_ans,
            explanation: this.explanation,
            timestamp: this.timestamp
        }
    }

}