import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import UploadHeader from '../Header/UploadHeader'
import { pdfjs } from 'react-pdf';
import sendIcon from '../../assets/send.png'


pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;



const DocUpload = () => {
    const [selectedPdf, setSelectedPdf] = useState();
    const [input, setInput] = useState('');
    const [pdfData, setPdfData] = useState('');
    const [chat, setChat] = useState(false);

    const [chatData, setChatData] = useState([]);

    const addMessage = (type, message) => {
        const newMessage = { type, message };

        setChatData([...chatData, newMessage]);
    };


    useEffect(() => {
        console.log(pdfData);
    }, [pdfData]);

    const handleChange = (e) => {
        setSelectedPdf(e.target.files[0]);
    }

    const handleUpload = () => {
        console.log("uploaded Pdf :- ", selectedPdf);

        if (selectedPdf) {
            if (selectedPdf.type === "application/pdf") {
                handlePdfFile(selectedPdf);
                setChat(true);
            } else {
                console.log("Unsupported file type");
            }
        }
    }

    const handlePdfFile = async (file) => {

        if (file) {
            const pdfData = await file.arrayBuffer();

           
            const pdf = await pdfjs.getDocument({ data: pdfData }).promise;
            const textArray = [];

            for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
                const page = await pdf.getPage(pageNumber);
                const textContent = await page.getTextContent();

                
                const pageText = textContent.items.map((item) => item.str).join(' ');
                textArray.push(pageText);
            }

            const fullText = textArray.join('\n');
            setPdfData(fullText);
        }
    }

    function extractAnswer(inputQuery, pdfText) {
        const queryWords = inputQuery.toLowerCase().split(' ');
        const pdfWords = pdfText.toLowerCase().split(' ');

        const matchingWords = pdfWords.filter((word) => queryWords.includes(word));

        const startIndex = Math.max(0, pdfWords.indexOf(matchingWords[0]) - 10);
        const endIndex = Math.min(pdfWords.length, pdfWords.indexOf(matchingWords[matchingWords.length - 1]) + 10);

        const extractedAnswer = pdfWords.slice(startIndex, endIndex).join(' ');

        return extractedAnswer;
    }


    const handleAnswerClick = async () => {
        setChatData((prevChatData) => {
            const newMessage = { type: 'que', message: input };
            return [...prevChatData, newMessage];
        });

        const answer = await extractAnswer(input, pdfData);

        console.log(answer);
        setChatData((prevChatData) => {
            const newMessage = { type: 'ans', message: answer };
            return [...prevChatData, newMessage];
        });

        setInput('');
    };



    return (
        <>
            {!chat ?
                <StyledBox>
                    <UploadHeader />
                    <Content>
                        <div className='box'>
                            <span className='title'>Upload PDF to get Answer from that pdf through chat</span>
                            <input
                                type="file"
                                accept='.pdf'
                                id='file'
                                onChange={handleChange}
                            />
                            <button onClick={handleUpload}>Upload PDF</button>
                        </div>
                    </Content>
                </StyledBox>
                :
                <StyledBox2>
                    <UploadHeader />

                    <Content2>
                        {chatData.length > 0 &&
                            chatData.map((chat, index) => (
                                <div className={`${chat.type === 'que' ? 'que' : 'ans'}`} key={index}>
                                    <span className={`${chat.type === 'que' ? 'queText' : 'ansText'}`}>{chat.message}</span>
                                </div>
                            ))
                        }
                    </Content2>

                    <div className='inputBox'>
                        <input
                            type='text'
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className='input'
                        />
                        <img src={sendIcon} className='sendIcon' onClick={handleAnswerClick} />
                    </div>
                </StyledBox2>
            }
        </>
    )
}

export default DocUpload


const StyledBox = styled.div`
width: 100%;
display: flex;
flex-direction: column;
position: absolute;



`
const Content = styled.div`
margin-top: 5rem;
position: absolute;
width: 90%;
padding: 1rem 5%;
display: flex;
gap: 5%;
justify-content: center;
align-items: center;
height: calc(100vh - 8rem);


.box {
    display: flex;
    flex-direction: column;
    height: 13rem;
    width: 50%;
    background-color: gray;
    justify-content: space-between;
    align-items: center;
    box-shadow:2px 2px 3px 2px black;
    padding: 2rem 3rem;
    border-radius: 1rem;




    .title {
        font-size: 1.4rem;
        font-weight: 500;
        
    }
    
    input {
        margin-left: 4rem;
    }
    
    button {
        padding: 0.5rem 0.7rem;
        background-color: green;
        border: 0.1rem solid black;
        border-radius: 0.5rem;
        color: white;
        text-shadow: 1px 2px 3px black;
        font-size: 1rem;
        cursor: pointer;
    }
}


`


const StyledBox2 = styled.div`
width: 100%;
display: flex;
flex-direction: column;



.inputBox {
    height: 5rem;
    background-color: var(--background-color);
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 50;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.1%;
}

.input {
    width: 90%;
    height: 2rem;
    background-color: white;
    border: 0.08rem solid lightgrey;
    border-radius: 0px;
    outline-color: grey;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: var(--color);
}

.sendIcon {
    width: 2rem;
    cursor: pointer;
    height: 2.9rem;
    background-color: white;
    border-radius : 0px;
}

`
const Content2 = styled.div`
position:absolute;
margin-top: 4rem;
margin-bottom: 5rem;
width: 90%;
padding: 3rem 5%;
display: flex;
min-height: calc(100vh - 4rem);
flex-direction: column;
gap: 1.5rem;
background-color: grey;


.que {
    display: flex;
    width: 100%;
    justify-content: flex-end;
}

.ans {
    display: flex;
    width: 100%;
    justify-content: flex-start;
}

.queText {
    background-color: orange;
    color: black;
    font-size: 1rem;
    font-weight: 400;
    padding: 1rem 1rem;
    border-radius: 0.7rem;
    max-width: 40%;
    display: flex;
}


.ansText {
    background-color: yellow;
    color: color;
    padding: 1rem 1rem;
    font-size: 1rem;
    font-weight: 400;
    border-radius: 0.7rem;
    max-width: 40%;
    display: flex;
}

`

