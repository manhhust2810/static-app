import * as types from "../constants/ActionTypes";
import { v4 as uuidv4 } from "uuid";

const newRow = [{
    generateId: uuidv4(),
    semester: "",
    courseId: "",
    courseTitle: "",
    credits: "",
    process: "",
    examination: "",
    factor: "",
    action: "",
    point: "",
    grade: "",
    status: "",
}];

const initialState = {
    handleState: [],
    currentState: newRow ? newRow : [],
}

function roundToOne(process, examination, factor, precision) {
    const average = process*factor+examination*(1-factor);
    const multiplier = Math.pow(10, precision || 0);
    return Math.round(average * multiplier) / multiplier;
}

const listOfCourse = [{
    courseId: "1a",
    grade: 4,
    credits: 3
},
{
    courseId: "2s",
    grade: 2.5,
    credits: 2
},
{
    courseId: "3f",
    grade: 1.5,
    credits: 4
},
{
    courseId: "4j",
    grade: 2,
    credits: 2
},
{
    courseId: "5q",
    grade: 3,
    credits: 3
}
];


const GPA = listOfCourse.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.credits*currentValue.grade;
}, 0);

// console.log("GPA", GPA);

const TranscriptReducer = (state = initialState, action) => {
    const { 
        process, 
        factor, 
        examination, 
        grade,
        semester,
        courseId,
        courseTitle,
        credits,
        generateId
     } = action;
    switch(action.type) {
        case types.CURRENT_ROW:
            return {...state};
        case types.ADD_NEW_ROW:
            return {
                ...state,
                currentState:  [
                    ...state.currentState,
                    {
                        generateId: uuidv4(),
                        semester: "",
                        courseId: "",
                        courseTitle: "",
                        credits: "",
                        process: "",
                        examination: "",
                        factor: "",
                        action: "",
                        point: "",
                        grade: "",
                        status: "",
                    }
                ]
            };
        case types.DELETE_ROW:
            return {
                handleState: state.handleState.filter(item => item.generateId !== action.id),
                currentState: state.currentState.filter(item => item.generateId !== action.id)
            }
        case types.SAVE_ROW:
            console.log("generateId", generateId);
            const newList = {
                generateId: generateId,
                semester: semester,
                courseId: courseId,
                courseTitle: courseTitle,
                credits: credits,
                point: roundToOne(process, examination, factor, 1),
                grade: grade,
                process: process,
                examination: examination,
                factor: factor,
                status: "Pending"
            }
            // const handleStateAfterSave = state.currentState.map((item)=>{
            //     if(item.generateId === action.id){
            //         return {
            //             ...item,
            //             ...newList
            //         }
            //     }
            //     return {};
            // });
            const currentStateAfterSave = state.currentState.filter(item=>item.generateId !== action.id);
            return {
                currentState: [...currentStateAfterSave],
                handleState: [...state.handleState, newList]
            }
        default:
            return {...state}; 
    }
};


export default TranscriptReducer;