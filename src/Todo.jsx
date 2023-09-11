// Conditional Rendering Option 01: If-Else
// export default function Member({task, isDone}){
//     if (isDone === true) {
//         return <li>Finished: {task}</li>
//     } else {
//         return <li>Work On: {task}</li>
//     }
// }

// // Conditional Rendering Option 02: If-Else Shortcut
// export default function Member({task, isDone}){
//     if (isDone === true) {
//         return <li>Finish: {task}</li>
//     }
//         return <li>Work On: {task}</li>
// }


// Conditional Rendering Option 03: Ternary Operator
// export default function Member({ task, isDone }) {
//         return (
//             <div>
//                 <li>
//                     {isDone ? 'Finishing' : 'Working'}{task}
//                 </li>
//             </div>
//         )
// }


// Conditional Rendering Option 04: && Operator (If condition is true)
// export default function Member({ task, isDone }) {
//     return (
//         <div>
//             <li>
//                  {task} {isDone && ': Done'}
//             </li>
//         </div>
//     )
// }

// Conditional Rendering Option 05: || Operator (If condition is false)
// export default function Member({ task, isDone }) {
//     return (
//         <div>
//             <li>
//                 {task} {isDone || ': Do it'}
//             </li>
//         </div>
//     )
// }

// Conditional Rendering Option 06: Using Variable
export default function Member({task, isDone}){
    let listItem;
    if (isDone === true) {
        listItem = <li>Finish: {task}</li>
    }else{
        return <li>Work On: {task}</li>
    }
    return listItem;
}



