import React from "react";
// import mock01 from '../assets/images/mock01.png';
// import mock02 from '../assets/images/mock02.png';
// import mock03 from '../assets/images/mock03.png';
// import mock04 from '../assets/images/mock04.png';
// import mock05 from '../assets/images/mock05.png';
// import mock06 from '../assets/images/mock06.png';
// import mock07 from '../assets/images/mock07.png';
// import mock08 from '../assets/images/mock08.png';
// import mock09 from '../assets/images/mock09.png';
// import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Featured Projects</h1>
        <div className="projects-grid">
            <div className="project">
                {/* <a><img src={mock01} className="zoom" alt="Enterprise Knowledge AI Agent" width="100%"/></a> */}
                <h2>CompeteIQ</h2>
                <p> Multi-agent competitive intelligence pipeline built with LangGraph,
                    GPT-4o, and ChromaDB. Supervisor-worker orchestration with shared
                    persistent state, episodic memory for compounding intelligence
                    across runs, Tavily web search integration, FastAPI REST layer,
                    and automated weekly scheduling via GitHub Actions.
                </p>
            </div>
            <div className="project">
                {/* <a><img src={mock02} className="zoom" alt="Transformer-Based Text Understanding" width="100%"/></a> */}
                <h2>Enterprise Knowledge AI Agent</h2>
                <p> End-to-end retrieval-augmented generation (RAG) system using
                    HuggingFace, LangChain, FAISS vector search, and cross-encoder
                    re-ranking. Designed grounding and citation mechanisms to reduce
                    LLM hallucinations; built automated evaluation pipelines measuring
                    factual consistency and retrieval accuracy.
                </p>
            </div>
            <div className="project">
                {/* <a><img src={mock03} className="zoom" alt="LLM Hallucination Study" width="100%"/></a> */}
                <h2>LLM Hallucination & Trustworthiness Study</h2>
                <p> Reproduced and extended peer-reviewed NLP research on hallucination
                    detection. Designed controlled experiments comparing baseline LLMs
                    vs. retrieval-augmented systems; evaluated factual accuracy,
                    hallucination rate, uncertainty, and bias using automated metrics
                    across model configurations.
            </p>
            </div>
            <div className="project">
                {/* <a><img src={mock04} className="zoom" alt="LLM-Powered Knowledge System" width="100%"/></a> */}
                <h2>Transformer-Based Text Classification Pipeline</h2>
                <p> Fine-tuned BERT-based models for multi-class text classification on
                    real-world datasets including customer issues, support tickets, and
                    reviews. Conducted error analysis using precision/recall and
                    confusion matrices; improved robustness via data augmentation and
                    hyperparameter tuning.
                </p>
            </div>
        </div>
    </div>
    );
}

export default Project;