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
    const { language, tags } = useContext(LanguageContext);

    return <>
        <h1 className="title">{tags.page.content.cv.title}</h1>
        <p>{tags.page.content.cv.text}</p>
        <p><a href={`/cv/spiceman_cv_${language}.pdf`}>{tags.page.content.cv.download}</a></p>
        <p>{tags.page.content.cv.contact}</p>
        <p><a href="mailto:spiceman@gmail.com?subject=CV request">spiceman@gmail.com</a></p>
    </>
}

const TopPageJapanese = () => {
      return <>
        <h1 className="title">ようこそ！</h1>
        <p>アルゼンチンからきた日本住まいの組み込みとウェブ開発者です。</p>
      </>;
};

const TopPageEnglish = () => {
      return <>
        <h1 className="title">Welcome!</h1>
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
        <Route path="/curriculum-vitae" element={ <CurriculumVitae /> } />
    </Routes>
    </div>;

};

export default ContentRouter;