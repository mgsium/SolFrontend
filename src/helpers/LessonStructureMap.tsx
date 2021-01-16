import React from "react";
import LessonCard from "../components/Pages/LessonCard/LessonCard";
import LessonSwitch from "../httpclient/LessonSwitch";
import Lesson from "../types/Lesson";

export default class LessonStructureMap {

    private columnOne: Array<Lesson>;
    private columnTwo: Array<Lesson>;

    constructor() {
        this.columnOne = [];
        this.columnTwo = [];
    }

    addLessons(lessons: Array<Lesson>) {
        console.log(lessons);
        if(lessons.length >= 2) {
            const middle: number = Math.round((lessons.length - 1)/2);
            this.columnOne = this.columnOne.concat(lessons.splice(0, middle));
            this.columnTwo = this.columnTwo.concat(lessons.splice(middle + 1));
        } else this.columnOne = this.columnOne.concat(lessons);
    }

    getColumnOneLessons() {
        return this.columnOne;
    }

    getColumnTwoLessons() {
        return this.columnTwo;
    }

    getColumnOneLessonWidgets() {
        return this.getColumnOneLessons().map(l => this.mapLessonToWidget(l));
    }

    getColumnTwoLessonWidgets() {
        return this.getColumnTwoLessons().map(l => this.mapLessonToWidget(l));
    }

    mapLessonToWidget(lesson: Lesson) {
        return <LessonCard lesson={lesson}/>
    }

}