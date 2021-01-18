import React from "react";
import Template from "../Template/Template";

import { cx } from "emotion";
import Styles from "./AboutStyles"

import SectionHeader from "../Editor/SectionHeader/SectionHeader"

type Props = {};
type State = {};

export default class About extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Template>
                <div className={ cx( Styles.spanStyling )}>
                    <h1 style={{ textAlign: "center", margin: "50px 0px", fontFamily: "Open Sans, sans-serif" }}>About</h1>
                    <h6 style={{ textAlign: "center", margin: "50px 0px", fontFamily: "Open Sans, sans-serif", color: "#6c757d" }}>More about Sol, from its creators.</h6>
                    <br/>
                    <p className={ cx( Styles.regParagraph )}>
                        The need for open access to knowledge and education is greater than ever - we created Sol with the aim of providing a more fun, engaging alternative to lecture-based learning. Sol allows you to learn in a video format with intercalated quizzes, allowing for both scalability and engagement.
                    </p>
                    <p className={ cx( Styles.regParagraph )}>
                        Upon visiting our site, you will be presented with a random assortment of user-generated <span>Lessons</span>, a search bar to search for a specific lesson, and a button taking you to the Lesson Editor.
                    </p>
                    <p className={ cx( Styles.regParagraph )}>
                        A <span>Lesson</span> consists of:
                        <ul>
                            <li>A <span>YouTube Video</span></li>
                            <li>Multiple-choice questions, each linked to a timestamp specified by the Lesson's Creator</li>
                        </ul>
                    </p>
                    <p className={ cx( Styles.regParagraph )}>
                        <br/>
                        <SectionHeader>Viewing Lessons</SectionHeader>
                        <br/>
                        Upon finding a lesson that interests you, you will be taken to the Classroom, where the lesson plays out.
                        As you watch through the video, the video will pause at relevant timestamps specified by the Lesson's Creator, and you will be presented with a multiple-choice question at each pause.
                        Once answered, the video will resume, pausing and quizzing you at further timestamps.
                    </p>
                    <p className={ cx( Styles.regParagraph )}>
                        <br/>
                        <SectionHeader>Editing Lessons</SectionHeader>
                        <br/>
                        On the other hand, you may want to create your own lessons for others to share. 
                        It may be on a topic you've just recently learnt about, or on something that's always been your passion. 
                        Pressing the green Plus Button on the homepage will take you to the editor. 
                        The process goes like this:
                        <ul>
                            <li>
                                Firstly, you will be prompted to input a title and a short description for your lesson. 
                                You may optionally add your name and any other personal details here.
                            </li>
                            <li>
                                On the next page, you may paste in the URL for the YouTube video you want to create your lesson around. 
                                This could be a lecture or any other kind of educational video.
                            </li>
                            <li>
                                After confirming your video, you will then be presented with a button below the video. 
                                Now, you may go through the video, and at an appropriate timestamp, press the button.
                            </li>
                            <li>
                                The video will be paused, and a popup will appear. 
                                Here, you will fill out the question, 4 possible answers, specify which answer is correct and give an optional, short explanation on the correct answer. 
                                Submit this when all necessary details have been filled out.
                            </li>
                            <li>
                                This will add a question to your lesson. Repeat this for as many timestamps as you deem appropriate.
                            </li>
                            <li>
                                Once you feel you have added an appropriate set of questions, you can submit your lesson.
                            </li>
                        </ul>
                        You can congratulate yourself here - you've just created a full Lesson on Sol! You can copy the link to your tutorial before you return to the homepage and share it with your friends, colleagues or students.
                    </p>
                </div>
            </Template>
        )
    }

}