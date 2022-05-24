import React, { useState, useEffect } from 'react';
import '../css/practice.css';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { call } from '../service/APIService';
import { Link , useLocation} from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-highlight'

function TestCodePage() {

<<<<<<< HEAD

    const [code, setCode] = useState('for i');
=======
    const location = useLocation();
    const [code, setCode] = useState('');
>>>>>>> ab8de03b588d6f8b38a2b9a744ccf4517295a983
    const [codeResult, setCodeResult] = useState('Null');
    const [problem, setProblem] = useState('');

    const lecture_content_seq = location.state.lecture_content_seq;

    const SendingCode = () => {
        console.log("호출된다")
        call("/lectures/1/lectureContent/" + lecture_content_seq+ "/code", "POST", { 'code': code.toString() })
            .then(
                response => {
                    console.log(response)
                    if (response['status_code'] == 400) {

                        setCodeResult(response['data'][0][0])
                    }
                    else {
                        const codeResult = response['data'][0];
                        if (codeResult) {
                            console.log(codeResult)
                            setCodeResult("맞았습니다");
                        }
                        else {
                            setCodeResult("틀렸습니다");
                        }
                    }

                }
            )
    }

    const getExerciseProblem = () =>{
        call('/lectures/lectureContents/'+ lecture_content_seq +'/exercise', 'GET')
        .then(
            response =>{
                setProblem(response['data'])
            }
        )
    }

    useEffect(() => {
		getExerciseProblem();
	  },[]);



    return (
        <div className='TestCode'>

            <div className='code_body'>
                <div className='code_header'>
                    <br></br>
                    <div className='code_he0'>CrawlLearn</div>
                    <div className='code_he1'>강의 대분류</div>
                    <div className='code_he2'>강의 소분류</div>
                </div>

                <div className='code_nav'>
                    <div className='code_bo1'>강의 이름</div>
                    <button className="button_exec" onClick="SendingCode">실행</button>

                </div>

<<<<<<< HEAD
                <div className='code_article'>
                    여기 뭐하는 칸인지 아시는분?
=======
                <div class='code_article'>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}children={problem.toString()}></ReactMarkdown>
>>>>>>> ab8de03b588d6f8b38a2b9a744ccf4517295a983



                </div>

                <div className='code_form'>
                    <div className='code_bo2'>파일.py</div>

                    <CodeEditor className="CodeEditor" value={code} language="python" placeholder="Please enter Python code."
                        onChange={(evn) => setCode(evn.target.value)}
                        padding={15}
                        style={{
                            fontSize: 12,
                            backgroundColor: "#f5f5f5",
                            fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace'

                        }} />



                </div>

                <div className='code_section'>
                    <table>
                        <tr className="tr1">
                            <td className="td1">
                                결과
                            </td>
                        </tr>
                        <tr className="tr2">
                            <td className="td2">

                                {codeResult}

                            </td>
                        </tr>
                    </table>
                </div>




            </div>

<<<<<<< HEAD
            <div className='code_footer'>
                <Link to="/questionPage">
                    <button className="qna">Q&A</button>
=======
            <div class='code_footer'>
                <Link to="/qaList">
                    <button class="qna">Q&A</button>
>>>>>>> ab8de03b588d6f8b38a2b9a744ccf4517295a983
                </Link>

            </div>
        </div>
    );
}

export default TestCodePage;