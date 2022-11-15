export default Title = ({ title, centered }) => {
    return <h1 className={centered && "text-center"}>{title}</h1>;
};