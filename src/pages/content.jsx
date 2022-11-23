import { useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import LanguageContext from "../context/language";

const Blog = () => {
    return <div style={{ textAlign: "center" }}>
        <h1>Under development.</h1>
        <h1>開発中</h1>
    </div>
}
const ProjectsList = () => {
    return <>
    </>
}
const CurriculumVitae = () => {
    return <>
    </>
}

const TopPageJapanese = () => {
      return <>
        <h1>ようこそ！</h1>
        <p>アルゼンチンからきた日本住まいの組み込みとウェブ開発者です。</p>
      </>;
};

const TopPageEnglish = () => {
      return <>
        <h1>Hello! I'm Marcel Montes.</h1>
        <p>I'm an experienced embedded and web software developer from Argentina, living in Japan.</p>
      </>;
};

export const TopPage = () => {
    const { language, tags } = useContext(LanguageContext);

    const page = language === "en" ? <TopPageEnglish /> : <TopPageJapanese />

    return page;
};

const ContentRouter = () => {
    return <div className="content"><Routes>
        <Route path="/" element={ <TopPage /> } />
        <Route path="/blog" element={ <Blog /> } />
        <Route path="/projects" element={ <ProjectsList /> } />
        <Route path="/curriculum-vitae" element={ <Blog /> } />
    </Routes>
    </div>;

};

export default ContentRouter;