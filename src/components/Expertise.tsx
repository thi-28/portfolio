import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import {
    faDatabase, faCubesStacked, faMicroscope,
    faShield, faNetworkWired, faRocket
} from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const dataEngineering = [
    "Python", "SQL", "Apache Spark",
    "Databricks", "AWS Lambda", "Docker",
    "FastAPI", "REST APIs", "Git"
];

const mlCore = [
    "PyTorch", "scikit-learn", "NumPy", "Pandas",
    "CNNs", "LSTMs", "Attention Models",
    "Fine-tuning", "Hyperparameter Tuning"
];

const nlpAndTransformers = [
    "HuggingFace Transformers", "BERT",
    "Text Classification", "Tokenization",
    "Sequence Modeling", "Data Augmentation",
    "Error Analysis", "Confusion Matrix Evaluation"
];

const llmEvaluation = [
    "RAG Systems", "FAISS", "ChromaDB",
    "Hallucination Detection", "Prompt Engineering",
    "OpenAI API", "Anthropic API",
    "Experiment Design", "Model Benchmarking"
];

const agenticSystems = [
    "LangGraph", "LangChain", "LlamaIndex",
    "Multi-Agent Orchestration", "Agent Memory",
    "Stateful Workflows", "Tool Use", "MCP"
];

const automationAndShipping = [
    "n8n", "Zapier", "Apify",
    "Claude Code", "Cursor",
    "GitHub Actions", "MLflow",
    "Streamlit", "Vibe Coding"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">

                    <div className="skill">
                        <FontAwesomeIcon icon={faDatabase} size="3x"/>
                        <h3>Data Pipelines & Cloud Systems</h3>
                        <p>
                            I started building production pipelines,
                            automating validation across enterprise systems,
                            and learning what it actually takes to ship
                            something that runs reliably at scale.
                        </p>
                        <div className="flex-chips">
                            {dataEngineering.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faCubesStacked} size="3x"/>
                        <h3>Machine Learning</h3>
                        <p>
                            Going from using ML as a tool to understanding
                            how it works. Training models, debugging loss
                            curves, and learning that good data beats
                            a fancy architecture every time.
                        </p>
                        <div className="flex-chips">
                            {mlCore.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faMicroscope} size="3x"/>
                        <h3>NLP & Transformer Models</h3>
                        <p>
                            Fine-tuning transformers on real, messy datasets.
                            Running error analysis, understanding failure modes,
                            and building text understanding systems that
                            hold up beyond the benchmark.
                        </p>
                        <div className="flex-chips">
                            {nlpAndTransformers.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faShield} size="3x"/>
                        <h3>LLM Evaluation & Trustworthy AI</h3>
                        <p>
                            Curiosity about "when can you
                            actually trust an LLM?" got me to build RAG pipelines,
                            reproduce hallucination research, and design
                            evaluation frameworks to measure what matters.
                        </p>
                        <div className="flex-chips">
                            {llmEvaluation.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faNetworkWired} size="3x"/>
                        <h3>Agentic Systems & Multi-Agent Architecture</h3>
                        <p>
                            Building systems where agents take actions,
                            share state, and compound intelligence over time.
                            Stateful orchestration, memory layers, and
                            multi-agent coordination patterns.
                        </p>
                        <div className="flex-chips">
                            {agenticSystems.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faRocket} size="3x"/>
                        <h3>Automation & Shipping Fast</h3>
                        <p>
                            Moving from idea to deployed system.
                            Workflow automation, AI-assisted development,
                            and the tools that let you iterate in hours
                            instead of weeks.
                        </p>
                        <div className="flex-chips">
                            {automationAndShipping.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Expertise;